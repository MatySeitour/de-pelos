import { BoneIcon, PawPrintIcon } from "lucide-react";

export function Services() {
  const services = [
    {
      name: "Higiene",
      title: "Baño y bienestar",
      description:
        "Una experiencia tranquila, cuidada y adaptada a cada manto.",
      tags: ["baño", "secado", "cepillado"],
      imageURL: "/",
    },
    {
      name: "Estilo",
      title: "Corte y estilo",
      description:
        "Forma, comodidad y una terminación que respeta su personalidad.",
      tags: ["corte", "tijera", "máquina"],
      imageURL: "/",
    },
    {
      name: "Detalles",
      title: "Detalles finales",
      description: "El toque final que completa la transformación.",
      tags: ["perfume", "accesorios", "foto"],
      imageURL: "/",
    },
  ];

  return (
    <section className="w-full py-10 h-full bg-neutral flex justify-center items-center relative">
      <div className="w-full h-full max-w-7xl flex flex-col gap-8">
        <div className="flex items-start justify-center flex-col gap-2 px-6 w-full">
          <span className="tracking-wider font-body font-semibold text-primary text-xs">
            SERVICIOS
          </span>
          <div className="relative">
            <p className="font-heading text-white text-balance font-light text-4xl">
              Todo lo que necesita para quedar de pelos.
            </p>
            <PawPrintIcon className="size-6 min-w-6 text-secondary/30 absolute -top-10 md:-top-4 right-12 md:-right-12" />
          </div>

          <div className="flex items-start md:items-center justify-between md:flex-row flex-col md:gap-0 gap-2 w-full">
            <span className="text-white/70 text-balance">
              Tres momentos de cuidado, pensados para su bienestar y estilo.
            </span>

            <div className="rounded-sm text-secondary font-body font-medium text-xs bg-white/10 py-2 px-3 flex items-center justify-center">
              Cuidado completo
            </div>
          </div>
        </div>

        <ul className="flex items-center md:flex-row flex-col gap-4 md:px-0 px-6">
          {services.map((service, index) => (
            <li
              className="rounded-lg flex-col bg-accent/40 justify-between flex min-h-96 relative h-full w-full p-4"
              key={service.name}
            >
              <div className="rounded-sm gap-1.5 uppercase w-fit text-white/70 font-body font-light text-xs bg-neutral/80 py-1.5 px-3 flex items-center justify-center">
                0{index + 1}
                <span className="size-0.5 rounded-full bg-white" />
                {service.name}
              </div>

              <div className="rounded-lg gap-2 flex flex-col bg-neutral/80 p-4 relative">
                <p className="font-heading text-white text-balance font-light text-xl">
                  {service.title}
                </p>

                <span className="text-white/60  text-xs">
                  {service.description}
                </span>

                <div className="flex items-center gap-1">
                  {service.tags.map((tag, index) => (
                    <li
                      key={tag}
                      className="text-xs text-secondary uppercase font-medium flex items-center justify-center gap-1"
                    >
                      {tag}

                      {index !== service.tags.length - 1 && (
                        <span className="size-0.5 rounded-full bg-secondary" />
                      )}
                    </li>
                  ))}
                </div>

                <PawPrintIcon className="size-6 min-w-6 text-secondary/30 absolute right-4 top-3" />
              </div>
            </li>
          ))}
        </ul>

        <BoneIcon className="size-6 min-w-6 text-secondary/30 absolute right-1/2 bottom-2" />
      </div>
    </section>
  );
}
