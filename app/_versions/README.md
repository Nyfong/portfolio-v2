# App Layout Versions

Switch between website layouts via `NEXT_PUBLIC_APP_VERSION` env var.

- **v1** – Current layout (Header, Footer, main)
- **v2** – New layout – edit `v2/LayoutShell.tsx` to build your alternative

## To switch layout

1. **Use v1** (default): Don't set the env var, or set `NEXT_PUBLIC_APP_VERSION=1`
2. **Use v2**: Set `NEXT_PUBLIC_APP_VERSION=2` in `.env.local` or your deploy env
3. Redeploy

Page content stays the same; only the layout shell (header, footer, wrapper) changes.
