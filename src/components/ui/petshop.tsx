import {
  BedDoubleIcon,
  BoneIcon,
  LinkIcon,
  PawPrintIcon,
  SaladIcon,
  ShirtIcon,
} from "lucide-react";

export function Petshop() {
  const products = [
    {
      name: "Camas",
      detail: "Descanso suave",
      icon: BedDoubleIcon,
      color: "bg-secondary",
    },
    {
      name: "Correas",
      detail: "Paseos seguros",
      icon: LinkIcon,
      color: "bg-accent",
    },
    {
      name: "Comida saludable",
      detail: "Nutrición consciente",
      icon: SaladIcon,
      color: "bg-primary",
    },
    {
      name: "Juguetes",
      detail: "Diversión diaria",
      icon: BoneIcon,
      color: "bg-secondary",
    },
    {
      name: "Buzos",
      detail: "Abrigo con onda",
      icon: ShirtIcon,
      color: "bg-accent",
    },
  ];

  return (
    <section
      id="petshop"
      className="relative flex h-full w-full items-center justify-center overflow-hidden bg-base-100 py-16 md:py-20"
    >
      <div className="flex h-full w-full max-w-7xl flex-col gap-8 px-6">
        <div className="flex flex-col gap-2">
          <span className="font-body text-xs font-semibold tracking-wider text-primary">
            01 · COLECCIÓN DESTACADA
          </span>
          <h2 className="font-heading text-4xl font-light text-balance">
            Elegidos para una vida más feliz.
          </h2>
        </div>

        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-5">
          {products.map((product) => (
            <li
              className="overflow-hidden rounded-lg bg-white"
              key={product.name}
            >
              <div
                className={`flex min-h-56 items-center justify-center ${product.color} md:min-h-72`}
                aria-label={`Espacio para imagen de ${product.name}`}
              />
              <div className="flex flex-col gap-1 p-4">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-heading text-lg font-light">
                    {product.name}
                  </h3>
                  <product.icon className="size-4 text-primary" />
                </div>
                <span className="text-xs text-neutral/55">
                  {product.detail}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <PawPrintIcon className="absolute bottom-7 right-8 size-7 text-primary/15" />
    </section>
  );
}
