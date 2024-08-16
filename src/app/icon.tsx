import { ImageResponse } from "next/og";
import FCCSeoulf from "@/assets/images/FCCSeoulf.svg";

export const size = {
  width: 465,
  height: 465,
};

export const contentType = "image/svg+xml";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "50%",
        }}
      >
        <FCCSeoulf />
      </div>
    ),
    { ...size }
  );
}
