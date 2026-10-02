# De Pelos

Setup inicial del frontend para la landing de **De Pelos**. El proyecto está preparado para implementar posteriormente el diseño definido en Pen.

## Requisitos

- Node.js 24 o una versión compatible con Vite 8
- pnpm 10+

## Comandos

```bash
pnpm install
pnpm dev
pnpm build
pnpm lint
```

## Stack

- Vite
- React
- TypeScript
- Tailwind CSS 4 con `@tailwindcss/vite`
- daisyUI 5 con el theme personalizado `depelos`
- clsx
- tw-animate-css
- lucide-react
- Motion para React

## Estructura

```text
src/
  assets/
  components/
    ui/
    layout/
    sections/
  hooks/
  lib/
  styles/
  types/
  App.tsx
  main.tsx
```

Los tokens globales de color, tipografía, radios y sombras viven en `src/styles/globals.css` y reflejan la guía visual de Pen. El alias `@/` apunta a `src/`.
