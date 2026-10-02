import { cn } from "@/lib/cn";
import {
  ArrowUpRightIcon,
  BadgeDollarSignIcon,
  icons,
  ImagesIcon,
  MapPinIcon,
  MenuIcon,
  MessageCircleIcon,
  PawPrintIcon,
  ScissorsIcon,
  ShoppingBagIcon,
  SparklesIcon,
  XIcon,
} from "lucide-react";
import { useEffect, useState } from "react";

export function Navigation() {
  const [isMobileNavigationOpen, setIsMobileNavigationOpen] = useState(false);

  useEffect(() => {
    if (!isMobileNavigationOpen) return;

    const scrollY = window.scrollY;

    const body = document.body;
    const html = document.documentElement;

    const originalBodyOverflow = body.style.overflow;
    const originalBodyPosition = body.style.position;
    const originalBodyTop = body.style.top;
    const originalBodyWidth = body.style.width;
    const originalHtmlOverflow = html.style.overflow;

    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.width = "100%";
    body.style.overflow = "hidden";
    html.style.overflow = "hidden";

    return () => {
      body.style.overflow = originalBodyOverflow;
      body.style.position = originalBodyPosition;
      body.style.top = originalBodyTop;
      body.style.width = originalBodyWidth;
      html.style.overflow = originalHtmlOverflow;

      window.scrollTo(0, scrollY);
    };
  }, [isMobileNavigationOpen]);

  const navItems = [
    {
      name: "Servicios",
      href: "#",
      icon: SparklesIcon,
    },
    {
      name: "Cómo trabajamos",
      href: "#",
      icon: ScissorsIcon,
    },
    {
      name: "Galería",
      href: "#",
      icon: ImagesIcon,
    },
    {
      name: "Petshop",
      href: "#",
      icon: ShoppingBagIcon,
    },
    {
      name: "Precios",
      href: "#",
      icon: BadgeDollarSignIcon,
    },
    {
      name: "Ubicación",
      href: "#",
      icon: MapPinIcon,
    },
  ];
  return (
    <header className="fixed top-0 border-b border-b-neutral/10 z-50 bg-base-100 w-full">
      <nav className="px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2 font-heading font-light">
          DE PELOS
        </div>

        <ul className="md:flex hidden items-center justify-center gap-5">
          {navItems.map((item) => (
            <li
              className="text-xs text-neutral/70 hover:text-primary transition-all cursor-pointer"
              key={item.name}
            >
              {item.name}
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <div className="font-body font-medium hover:bg-primary/90 transition-all cursor-pointer text-xs py-2 px-4 md:h-8 bg-primary rounded-full text-white flex items-center gap-1.5 justify-center size-9 md:w-fit">
            <MessageCircleIcon className="size-4 min-w-4" />
            <span className="md:inline hidden">Reservar turno</span>
          </div>

          <div
            onClick={() => setIsMobileNavigationOpen((prev) => !prev)}
            className="overflow-hidden hover:bg-neutral/70 size-9 relative transition-all hover:text-white cursor-pointer rounded-full md:hidden flex justify-center items-center border border-neutral/20 text-neutral/70 p-2"
          >
            <MenuIcon
              className={cn(
                isMobileNavigationOpen ? "-translate-x-10" : "translate-x-0",
                "size-5 min-w-5 transition-all absolute",
              )}
            />

            <XIcon
              className={cn(
                isMobileNavigationOpen ? "translate-x-0" : "translate-x-10",
                "size-5 min-w-5 transition-all absolute",
              )}
            />
          </div>
        </div>
      </nav>

      <article
        className={cn(
          "fixed top-0 left-0 w-full h-dvh bg-base-100 flex-col p-6",
          "transition-transform duration-300 top-16",
          isMobileNavigationOpen ? "translate-x-0 " : "translate-x-full",
        )}
      >
        <div className="flex flex-col w-full h-full gap-2 relative">
          <div className="flex items-center gap-2 tracking-wide font-body font-medium text-primary text-xs">
            <span className="h-0.5 rounded-full w-6 bg-primary " />
            NAVEGACIÓN
          </div>

          <h3 className="font-heading text-balance text-3xl">
            ¿Qué querés ver?
          </h3>

          <ul className="flex flex-col pt-4 h-full">
            {navItems.map((item) => (
              <li
                key={item.name}
                className="flex text-neutral text-2xl  justify-between font-medium font-heading items-center gap-4 border-b border-neutral/15  p-2"
              >
                <div className="flex items-center w-full gap-4">
                  <item.icon className="size-5 min-w-5 text-neutral/30" />
                  {item.name}
                </div>
                <div className="rounded-full p-2 bg-primary/10 text-primary/80 flex justify-center items-center">
                  <ArrowUpRightIcon className="size-4 min-w-4" />
                </div>
              </li>
            ))}
          </ul>

          <span className="size-20 min-w-20 bg-primary/10 -right-2 absolute top-0 rounded-full" />
          <PawPrintIcon className=" size-8 min-w-8 text-primary/20 md:hidden absolute right-1.5 top-5" />

          <div className="-translate-y-16 rounded-lg border border-neutral/20 bg-neutral/10 p-3 flex flex-col gap-2.5">
            <div className="font-body font-medium hover:bg-primary/90 transition-all w-full cursor-pointer text-xs py-3 px-4  bg-primary rounded-full text-white flex items-center gap-1.5 justify-center size-9">
              <MessageCircleIcon className="size-4 min-w-4" />
              <span>Reservar turno</span>
            </div>

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
