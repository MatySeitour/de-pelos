import { BoneIcon, Music2Icon, PawPrintIcon } from "lucide-react";
import { FacebookIcon, InstagramIcon } from "./social-icons";
import { navItems, type NavItem } from "@/lib/functions";

export function Footer() {
  const contactLinks = [
    "Ayacucho 818 · Padua",
    "11 3939 4949",
    "Lun–Vie 14–19",
    "Sáb–Dom 08–20",
  ];
  return (
    <footer className="relative w-full overflow-hidden bg-neutral px-6 py-14 text-white">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-10">
        <div className="grid grid-cols-1 gap-9 sm:grid-cols-2 md:grid-cols-[1.6fr_1fr_1fr_1fr]">
          <div className="flex max-w-sm flex-col gap-3">
            <div className="flex items-center gap-2 font-heading text-lg font-light">
              <span className="flex size-7 items-center justify-center rounded-full bg-primary text-white">
                <PawPrintIcon className="size-4" />
              </span>
              DE PELOS
            </div>
            <p className="text-sm text-white/55">
              Peluquería canina + petshop con atención personalizada.
            </p>
          </div>

          <FooterColumn title="EXPLORÁ" links={navItems} />
          <div className="flex flex-col gap-3">
            <h3 className="text-[10px] font-semibold tracking-wider text-primary">
              CONTACTO
            </h3>
            <ul className="flex flex-col gap-2">
              {contactLinks.map((link) => (
                <li className="text-xs text-white/60" key={link}>
                  {link}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-[10px] font-semibold tracking-wider text-primary">
              SEGUINOS
            </h3>

            <a
              href="https://www.instagram.com/depelos__/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-fit items-center gap-2 rounded-full border border-accent/20 px-3 py-2 text-sm font-medium text-primary transition-all duration-200 hover:border-accent/40 hover:bg-accent/10"
            >
              <InstagramIcon className="size-4" />
              @depelos__
            </a>
            <a
              href="https://www.facebook.com/watch/PeluqueriaCaninaDePeloss/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-fit items-center gap-2 rounded-full border border-accent/20 px-3 py-2 text-sm font-medium text-primary transition-all duration-200 hover:border-accent/40 hover:bg-accent/10"
            >
              <FacebookIcon className="size-4" />
              De pelos peluqueria canina
            </a>
            <a
              href="https://www.tiktok.com/@depelospeluqueriacanina?_r=1&_t=ZS-9AKNZFtN4aq"
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-fit items-center gap-2 rounded-full border border-accent/20 px-3 py-2 text-sm font-medium text-primary transition-all duration-200 hover:border-accent/40 hover:bg-accent/10"
            >
              <Music2Icon className="size-4" />
              DepelospeluqueriaCanina
            </a>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-3 border-t border-white/10 pt-5 text-[10px] text-white/40 md:flex-row">
          <span>© De Pelos · San Antonio de Padua</span>
        </div>
      </div>

      <BoneIcon className="absolute bottom-16 right-10 size-7 rotate-12 text-secondary/15" />
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: NavItem[] }) {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-[10px] font-semibold tracking-wider text-primary">
        {title}
      </h3>
      <ul className="flex flex-col gap-2">
        {links.map((link) => (
          <li
            className="text-xs text-white/60 hover:text-white transition-all"
            key={link.name}
          >
            <a href={link.href}>{link.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
