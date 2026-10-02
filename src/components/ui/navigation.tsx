import { cn } from "@/lib/cn";
import { BOOKING_WHATSAPP_URL, navItems } from "@/lib/functions";
import {
  ArrowUpRightIcon,
  MapPinIcon,
  MenuIcon,
  MessageCircleIcon,
  PawPrintIcon,
  XIcon,
} from "lucide-react";
import { useEffect, useState } from "react";

export function Navigation() {
  const [isMobileNavigationOpen, setIsMobileNavigationOpen] = useState(false);

  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 768px)");
    const closeOnDesktop = (event: MediaQueryListEvent) => {
      if (event.matches) setIsMobileNavigationOpen(false);
    };

    desktopQuery.addEventListener("change", closeOnDesktop);
    return () => desktopQuery.removeEventListener("change", closeOnDesktop);
  }, []);

  useEffect(() => {
    if (!isMobileNavigationOpen) return;

    const body = document.body;
    const html = document.documentElement;
    const originalBodyOverflow = body.style.overflow;
    const originalHtmlOverflow = html.style.overflow;

    body.style.overflow = "hidden";
    html.style.overflow = "hidden";

    const closeWithEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMobileNavigationOpen(false);
    };
    window.addEventListener("keydown", closeWithEscape);

    return () => {
      body.style.overflow = originalBodyOverflow;
      html.style.overflow = originalHtmlOverflow;
      window.removeEventListener("keydown", closeWithEscape);
    };
  }, [isMobileNavigationOpen]);
  return (
    <header className="fixed inset-x-0 top-0 z-50 h-16 border-b border-b-neutral/10 bg-base-100">
      <nav className="flex h-16 items-center justify-between px-6">
        <div className="flex items-center gap-1 font-heading font-light">
          <img
            className="size-10 min-w-12 object-cover"
            src="/de-pelos-logo.webp"
          />
          <span className="translate-y-1">DE PELOS</span>
        </div>

        <ul className="md:flex hidden items-center justify-center gap-5">
          {navItems.map((item) => (
            <li
              className="text-xs text-neutral/70 hover:text-primary transition-all cursor-pointer"
              key={item.name}
            >
              <a href={item.href}>{item.name}</a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            className="font-body font-medium hover:bg-primary/90 transition-all cursor-pointer text-xs py-2 px-4 md:h-8 bg-primary rounded-full text-white flex items-center gap-1.5 justify-center size-9 md:w-fit"
            href={BOOKING_WHATSAPP_URL}
            rel="noreferrer"
            target="_blank"
          >
            <MessageCircleIcon className="size-4 min-w-4" />
            <span className="md:inline hidden">Reservar turno</span>
          </a>

          <button
            aria-controls="mobile-navigation"
            aria-expanded={isMobileNavigationOpen}
            aria-label={
              isMobileNavigationOpen ? "Cerrar navegación" : "Abrir navegación"
            }
            onClick={() => setIsMobileNavigationOpen((prev) => !prev)}
            className="relative flex size-9 cursor-pointer items-center justify-center overflow-hidden rounded-full border border-neutral/20 p-2 text-neutral/70 transition-colors hover:bg-neutral/70 hover:text-white md:hidden"
            type="button"
          >
            <MenuIcon
              className={cn(
                isMobileNavigationOpen
                  ? "rotate-90 scale-75 opacity-0"
                  : "rotate-0 scale-100 opacity-100",
                "absolute size-5 min-w-5 transition-[opacity,transform] duration-200",
              )}
            />

            <XIcon
              className={cn(
                isMobileNavigationOpen
                  ? "rotate-0 scale-100 opacity-100"
                  : "-rotate-90 scale-75 opacity-0",
                "absolute size-5 min-w-5 transition-[opacity,transform] duration-200",
              )}
            />
          </button>
        </div>
      </nav>

      <article
        aria-hidden={!isMobileNavigationOpen}
        id="mobile-navigation"
        className={cn(
          "fixed inset-x-0 bottom-0 top-16 flex overflow-y-auto overscroll-contain bg-base-100 p-6 md:hidden",
          "transition-[transform,opacity,visibility] duration-300 ease-out",
          isMobileNavigationOpen
            ? "visible translate-x-0 opacity-100"
            : "invisible translate-x-full opacity-0",
        )}
      >
        <div className="relative flex min-h-full w-full flex-col gap-2">
          <div className="flex items-center gap-2 tracking-wide font-body font-medium text-primary text-xs">
            <span className="h-0.5 rounded-full w-6 bg-primary " />
            NAVEGACIÓN
          </div>

          <h3 className="font-heading text-balance text-3xl">
            ¿Qué querés ver?
          </h3>

          <ul className="flex flex-1 flex-col pt-4">
            {navItems.map((item) => (
              <li
                key={item.name}
                className="border-b border-neutral/15"
              >
                <a
                  className="flex items-center justify-between gap-4 py-3 font-heading text-xl font-medium text-neutral"
                  href={item.href}
                  onClick={() => setIsMobileNavigationOpen(false)}
                >
                  <span className="flex items-center gap-4">
                    <item.icon className="size-5 min-w-5 text-neutral/30" />
                    {item.name}
                  </span>
                  <span className="flex rounded-full bg-primary/10 p-2 text-primary/80">
                    <ArrowUpRightIcon className="size-4 min-w-4" />
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <span className="size-20 min-w-20 bg-primary/10 -right-2 absolute top-0 rounded-full" />
          <PawPrintIcon className=" size-8 min-w-8 text-primary/20 md:hidden absolute right-1.5 top-5" />

          <div className="mt-6 flex flex-col gap-2.5 rounded-lg border border-neutral/20 bg-neutral/10 p-3">
            <a
              className="font-body font-medium hover:bg-primary/90 transition-all w-full cursor-pointer text-xs py-3 px-4 bg-primary rounded-full text-white flex items-center gap-1.5 justify-center size-9"
              href={BOOKING_WHATSAPP_URL}
              onClick={() => setIsMobileNavigationOpen(false)}
              rel="noreferrer"
              target="_blank"
            >
              <MessageCircleIcon className="size-4 min-w-4" />
              <span>Reservar turno</span>
            </a>

            <div className="flex items-center gap-2 justify-center w-full">
              <MapPinIcon className="size-4 min-w-4 text-primary" />

              <div className="text-xs text-neutral/80 flex items-center gap-1.5">
                San Antonio de Padua
                <span className="size-px bg-neutral" />
                Zona Oeste
              </div>
            </div>
          </div>
        </div>
      </article>
    </header>
  );
}
