import { ImageResponse } from "next/og";
import { person, siteDescription } from "@/lib/site";

export const alt = `${person.name} (NyFong) — ${person.jobTitle}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/* Generated so the card is always exactly 1200x630 and stays in step with the
   site identity. Colours mirror the dark theme in globals.css. */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#070a09",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Mark + wordmark, echoing app/icon.svg */}
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 84,
              height: 84,
              borderRadius: 20,
              border: "3px solid rgba(0,255,159,0.35)",
              color: "#00ff9f",
              fontSize: 46,
              fontWeight: 700,
            }}
          >
            {">_"}
          </div>
          <div
            style={{
              display: "flex",
              color: "#00ff9f",
              fontSize: 26,
              letterSpacing: 6,
              fontWeight: 600,
            }}
          >
            NYFONG
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              color: "#e6fff5",
              fontSize: 92,
              fontWeight: 800,
              letterSpacing: -2,
            }}
          >
            {person.name}
          </div>
          <div
            style={{
              display: "flex",
              color: "#00ff9f",
              fontSize: 38,
              fontWeight: 600,
              marginTop: 12,
            }}
          >
            {person.jobTitle}
          </div>
          <div
            style={{
              display: "flex",
              color: "rgba(230,255,245,0.6)",
              fontSize: 26,
              marginTop: 20,
            }}
          >
            {person.roles.join("  ·  ")}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "2px solid rgba(0,255,159,0.2)",
            paddingTop: 24,
            color: "rgba(230,255,245,0.55)",
            fontSize: 24,
          }}
        >
          <div style={{ display: "flex" }}>
            {person.locality}, {person.country}
          </div>
          <div style={{ display: "flex" }}>github.com/Nyfong</div>
        </div>
      </div>
    ),
    size
  );
}
