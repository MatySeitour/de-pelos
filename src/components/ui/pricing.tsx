import { InfoIcon, PawPrintIcon } from "lucide-react";

export function Pricing() {
  const prices = [
    { type: "Perros chicos", price: "40", note: "Hasta tamaño pequeño" },
    {
      type: "Perros medianos",
      price: "50",
      note: "Tamaño intermedio",
      featured: true,
    },
    { type: "Perros grandes", price: "65", note: "Tamaño grande" },
  ];

  return (
    <section
      id="prices"
      className="relative flex h-full w-full items-center justify-center overflow-hidden bg-base-100 py-16 md:py-20"
    >
      <div className="flex h-full w-full max-w-7xl flex-col items-center gap-8 px-6">
        <div className="flex max-w-2xl flex-col items-center gap-2 text-center">
          <span className="font-body text-xs font-semibold tracking-wider text-primary">
            PRECIOS ORIENTATIVOS
          </span>
          <h2 className="font-heading text-4xl font-light text-balance">
            Un punto de partida claro.
          </h2>
          <p className="text-sm text-neutral/60">
            El presupuesto final se adapta al trabajo que necesita cada perrito.
          </p>
        </div>

        <ul className="grid w-full grid-cols-1 gap-4 md:grid-cols-3">
          {prices.map((price) => (
            <li
              className={`overflow-hidden rounded-lg border border-secondary/40 p-3 ${
                price.featured ? "bg-neutral text-white" : "bg-white"
              }`}
              key={price.type}
            >
              <div
                className={`h-44 rounded-md ${price.featured ? "bg-white/5" : "bg-base-200"}`}
                aria-label={`Espacio para foto de ${price.type.toLowerCase()}`}
              />
              <div className="flex flex-col gap-1 px-2 pb-3 pt-4">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-primary">
                  {price.type}
                </span>
                <span
                  className={`text-xs ${price.featured ? "text-white/60" : "text-neutral/55"}`}
                >
                  Desde
                </span>
                <span className="font-heading text-4xl font-semibold">
                  {price.price}
                </span>
                <span
                  className={`text-xs ${price.featured ? "text-white/60" : "text-neutral/55"}`}
                >
                  {price.note}
                </span>
              </div>
            </li>
          ))}
        </ul>

        <div className="flex max-w-3xl items-start gap-2 text-center text-xs text-neutral/55">
          <InfoIcon className="mt-0.5 size-4 min-w-4 text-primary" />
          El valor puede variar según tamaño, pelaje, estado del manto,
          comportamiento y trabajo necesario.
        </div>
      </div>

      <span className="absolute right-10 top-14 size-20 rounded-full bg-primary/10" />
      <PawPrintIcon className="absolute bottom-10 left-8 size-6 text-primary/15" />
    </section>
  );
}
