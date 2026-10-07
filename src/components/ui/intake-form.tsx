import {
  ArrowUpRightIcon,
  Clock3Icon,
  LockKeyholeIcon,
  PawPrintIcon,
} from "lucide-react";
import { useState, type FormEvent } from "react";
import {
  buildIntakeWhatsAppMessage,
  buildWhatsAppUrl,
  WHATSAPP_PHONE,
  type IntakeWhatsAppData,
} from "@/lib/functions";

type FieldName =
  | "dogName"
  | "ownerName"
  | "breed"
  | "sex"
  | "color"
  | "age"
  | "weight"
  | "neutered"
  | "vaccinated"
  | "firstVisit"
  | "allergy"
  | "healthProblem"
  | "behavior"
  | "note";

type FormErrors = Partial<Record<FieldName, string>>;

const REQUIRED_FIELDS: FieldName[] = [
  "dogName",
  "ownerName",
  "breed",
  "sex",
  "color",
  "age",
  "weight",
  "neutered",
  "vaccinated",
  "firstVisit",
  "behavior",
];
const SUBMIT_COOLDOWN = 45_000;
const SUBMIT_STORAGE_KEY = "de-pelos-intake-last-submit";

const baseFieldClassName =
  "w-full rounded-md border bg-base-100 px-3 text-sm text-neutral outline-none transition-colors placeholder:text-neutral/40 focus:border-primary focus:outline-none focus-visible:outline-none focus:ring-1 focus:ring-primary/25";

function fieldClassName(error?: string) {
  return `${baseFieldClassName} ${
    error
      ? "border-red-500 bg-red-50/40 focus:border-red-500 focus:ring-red-200"
      : "border-secondary/40"
  }`;
}

function ErrorMessage({ id, message }: { id: string; message?: string }) {
  if (!message) return null;

  return (
    <span className="text-[11px] font-medium text-red-600" id={id}>
      {message}
    </span>
  );
}

function YesNoField({
  error,
  legend,
  name,
}: {
  error?: string;
  legend: string;
  name: FieldName;
}) {
  const errorId = `${name}-error`;

  return (
    <fieldset className="flex flex-col gap-2">
      <legend className="text-xs font-semibold text-neutral/80">
        {legend} <span className="text-red-500">*</span>
      </legend>
      <div className="grid grid-cols-2 gap-2">
        {["Sí", "No"].map((option) => (
          <label
            className={`flex h-10 cursor-pointer items-center gap-2 rounded-md border bg-base-100 px-3 text-xs text-neutral/65 transition-colors has-[:focus-visible]:border-primary ${
              error ? "border-red-500 bg-red-50/40" : "border-secondary/40"
            }`}
            key={option}
          >
            <input
              aria-describedby={error ? errorId : undefined}
              aria-invalid={Boolean(error)}
              className="size-4 accent-primary focus:outline-none focus-visible:outline-none"
              name={name}
              required
              type="radio"
              value={option}
            />
            {option}
          </label>
        ))}
      </div>
      <ErrorMessage id={errorId} message={error} />
    </fieldset>
  );
}

