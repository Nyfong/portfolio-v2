/**
 * Active app layout version.
 * - On Vercel (deploy): always v1.
 * - Local: set NEXT_PUBLIC_APP_VERSION=2 in .env.local to use v2.
 * Default: "1"
 */
export function getAppVersion(): "1" | "2" {
  if (process.env.VERCEL) return "1";
  const v = process.env.NEXT_PUBLIC_APP_VERSION;
  return v === "2" ? "2" : "1";
}
