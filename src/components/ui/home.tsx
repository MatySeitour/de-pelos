import {
  ArrowUpRightIcon,
  BoneIcon,
  PawPrintIcon,
  StoreIcon,
} from "lucide-react";

export function Home() {
  return (
    <section className="w-full h-full flex pt-28 md:pt-32 pb-10 gap-4 md:flex-row flex-col max-w-7xl">
      <div className="flex flex-col gap-6 w-full px-6">
        <div className="flex items-center gap-2 tracking-wider font-body font-semibold text-primary text-xs">
          <span className="h-0.5 rounded-full w-6 bg-primary " />
          MÁS DE 10 AÑOS CUIDANDO PERRITOS
        </div>

        <h1 className="font-heading text-balance text-5xl">
          Cuidado experto, con tiempo y cariño.
        </h1>

        <span className="text-neutral/70 text-balance md:flex">
          Peluqueria canina personalizada en San Antionio de Padua. Cada turno
          se adapta al ritmo y las necesidades de tu perro.
        </span>

        <div className="flex md:hidden items-center gap-6 relative w-fit">
          <div className="flex flex-col items-start text-xs text-neutral/70">
            <span className="text-2xl text-neutral font-extrabold font-heading">
              10+
            </span>
            años de experiencia
          </div>

          <div className="flex flex-col items-start text-xs text-neutral/70">
            <span className="text-2xl text-neutral font-extrabold font-heading">
              1 a 1
            </span>
            atención personalizada
          </div>

          <div className="flex flex-col items-start text-xs text-neutral/70">
            <span className="text-2xl text-neutral font-extrabold font-heading">
              7 días
            </span>
            abierto toda la semana
          </div>

          <BoneIcon className="fill-neutral/20 size-8 min-w-8 text-neutral/10 -top-16 right-4 absolute md:top-12 md:right-12" />
          <PawPrintIcon className=" size-8 min-w-8 text-neutral/10 md:hidden absolute top-24 -left-8" />
        </div>

        <div className="md:hidden flex flex-col gap-4 w-full items-center relative">
          <PawPrintIcon className=" size-8 min-w-8 text-neutral/10 hidden md:absolute top-16 -left-24" />

          <div
            className="h-96 rounded-bl-md rounded-tr-xl
            [clip-path:path('M0_80C0_35_35_0_80_0H365C395_0_415_20_415_50V300C415_345_380_380_335_380H35C15_380_0_365_0_340Z')] w-96 bg-neutral/40"
          />
        </div>

        <div className="flex items-center gap-2 relative md:flex-row flex-col">
          <div className="font-body md:w-fit w-full hover:bg-primary/90 transition-all cursor-pointer text-xs py-2 px-4 h-9 font-semibold bg-primary rounded-full text-white flex items-center gap-1.5 justify-center">
            Reservar turno
            <ArrowUpRightIcon className="size-4 min-w-4" />
          </div>

          <div className="font-body md:w-fit w-full text-xs py-2 px-4 h-9 font-bold border hover:bg-neutral/70 hover:text-white transition-all cursor-pointer border-neutral/70 text-neutral/70 rounded-full flex items-center gap-1.5 justify-center">
            Ver servicios
          </div>

          <div className="font-body md:w-fit w-full hover:bg-info/90 transition-all cursor-pointer text-xs py-2 px-4 h-9 font-semibold bg-info rounded-full text-white flex items-center gap-1.5 justify-center">
            Ver Petshop
            <StoreIcon className="size-4 min-w-4" />
          </div>
        </div>

        <div className="md:flex hidden items-center gap-6 relative w-fit">
          <div className="flex flex-col items-start text-xs text-neutral/70">
            <span className="text-2xl text-neutral font-extrabold font-heading">
              10+
            </span>
            años de experiencia
          </div>

          <div className="flex flex-col items-start text-xs text-neutral/70">
            <span className="text-2xl text-neutral font-extrabold font-heading">
              1 a 1
            </span>
            atención personalizada
          </div>

          <div className="flex flex-col items-start text-xs text-neutral/70">
            <span className="text-2xl text-neutral font-extrabold font-heading">
              7 días
            </span>
            abierto toda la semana
          </div>

          <BoneIcon className="fill-neutral/20 size-8 min-w-8 text-neutral/10 absolute -top-12 -right-12" />
        </div>
      </div>

      <div className="md:flex hidden flex-col gap-4 w-full items-center relative">
        <PawPrintIcon className=" size-8 min-w-8 text-neutral/10 absolute top-16 -left-24" />

        <div
          className="h-96 rounded-bl-md rounded-tr-xl
            [clip-path:path('M0_80C0_35_35_0_80_0H365C395_0_415_20_415_50V300C415_345_380_380_335_380H35C15_380_0_365_0_340Z')] w-96 bg-neutral/40"
        />
      </div>
    </section>
  );
}