export function IntakeForm() {
  const [errors, setErrors] = useState<FormErrors>({});
  const [submissionError, setSubmissionError] = useState("");
  const [isOpeningWhatsApp, setIsOpeningWhatsApp] = useState(false);

  function clearFieldError(name: string) {
    if (!REQUIRED_FIELDS.includes(name as FieldName)) return;

    setErrors((currentErrors) => {
      if (!currentErrors[name as FieldName]) return currentErrors;
      const nextErrors = { ...currentErrors };
      delete nextErrors[name as FieldName];
      return nextErrors;
    });
    setSubmissionError("");
  }

  function validateForm(formData: FormData) {
    const nextErrors: FormErrors = {};

    for (const field of REQUIRED_FIELDS) {
      const value = formData.get(field);
      if (typeof value !== "string" || !value.trim()) {
        nextErrors[field] = "Este campo es obligatorio.";
      }
    }

    return nextErrors;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (isOpeningWhatsApp) return;

    const form = event.currentTarget;
    const formData = new FormData(form);
    const nextErrors = validateForm(formData);

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setSubmissionError("Revisá los campos marcados en rojo para continuar.");
      const firstInvalidField = REQUIRED_FIELDS.find(
        (field) => nextErrors[field],
      );
      requestAnimationFrame(() => {
        form
          .querySelector<HTMLElement>(`[name="${firstInvalidField}"]`)
          ?.focus();
      });
      return;
    }

    const honeypot = formData.get("website");
    if (typeof honeypot === "string" && honeypot.trim()) {
      setSubmissionError("No pudimos procesar el envío. Intentá nuevamente.");
      return;
    }

    try {
      const lastSubmit = Number(localStorage.getItem(SUBMIT_STORAGE_KEY) ?? 0);
      const remainingTime = SUBMIT_COOLDOWN - (Date.now() - lastSubmit);
      if (remainingTime > 0) {
        setSubmissionError(
          `Esperá ${Math.ceil(remainingTime / 1000)} segundos antes de volver a enviar.`,
        );
        return;
      }
    } catch {
      // El formulario puede continuar si el navegador bloquea localStorage.
    }

    const value = (name: FieldName) => String(formData.get(name) ?? "").trim();
    const messageData: IntakeWhatsAppData = {
      dogName: value("dogName"),
      ownerName: value("ownerName"),
      breed: value("breed"),
      sex: value("sex"),
      color: value("color"),
      age: value("age"),
      weight: value("weight"),
      neutered: value("neutered"),
      vaccinated: value("vaccinated"),
      firstVisit: value("firstVisit"),
      allergy: value("allergy"),
      healthProblem: value("healthProblem"),
      behavior: value("behavior"),
      note: value("note"),
    };
    const message = buildIntakeWhatsAppMessage(messageData);
    const whatsappUrl = buildWhatsAppUrl(WHATSAPP_PHONE, message);

    setIsOpeningWhatsApp(true);
    setSubmissionError("");
    try {
      localStorage.setItem(SUBMIT_STORAGE_KEY, String(Date.now()));
    } catch {
      // La protección principal sigue siendo la confirmación manual en WhatsApp.
    }

    const whatsappWindow = window.open(whatsappUrl, "_blank");
    if (whatsappWindow) {
      whatsappWindow.opener = null;
    } else {
      window.location.assign(whatsappUrl);
    }
    window.setTimeout(() => setIsOpeningWhatsApp(false), 1_000);
  }

  return (
    <section className="relative flex h-full w-full items-center justify-center overflow-hidden bg-base-100 py-16 md:py-20">
      <div className="flex h-full w-full max-w-7xl flex-col gap-8 px-6">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div className="flex max-w-3xl flex-col gap-2">
            <span className="font-body text-xs font-semibold tracking-wider text-primary">
              FICHA PREVIA · CONOZCAMOS A TU PERRO
            </span>
            <h2 className="font-heading text-4xl font-light text-balance">
              Contanos un poco sobre tu compañero.
            </h2>
            <p className="text-sm text-neutral/60">
              Esta información nos ayuda a preparar un turno más seguro,
              tranquilo y personalizado.
            </p>
          </div>

          <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs text-neutral/65">
            <Clock3Icon className="size-4 text-primary" />
            Completar lleva 2 minutos
          </div>
        </div>

        <form
          className="grid gap-8 rounded-lg bg-white p-5 shadow-sm md:grid-cols-2 md:p-8"
          noValidate
          onChange={(event) => {
            const target = event.target as unknown as
              | HTMLInputElement
              | HTMLSelectElement
              | HTMLTextAreaElement;
            clearFieldError(target.name);
          }}
          onSubmit={handleSubmit}
        >
          <label
            className="pointer-events-none absolute -left-[9999px]"
            aria-hidden="true"
          >
            Sitio web
            <input autoComplete="off" name="website" tabIndex={-1} />
          </label>

          <div className="flex flex-col gap-5">
            <div>
              <h3 className="font-heading text-2xl font-light">
                Datos del perro
              </h3>
              <p className="text-xs text-neutral/55">
                Información básica para identificarlo y conocer sus cuidados.
              </p>
              <p className="mt-2 text-[11px] text-neutral/50">
                <span className="text-red-500">*</span> Todos los campos son
                obligatorios.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <TextField
                error={errors.dogName}
                label="Nombre del perro"
                maxLength={60}
                name="dogName"
                placeholder="Ej. Mora"
              />
              <TextField
                error={errors.ownerName}
                label="Nombre del propietario"
                maxLength={80}
                name="ownerName"
                placeholder="Tu nombre y apellido"
              />
              <TextField
                error={errors.breed}
                label="Raza"
                maxLength={60}
                name="breed"
                placeholder="Ej. Caniche"
              />

              <label className="flex flex-col gap-2 text-xs font-semibold text-neutral/80">
                <span>
                  Sexo <span className="text-red-500">*</span>
                </span>
                <select
                  aria-describedby={errors.sex ? "sex-error" : undefined}
                  aria-invalid={Boolean(errors.sex)}
                  className={`${fieldClassName(errors.sex)} h-10`}
                  defaultValue=""
                  name="sex"
                  required
                >
                  <option value="" disabled>
                    Seleccionar
                  </option>
                  <option value="Macho">Macho</option>
                  <option value="Hembra">Hembra</option>
                </select>
                <ErrorMessage id="sex-error" message={errors.sex} />
              </label>

              <TextField
                error={errors.color}
                label="Color"
                maxLength={50}
                name="color"
                placeholder="Ej. Blanco"
              />
              <TextField
                error={errors.age}
                label="Edad"
                maxLength={30}
                name="age"
                placeholder="Ej. 4 años"
              />
              <TextField
                error={errors.weight}
                label="Peso aproximado"
                maxLength={30}
                name="weight"
                placeholder="Ej. 8 kg"
              />
              <YesNoField
                error={errors.neutered}
                legend="¿Está castrado?"
                name="neutered"
              />
              <YesNoField
                error={errors.vaccinated}
                legend="¿Está vacunado?"
                name="vaccinated"
              />
            </div>

            <YesNoField
              error={errors.firstVisit}
              legend="¿Primera vez en la pelu?"
              name="firstVisit"
            />

            <TextField
              error={errors.allergy}
              label="Alergia"
              maxLength={160}
              name="allergy"
              placeholder="Si tiene alguna alergia, contanos cuál."
              required={false}
            />

            <TextAreaField
              error={errors.healthProblem}
              label="Problema de salud"
              maxLength={350}
              name="healthProblem"
              placeholder="Si tiene alguna condición, tratamiento o indicación veterinaria, contanos acá."
              required={false}
              rows={4}
            />
          </div>

          <div className="flex flex-col gap-5">
            <div>
              <h3 className="font-heading text-2xl font-light">
                Comportamiento y estado actual
              </h3>
              <p className="text-xs text-neutral/55">
                Todo detalle nos permite acompañarlo mejor durante el turno.
              </p>
            </div>

            <TextAreaField
              error={errors.behavior}
              label="Comportamiento"
              maxLength={500}
              name="behavior"
              placeholder="¿Es miedoso o reactivo? ¿Le molesta que le toquen las patas, la cara o alguna zona particular?"
              rows={6}
            />

            <TextAreaField
              error={errors.note}
              label="Nota adicional"
              maxLength={500}
              name="note"
              placeholder="Podés contarnos cualquier otro detalle que consideres importante."
              required={false}
              rows={6}
            />

            <div className="flex items-center gap-2 text-xs text-neutral/50">
              <LockKeyholeIcon className="size-4 min-w-4 text-primary" />
              Los datos no se guardan en la web; se preparan localmente para el
              mensaje de WhatsApp.
            </div>

            {submissionError && (
              <div
                aria-live="polite"
                className="rounded-md border border-red-200 bg-red-50 px-4 py-3 text-xs font-medium text-red-700"
                role="alert"
              >
                {submissionError}
              </div>
            )}

            <button
              className="flex h-11 w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-primary text-xs font-semibold text-white transition-all hover:bg-primary/90 focus:outline-none focus-visible:outline-none focus:ring-2 focus:ring-primary/30 disabled:cursor-wait disabled:opacity-60"
              disabled={isOpeningWhatsApp}
              type="submit"
            >
              {isOpeningWhatsApp
                ? "Abriendo WhatsApp…"
                : "Enviar ficha por WhatsApp"}
              <ArrowUpRightIcon className="size-4" />
            </button>
          </div>
        </form>
      </div>

      <PawPrintIcon className="absolute right-8 top-10 size-7 text-primary/15" />
    </section>
  );
}

