import { GiftIcon, GhostIcon, HeartIcon, PawPrintIcon } from "lucide-react";

export function Events() {
  const events = [
    { name: "Navidad", icon: GiftIcon },
    { name: "Halloween", icon: GhostIcon },
    { name: "Enamorados", icon: HeartIcon },
  ];

  return (
    <section className="relative flex h-full w-full items-center justify-center overflow-hidden bg-base-100 py-16 md:py-20">
      <div className="flex h-full w-full max-w-7xl flex-col gap-8 px-6">
        <div className="flex flex-col items-start justify-between gap-3 md:flex-row md:items-end">
          <div className="flex flex-col gap-2">
            <span className="font-body text-xs font-semibold tracking-wider text-primary">
              MOMENTOS ESPECIALES
            </span>
            <h2 className="font-heading text-4xl font-light text-balance">
              También nos gusta celebrar.
            </h2>
          </div>
          <p className="max-w-md text-sm text-neutral/60 md:text-right">
            Escenarios, accesorios y fotos temáticas para fechas que merecen un
            recuerdo.
          </p>
        </div>

        <ul className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {events.map((event) => (
            <li
              className="relative flex min-h-72 flex-col overflow-hidden rounded-lg bg-base-200 md:min-h-80"
              key={event.name}
            >
              <div className="flex items-center gap-2 p-4 text-xs font-semibold text-neutral/70">
                <span className="flex size-6 items-center justify-center rounded-full bg-white text-primary">
                  <event.icon className="size-3.5" />
                </span>
                {event.name}
              </div>

              <div className="min-h-48 flex-1" aria-label={`Espacio para foto de ${event.name}`} />

              <span className="border-t border-primary/20 px-4 py-3 text-[10px] font-semibold tracking-wider text-primary">
                PLACEHOLDER · FOTO REAL
              </span>
            </li>
          ))}
        </ul>
      </div>

      <PawPrintIcon className="absolute right-7 top-10 size-7 rotate-12 text-primary/15" />
      <span className="absolute bottom-12 right-12 size-24 rounded-full bg-primary/10" />
    </section>
  );
}
