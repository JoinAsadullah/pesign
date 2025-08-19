"use client";

import Image from "next/image";

type StripImage = {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
};

type Props = {
  images: StripImage[];
  speed?: number; // seconds per loop
  height?: number; // px height
  gap?: number; // px gap between images
};

export default function ContinuousStrip({
  images,
  speed = 10,
  height = 64,
  gap = 32,
}: Props) {
  // duplicate images so loop looks seamless
  const stripImages = [...images, ...images];

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ ["--speed" as any]: `${speed}s`, ["--gap" as any]: `${gap}px` }}
    >
      <div className="flex animate-strip">
        {stripImages.map((img, i) => (
          <div
            key={i}
            className="flex-shrink-0"
            style={{ marginRight: "var(--gap)" }}
          >
            <Image
              src={img.src}
              alt={img.alt ?? ""}
              width={img.width ?? height}
              height={img.height ?? height}
              style={{
                height: `${height}px`,
                width: "auto",
                borderRadius: "8px",
              }}
            />
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes strip {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        .animate-strip {
          width: max-content;
          animation: strip var(--speed) linear infinite;
        }
      `}</style>
    </div>
  );
}