function TextField({
  error,
  label,
  maxLength,
  name,
  placeholder,
  required = true,
}: {
  error?: string;
  label: string;
  maxLength: number;
  name: FieldName;
  placeholder: string;
  required?: boolean;
}) {
  const errorId = `${name}-error`;

  return (
    <label className="flex flex-col gap-2 text-xs font-semibold text-neutral/80">
      <span>
        {label}{" "}
        {required ? (
          <span className="text-red-500">*</span>
        ) : (
          <span className="font-normal text-neutral/40">(opcional)</span>
        )}
      </span>
      <input
        aria-describedby={error ? errorId : undefined}
        aria-invalid={Boolean(error)}
        className={`${fieldClassName(error)} h-10`}
        maxLength={maxLength}
        name={name}
        placeholder={placeholder}
        required={required}
      />
      <ErrorMessage id={errorId} message={error} />
    </label>
  );
}

function TextAreaField({
  error,
  label,
  maxLength,
  name,
  placeholder,
  required = true,
  rows,
}: {
  error?: string;
  label: string;
  maxLength: number;
  name: FieldName;
  placeholder: string;
  required?: boolean;
  rows: number;
}) {
  const errorId = `${name}-error`;

  return (
    <label className="flex flex-col gap-2 text-xs font-semibold text-neutral/80">
      <span>
        {label}{" "}
        {required ? (
          <span className="text-red-500">*</span>
        ) : (
          <span className="font-normal text-neutral/40">(opcional)</span>
        )}
      </span>
      <textarea
        aria-describedby={error ? errorId : undefined}
        aria-invalid={Boolean(error)}
        className={`${fieldClassName(error)} resize-none p-3 font-normal`}
        maxLength={maxLength}
        name={name}
        placeholder={placeholder}
        required={required}
        rows={rows}
      />
      <ErrorMessage id={errorId} message={error} />
    </label>
  );
}
