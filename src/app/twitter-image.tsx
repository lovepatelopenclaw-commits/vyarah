import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Vyarah — Web Development, Mobile Apps & AI Solutions";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#18181b",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -100,
            right: -100,
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(168,85,247,0.3), transparent 70%)",
          }}
        />

        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <span
            style={{
              fontSize: 48,
              fontWeight: 700,
              color: "#a855f7",
              letterSpacing: "-1px",
            }}
          >
            Vyarah
          </span>
          <span
            style={{
              fontSize: 56,
              fontWeight: 700,
              color: "#fafafa",
              lineHeight: 1.2,
              maxWidth: 800,
              letterSpacing: "-1px",
            }}
          >
            We Build Digital Dreams
          </span>
          <span
            style={{
              fontSize: 24,
              color: "#a1a1aa",
              maxWidth: 600,
            }}
          >
            Web Apps · Mobile Apps · AI/ML · Automation — Gujarat, India
          </span>
        </div>

        <div
          style={{
            position: "absolute",
            bottom: 40,
            right: 80,
            fontSize: 20,
            color: "#3f3f46",
          }}
        >
          vyarah.in
        </div>
      </div>
    ),
    { ...size }
  );
}
