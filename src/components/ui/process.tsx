import {
  BathIcon,
  CameraIcon,
  ClipboardCheckIcon,
  DoorOpenIcon,
  DropletsIcon,
  PawPrintIcon,
  ScissorsIcon,
  SparklesIcon,
  WindIcon,
} from "lucide-react";

export function Process() {
  const steps = [
    { name: "Recibimos", icon: DoorOpenIcon },
    { name: "Evaluamos", icon: ClipboardCheckIcon },
    { name: "Baño", icon: BathIcon },
    { name: "Secado", icon: WindIcon },
    { name: "Corte", icon: ScissorsIcon },
    { name: "Detalles", icon: SparklesIcon },
    { name: "Foto y entrega", icon: CameraIcon },
  ];

  return (
    <section className="relative flex h-full w-full items-center justify-center overflow-hidden bg-white py-16 md:py-24">
      <div className="flex h-full w-full max-w-7xl flex-col items-center gap-12 px-6">
        <div className="relative flex max-w-2xl flex-col items-center gap-2 text-center">
          <span className="font-body text-xs font-semibold tracking-wider text-primary">
            CÓMO TRABAJAMOS
          </span>
          <h2 className="font-heading text-4xl font-light text-balance">
            Un proceso atento, de principio a fin.
          </h2>
          <p className="text-sm text-neutral/60">
            Siete pasos claros, siempre ajustados a la comodidad de tu mascota.
          </p>
          <span className="absolute -right-8 -top-4 size-20 rounded-full bg-primary/10" />
        </div>

        <ol className="grid w-full grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4 md:grid-cols-7 md:gap-2">
          {steps.map((step, index) => (
            <li className="relative flex flex-col items-center gap-3" key={step.name}>
              {index < steps.length - 1 && (
                <span className="absolute left-[65%] top-7 hidden h-px w-[70%] bg-secondary/50 md:block" />
              )}

              <div
                className={`relative z-10 flex size-14 items-center justify-center rounded-full ${
                  index === steps.length - 1
                    ? "bg-primary text-white"
                    : "bg-base-100 text-neutral"
                }`}
              >
                <step.icon className="size-5" />
                <span className="absolute -right-1 -top-1 flex size-5 items-center justify-center rounded-full bg-white font-body text-[9px] font-bold text-primary shadow-sm">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <span className="text-center text-xs font-medium text-neutral/75">
                {step.name}
              </span>
            </li>
          ))}
        </ol>
      </div>

      <DropletsIcon className="absolute left-8 top-24 size-7 text-primary/20" />
      <PawPrintIcon className="absolute bottom-7 right-10 size-7 text-secondary/25" />
    </section>
  );
}
