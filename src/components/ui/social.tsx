import {
  ArrowUpRightIcon,
  Music2Icon,
  PawPrintIcon,
  SparklesIcon,
} from "lucide-react";
import { FacebookIcon, InstagramIcon } from "./social-icons";

export function Social() {
  const platforms = [
    {
      name: "Instagram",
      icon: InstagramIcon,
      link: "https://www.instagram.com/depelos__/",
    },
    {
      name: "TikTok",
      icon: Music2Icon,
      link: "https://www.tiktok.com/@depelospeluqueriacanina?_r=1&_t=ZS-9AKNZFtN4aq",
    },
    {
      name: "Facebook",
      icon: FacebookIcon,
      link: "https://www.facebook.com/watch/PeluqueriaCaninaDePeloss/",
    },
  ];

  return (
    <section className="w-full bg-base-100 px-6 py-12 md:py-14">
      <div className="relative mx-auto flex w-full max-w-7xl flex-col justify-between gap-7 overflow-hidden rounded-lg bg-accent p-6 text-white md:flex-row md:items-center md:p-10">
        <div className="relative z-10 flex max-w-2xl flex-col gap-2">
          <span className="text-xs font-semibold tracking-wider text-white/70">
            SEGUÍ EL DÍA A DÍA DE DE PELOS
          </span>
          <h2 className="font-heading text-3xl font-light text-balance md:text-4xl">
            Consejos, transformaciones y mucha ternura.
          </h2>
          <p className="text-sm text-white/70">
            Subimos resultados, tips de cuidado, eventos temáticos y novedades
            del petshop.
          </p>
        </div>

        <ul className="relative z-10 flex w-full flex-col gap-2 md:max-w-xs">
          {platforms.map((platform) => (
            <li key={platform.name}>
              <a
                className="flex items-center justify-between rounded-full bg-white px-4 py-2 text-xs font-semibold text-neutral transition-transform hover:-translate-y-0.5"
                href={platform.link}
                target="_blank"
              >
                <span className="flex items-center gap-2">
                  <platform.icon className="size-4 text-primary" />
                  {platform.name}
                </span>
                <ArrowUpRightIcon className="size-4" />
              </a>
            </li>
          ))}
        </ul>

        <PawPrintIcon className="absolute -bottom-3 left-1/2 size-20 rotate-12 text-white/10" />
        <SparklesIcon className="absolute right-4 top-4 size-7 text-white/20" />
      </div>
    </section>
  );
}
