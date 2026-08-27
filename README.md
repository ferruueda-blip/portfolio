# Fernando Rueda — Portafolio

Portafolio profesional de una sola página: Product Owner & Technical PM, Operaciones y Procesos B2B.

## Stack

- **React 19** + **TypeScript**
- **Vite 6** (build y dev server)
- **Tailwind CSS 4** (`@tailwindcss/vite`)
- **motion** para animaciones
- **lucide-react** para iconografía
- **jsPDF** para la generación del CV descargable (ES / EN)

## Requisitos

- Node.js 18+

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:3000
```

## Scripts

| Script            | Descripción                          |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Servidor de desarrollo con HMR       |
| `npm run build`   | Build de producción en `dist/`       |
| `npm run preview` | Sirve el build de producción         |
| `npm run lint`    | Type-check con `tsc --noEmit`        |
| `npm run og`      | Regenera `public/og-image.png`       |

## Estructura

```
src/
  components/         Secciones de la landing (Hero, Skills, Projects, …)
  context/            LanguageContext — i18n ES/EN con persistencia
  utils/              pdfGenerator (CV), scroll helpers
  data.ts             Fuente única de contenido y tipos (experiencia, skills, educación)
public/              robots.txt, sitemap.xml, og-image.png
scripts/             generate-og.mjs (tarjeta social)
```

## Contenido

Todo el contenido editable vive en `src/data.ts` y en las traducciones de
`src/context/LanguageContext.tsx`. No hay backend: es un sitio estático.

## Deploy

Cualquier host estático (Vercel, Netlify, GitHub Pages, Cloudflare Pages).
El comando de build es `npm run build` y el directorio de salida es `dist/`.
