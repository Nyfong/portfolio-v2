/**
 * Active app layout version.
 * Set NEXT_PUBLIC_APP_VERSION=2 in env to use v2 layout.
 * Default: "1"
 */
export function getAppVersion(): "1" | "2" {
  const v = process.env.NEXT_PUBLIC_APP_VERSION;
  return v === "2" ? "2" : "1";
}
