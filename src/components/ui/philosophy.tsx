import {
  DogIcon,
  HeartIcon,
  HeartPulseIcon,
  PawPrintIcon,
  RulerIcon,
  ScanIcon,
  WindIcon,
} from "lucide-react";

export function Philosophy() {
  const factors = [
    { name: "Personalidad y comportamiento", icon: DogIcon },
    { name: "Tamaño y tipo de pelo", icon: RulerIcon },
    { name: "Estado del manto", icon: ScanIcon },
    { name: "Necesidades particulares", icon: HeartPulseIcon },
  ];

  return (
    <section
      id="philosophy"
      className="relative flex h-full w-full items-center justify-center overflow-hidden bg-neutral py-16 text-white md:py-24"
    >
      <div className="flex h-full w-full max-w-7xl flex-col items-start gap-10 px-6 md:flex-row md:items-center md:justify-between">
        <div className="relative flex w-full flex-col gap-4 md:max-w-2xl">
          <span className="font-body text-xs font-semibold tracking-wider text-primary">
            NUESTRA FILOSOFÍA
          </span>

          <h2 className="font-heading text-4xl font-light text-balance md:text-5xl">
            No todos los perros necesitan el mismo tiempo.
          </h2>

          <p className="max-w-xl text-sm text-white/65 md:text-base">
            No apuramos ni forzamos. Observamos, acompañamos y adaptamos cada
            turno para que la experiencia sea lo más tranquila y agradable
            posible.
          </p>

          <div className="flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs text-secondary">
            <HeartIcon className="size-4 min-w-4" />
            El bienestar va primero.
          </div>

          <span className="absolute -right-2 top-16 size-24 rounded-full bg-secondary/10 md:-right-10 md:size-32" />
        </div>

        <div className="relative flex w-full flex-col gap-2 rounded-lg border border-white/10 bg-white/5 p-6 md:max-w-md">
          <h3 className="mb-2 font-heading text-xl font-light">
            Cada turno considera
          </h3>

          {factors.map((factor) => (
            <div
              className="flex items-center gap-3 border-b border-white/10 py-3 last:border-b-0"
              key={factor.name}
            >
              <factor.icon className="size-4 min-w-4 text-primary" />
              <span className="text-sm text-white/75">{factor.name}</span>
            </div>
          ))}

          <WindIcon className="absolute bottom-4 right-4 size-6 text-secondary/20" />
        </div>
      </div>

      <PawPrintIcon className="absolute bottom-8 left-8 size-7 -rotate-12 text-secondary/10 md:left-1/2" />
    </section>
  );
}
