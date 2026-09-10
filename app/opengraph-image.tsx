import { ImageResponse } from "next/og";
import { TAGLINE } from "@/content/site";

export const alt = "rwaShift — Real Estate Tokenization Infrastructure";
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
          justifyContent: "space-between",
          padding: "72px",
          backgroundColor: "#0e1430",
          backgroundImage: "linear-gradient(135deg, #182c5f 0%, #0e1430 65%)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 72,
              height: 72,
              borderRadius: 18,
              backgroundColor: "#1d3f93",
              color: "#ffffff",
              fontSize: 40,
              fontWeight: 700,
            }}
          >
            rS
          </div>
          <div style={{ display: "flex", fontSize: 34, fontWeight: 600, color: "#ffffff" }}>rwaShift</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20, maxWidth: 920 }}>
          <div style={{ display: "flex", fontSize: 54, fontWeight: 700, lineHeight: 1.15, color: "#ffffff" }}>
            {TAGLINE}
          </div>
          <div style={{ display: "flex", fontSize: 26, color: "#c9d2ea" }}>
            Structuring, offering and administering tokenized real estate.
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
