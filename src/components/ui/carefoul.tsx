import {
  BathIcon,
  BoneIcon,
  HeartPulseIcon,
  PackageCheckIcon,
  PawPrintIcon,
  ShieldAlertIcon,
  ShieldCheckIcon,
  SparklesIcon,
} from "lucide-react";

export function Carefoul() {
  return (
    <section
      id="carefoul"
      className="w-full py-16 h-full bg-base-100 flex justify-center items-center relative"
    >
      <div className="w-full h-full max-w-7xl flex items-center flex-col gap-2 md:px-0 px-6 ">
        <div className="flex items-start justify-center flex-col gap-2  w-full">
          <span className="tracking-wider font-body font-semibold text-primary text-xs">
            CUIDADO CON CRITERIO
          </span>

          <div className="relative">
            <p className="font-heading text-balance font-light text-4xl">
              Entender el manto también es cuidarlo.
            </p>
            <PawPrintIcon className="size-6 min-w-6 text-secondary/30 absolute -top-10 md:-top-4 right-12 md:-right-12" />
          </div>

          <div className="flex items-start md:items-center justify-between md:flex-row flex-col w-full">
            <p className="text-neutral/70 text-balance">
              Cada baño, herramienta y corte responde a una necesidad real del
              perro.
            </p>

            <div className="rounded-lg text-neutral font-body font-semibold text-xs bg-white border border-secondary/50 gap-2 py-2 px-3 hidden md:flex items-center justify-center">
              <HeartPulseIcon className="text-success size-4 min-w-4" />
              Siempre evaluamos antes
            </div>
          </div>
        </div>

        <div className="flex items-center md:flex-row flex-col gap-4 w-full">
          <div className="w-full min-h-72 max-w-md rounded-lg h-full bg-secondary/40 p-6 flex items-end justify-center">
            <div className=" rounded-lg gap-2 flex flex-col bg-neutral/80 p-4 relative">
              <span className="text-xs text-secondary font-medium">
                BAÑO CON PROPÓSITO
              </span>
              <p className="font-heading text-white text-balance font-light text-lg">
                Limpieza profunda, piel cuidada y secado completo.
              </p>

              <PawPrintIcon className="size-6 min-w-6 text-secondary/30 absolute right-4 top-3" />
            </div>
          </div>

          <div className="flex flex-col gap-2 w-full h-full">
            <div className="flex md:flex-row flex-col items-center gap-2">
              <div className="rounded-lg border h-52 border-secondary/50 bg-white p-6 flex flex-col gap-2 w-full">
                <div className="flex items-center justify-between">
                  <div className="rounded-sm text-neutral p-2 flex justify-center items-center bg-primary/40">
                    <BathIcon className="size-6 min-w-6" />
                  </div>

                  <span className="text-primary font-heading text-lg">01</span>
                </div>

                <p className="font-heading text-balance font-light text-xl">
                  Baño saludable
                </p>

                <p className="text-neutral/70 text-sm w-full">
                  Agua templada, shampoo según piel y manto, enjuague completo y
                  secado sin humedad retenida.
                </p>
              </div>

              <div className="rounded-lg border h-52 border-secondary/50 bg-white p-6 flex flex-col gap-2 w-full">
                <div className="flex items-center justify-between">
                  <div className="rounded-sm text-neutral p-2 flex justify-center items-center bg-primary/40">
                    <SparklesIcon className="size-6 min-w-6" />
                  </div>

                  <span className="text-primary font-heading text-lg">02</span>
                </div>

                <p className="font-heading text-balance font-light text-xl">
                  Deslanado responsable
                </p>

                <p className="text-neutral/70 text-sm w-full">
                  Retiramos el subpelo muerto con técnica y paciencia: menos
                  nudos y caída. sin dañar el pelo protector.
                </p>
              </div>
            </div>

            <div className="flex items-center md:flex-row flex-col gap-2">
              <div className="rounded-lg border h-52 border-secondary/50 bg-white p-6 flex flex-col gap-2 w-full">
                <div className="flex items-center justify-between">
                  <div className="rounded-sm text-neutral p-2 flex justify-center items-center bg-primary/40">
                    <PackageCheckIcon className="size-6 min-w-6" />
                  </div>

                  <span className="text-primary font-heading text-lg">03</span>
                </div>

                <p className="font-heading text-balance font-light text-xl">
                  Materiales que elegimos
                </p>

                <p className="text-neutral/70 text-sm w-full">
                  Productos profesionales, herramientas desinfectadas, cepillos
                  adecuados y temperatura de secado contralada
                </p>
              </div>

              <div className="rounded-lg border h-52 border-secondary/50 bg-white p-6 flex flex-col gap-2 w-full">
                <div className="flex items-center justify-between">
                  <div className="rounded-sm text-neutral p-2 flex justify-center items-center bg-primary/40">
                    <ShieldAlertIcon className="size-6 min-w-6" />
                  </div>

                  <span className="text-primary font-heading text-lg">04</span>
                </div>

                <p className="font-heading text-balance font-light text-xl">
                  Por qué no se debe pelar
                </p>

                <p className="text-neutral/70 text-sm w-full">
                  En mantos dobles, el pelo protege del sol y regula la
                  temperatura. Raparlo puede alterar su crecimiento natural.
                </p>
              </div>
            </div>
          </div>
        </div>

        <BoneIcon className="size-6 min-w-6 text-secondary/30 absolute right-1/2 bottom-2" />

        <div className="flex items-center  gap-4 p-4 w-full rounded-lg bg-neutral justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center bg-secondary/15 rounded-sm justify-center p-2 text-secondary">
              <ShieldCheckIcon className="size-5 min-w-5" />
            </div>

            <div className="flex flex-col">
              <p className="font-heading text-white text-balance text-lg">
                El pelo también protege.
              </p>
              <span className="text-white/60 text-xs">
                Antes de cortar evaluamos raza, tipo de manto, piel y estilo de
                vida. Si hace falta cortar, elegimos una alternativa segura.
              </span>
            </div>
          </div>

          <div className="hidden rounded-sm text-secondary font-body font-medium text-xs bg-white/10 py-2 px-3 md:flex items-center justify-center">
            Evaluación individual
          </div>
        </div>
      </div>
    </section>
  );
}
