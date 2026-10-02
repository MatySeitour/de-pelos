import {
  HeartHandshakeIcon,
  PawPrintIcon,
  ShieldCheckIcon,
  SparklesIcon,
} from "lucide-react";

export function Team() {
  return (
    <section className="w-full h-full bg-white py-14 ">
      <div className="w-full h-full justify-center flex items-center py-12 px-6">
        <div className="w-full max-w-7xl justify-center flex items-center md:flex-row flex-col gap-10">
          <div className="w-96 h-64 bg-base-100 rounded-lg" />

          <div className="flex flex-col gap-4 md:w-1/2 w-full relative">
            <span className="tracking-wider font-body font-semibold text-primary text-xs">
              NUESTRA EXPERIENCIA
            </span>

            <h4 className="font-heading text-balance text-4xl">
              Más de 10 años cuidando y mimando a cada perro.
            </h4>

            <span className="text-neutral/70 text-balance">
              Trabajamos con paciencia, experiencia y atención personalizada.
              Adaptamos cada corte y cada cuidado a lo que tu compañero
              necesita.
            </span>

            <div className="flex items-center md:px-0 md:gap-4 px-10 w-full md:justify-start justify-between">
              <div className="flex items-center md:flex-row flex-col text-xs gap-2 text-neutral/90 font-medium">
                <ShieldCheckIcon className="md:size-4 md:min-w-4 size-5 min-w-5 text-primary" />
                Confianza
              </div>

              <div className="flex items-center md:flex-row flex-col text-xs gap-2 text-neutral/90 font-medium">
                <SparklesIcon className="md:size-4 md:min-w-4 size-5 min-w-5 text-primary" />
                Cuidado experto
              </div>

              <div className="flex items-center md:flex-row flex-col text-xs gap-2 text-neutral/90 font-medium">
                <HeartHandshakeIcon className="md:size-4 md:min-w-4 size-5 min-w-5 text-primary" />
                Trato cercano
              </div>
            </div>

            <PawPrintIcon className="size-8 min-w-8 text-base-200 absolute top-0 right-24" />
            <span className="size-24 min-w-24 bg-primary/10 -right-4 absolute -bottom-12 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
