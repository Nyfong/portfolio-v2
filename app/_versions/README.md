# App Layout Versions

Switch between website layouts via `NEXT_PUBLIC_APP_VERSION` env var.

- **v1** – Current layout (Header, Footer, main)
- **v2** – New layout – edit `v2/LayoutShell.tsx` to build your alternative

## To switch layout

- **Vercel (production)**: Always uses v1. No env needed.
- **Local**: Use v1 by default. To use v2 locally, set `NEXT_PUBLIC_APP_VERSION=2` in `.env.local` and restart the dev server.

Page content stays the same; only the layout shell (header, footer, wrapper) changes.
