import { MapPinIcon, PawPrintIcon, WindIcon } from "lucide-react";

export function Location() {
  return (
    <section
      id="location"
      className="relative flex h-full w-full items-center justify-center overflow-hidden bg-white py-16 md:py-20"
    >
      <div className="grid h-full w-full max-w-7xl grid-cols-1 gap-10 px-6 md:grid-cols-2 md:items-center">
        <div className="mt-4 overflow-hidden rounded-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2738.583736568221!2d-58.70732872488063!3d-34.67556656129517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc070c8a6cc93%3A0xed208fa7f64ebf5a!2sAyacucho%20818%2C%20B1722%20San%20Antonio%20de%20Padua%2C%20Provincia%20de%20Buenos%20Aires!5e1!3m2!1ses!2sar!4v1791285653193!5m2!1ses!2sar"
            title="Ubicación de De Pelos"
            className="h-75 w-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>

        <div className="relative flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <span className="font-body text-xs font-semibold tracking-wider text-primary">
              VENÍ A CONOCERNOS
            </span>
            <h2 className="font-heading text-4xl font-light text-balance">
              De Pelos, en Zona Oeste.
            </h2>
          </div>

          <div className="flex items-start gap-3">
            <MapPinIcon className="mt-1 size-5 min-w-5 text-primary" />
            <p className="text-sm text-neutral/70">
              Ayacucho 818
              <br />
              San Antonio de Padua · Zona Oeste
            </p>
          </div>

          <div className="flex flex-col border-y border-secondary/40">
            <div className="flex items-center justify-between gap-4 py-3 text-sm">
              <span className="text-neutral/60">Lunes a viernes</span>
              <span className="font-semibold">14:00 a 19:00</span>
            </div>
            <div className="flex items-center justify-between gap-4 border-t border-secondary/40 py-3 text-sm">
              <span className="text-neutral/60">Sábados y domingos</span>
              <span className="font-semibold">08:00 a 20:00</span>
            </div>
          </div>

          <WindIcon className="absolute right-4 top-3 size-7 text-secondary/25" />
        </div>
      </div>

      <PawPrintIcon className="absolute bottom-7 left-1/2 size-6 text-secondary/20" />
    </section>
  );
}
