import {
  BoneIcon,
  DogIcon,
  DropletsIcon,
  PartyPopperIcon,
  PawPrintIcon,
  ShoppingBagIcon,
  SparklesIcon,
} from "lucide-react";

export function Gallery() {
  const galleryItems = [
    { name: "Perro recién cortado", icon: DogIcon },
    { name: "Accesorios y detalle final", icon: SparklesIcon },
    { name: "Evento temático", icon: PartyPopperIcon },
    { name: "Foto del petshop", icon: ShoppingBagIcon },
  ];

  return (
    <section
      id="gallery"
      className="relative flex h-full w-full items-center justify-center overflow-hidden bg-white py-16 md:py-20"
    >
      <div className="flex h-full w-full max-w-7xl flex-col gap-8 px-6">
        <div className="flex flex-col items-start justify-between gap-3 md:flex-row md:items-end">
          <div className="flex flex-col gap-2">
            <span className="font-body text-xs font-semibold tracking-wider text-primary">
              GALERÍA DE TRABAJOS
            </span>
            <h2 className="font-heading text-4xl font-light text-balance">
              Resultados para sonreír.
            </h2>
          </div>
          <p className="max-w-md text-sm text-neutral/60 md:text-right">
            Una composición flexible para sumar luego las fotos reales sin
            romper el ritmo visual.
          </p>
        </div>

        <div className="grid min-h-[560px] grid-cols-1 gap-3 md:min-h-[430px] md:grid-cols-[1.1fr_1.4fr]">
          <div className="relative flex min-h-72 flex-col justify-between rounded-lg bg-secondary p-5">
            <span className="w-fit rounded-full bg-white/80 px-3 py-1.5 text-[10px] font-semibold tracking-wider text-neutral">
              ANTES Y DESPUÉS
            </span>
            <span className="text-xs text-neutral/60">
              Formato vertical / editorial
            </span>
          </div>

          <ul className="grid grid-cols-2 gap-3">
            {galleryItems.map((item) => (
              <li
                className="flex min-h-36 items-end rounded-lg bg-base-200 p-4 md:min-h-0"
                key={item.name}
              >
                <div className="flex items-center gap-2 text-xs text-neutral/55">
                  <item.icon className="size-4" />
                  {item.name}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <BoneIcon className="absolute right-12 top-10 size-7 text-secondary/25" />
      <DropletsIcon className="absolute bottom-8 left-8 size-7 text-primary/15" />
      <PawPrintIcon className="absolute bottom-7 right-8 size-6 text-primary/20" />
    </section>
  );
}
