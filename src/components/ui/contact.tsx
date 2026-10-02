import { MessageCircleIcon, PawPrintIcon } from "lucide-react";
import { BOOKING_WHATSAPP_URL } from "@/lib/functions";

export function Contact() {
  return (
    <section className="relative flex h-full w-full items-center justify-center overflow-hidden bg-primary py-20 text-white md:py-24">
      <div className="flex w-full max-w-7xl flex-col items-start justify-between gap-8 px-6 md:flex-row md:items-center">
        <div className="relative flex max-w-3xl flex-col gap-3">
          <span className="text-xs font-semibold tracking-wider text-white/75">
            ¿LISTOS PARA UN MIMO?
          </span>
          <h2 className="font-heading text-4xl font-light text-balance md:text-5xl">
            Reservá el turno de tu perrito.
          </h2>
          <p className="text-sm text-white/75">
            Consultanos por turnos, servicios o productos del petshop. Te
            respondemos por WhatsApp.
          </p>
        </div>

        <a
          className="flex w-full items-center justify-center gap-3 rounded-full bg-neutral px-6 py-4 text-white transition-all hover:bg-neutral/90 md:w-fit"
          href={BOOKING_WHATSAPP_URL}
          rel="noreferrer"
          target="_blank"
        >
          <MessageCircleIcon className="size-5" />
          <span className="flex flex-col text-left">
            <span className="text-xs font-semibold">Hablar por WhatsApp</span>
            <span className="text-[10px] text-white/60">11 3939 4949</span>
          </span>
        </a>
      </div>

      <span className="absolute right-16 top-12 size-24 rounded-full bg-white/10" />
      <PawPrintIcon className="absolute bottom-8 left-8 size-8 text-white/15" />
    </section>
  );
}
