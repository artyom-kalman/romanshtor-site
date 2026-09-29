# Project guidance

Russian-language website for «Римские шторы», a curtain and interior textiles salon in Khabarovsk. Built with Next.js App Router, React, TypeScript, and Tailwind CSS.

- [Project information in Notion](https://www.notion.so/3e9252aaf7ec819aaf21df53c3a8a19f)
- [Maintenance issue](https://www.notion.so/3e9252aaf7ec819f8615d0dca5caa7b5)

## Application constraints

- Timeweb Cloud serves the static export in `out/`. Preserve `output: "export"`, `trailingSlash: true`, and `images.unoptimized` in `next.config.ts`.
- Use Next.js `Image` for site images. Preserve unused photos for future use unless their removal is explicitly requested. Gallery filenames are referenced dynamically from the portfolio data. Hero assets may also be used by metadata and structured data.
