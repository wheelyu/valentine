import { useState } from "react";

function LogoWall({
  items = [],
  direction = "horizontal",
  pauseOnHover = false,
  size = "clamp(8rem, 1rem + 30vmin, 25rem)",
  duration = "60s",
  textColor = "#ffffff",
  bgColor = "#060606",
  bgAccentColor = "#111111"
}) {
  const [isPaused, setIsPaused] = useState(false);

  const wrapperClass = [
    "flex",
    "flex-col",
    "gap-[calc(var(--size)/14)]",
    "mx-auto",
    "max-w-full",
    // Apply text and bg from CSS variables if desired
    // (We do that inline style below)
    direction === "vertical" && "flex-row justify-center h-full"
  ]
    .filter(Boolean)
    .join(" ");

  const marqueeClass = [
    "relative",
    "flex",
    "overflow-hidden",
    "select-none",
    "gap-[calc(var(--size)/14)]",
    "justify-start",
    "w-full",
    "mask-horizontal",
    direction === "vertical" && "flex-col h-full mask-vertical",
    isPaused && "paused"
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <article
      className={wrapperClass}
      style={{
        ["--size"]: size,
        ["--duration"]: duration,
        ["--color-text"]: textColor,
        ["--color-bg"]: bgColor,
        ["--color-bg-accent"]: bgAccentColor,
        color: "var(--color-text)",
        backgroundColor: "var(--color-bg)"
      }}
    >
      <div
        className={marqueeClass}
        onMouseEnter={() => pauseOnHover && setIsPaused(true)}
        onMouseLeave={() => pauseOnHover && setIsPaused(false)}
      >
        <div
          className={[
            "flex-shrink-0",
            "flex",
            "items-center",
            "justify-around",
            "gap-[calc(var(--size)/14)]",
            "min-w-full",
            "animate-scrollX",
            direction === "vertical" && "flex-col min-h-full animate-scrollY"
          ]
            .filter(Boolean)
            .join(" ")}
        >
          {items.map((item, idx) => (
            <img
              key={idx}
              src={item.imgUrl}
              alt={item.altText}
              className={[
                "bg-[var(--color-bg-accent)]",
                "rounded-md",
                "object-cover",
                "aspect-video",
                `w-[var(--size)] `,
                direction === "vertical" &&
                "aspect-square w-[calc(var(--size)/1.5)] p-[calc(var(--size)/6)]"
              ]
                .filter(Boolean)
                .join(" ")}
            />
          ))}
        </div>
        <div
          aria-hidden="true"
          className={[
            "flex-shrink-0",
            "flex",
            "items-center",
            "justify-around",
            "gap-[calc(var(--size)/14)]",
            "min-w-full",
            "animate-scrollX",
            direction === "vertical" && "flex-col min-h-full animate-scrollY"
          ]
            .filter(Boolean)
            .join(" ")}
        >
          {items.map((item, idx) => (
            <img
              key={`dup1-${idx}`}
              src={item.imgUrl}
              alt={item.altText}
              className={[
                "bg-[var(--color-bg-accent)]",
                "rounded-md",
                "object-cover",
                "aspect-video",
                `w-[var(--size)] `,
                direction === "vertical" &&
                "aspect-square w-[calc(var(--size)/1.5)] p-[calc(var(--size)/6)]"
              ]
                .filter(Boolean)
                .join(" ")}
            />
          ))}
        </div>
      </div>

      <div
        className={
          marqueeClass + " marquee--reverse"
        }
        onMouseEnter={() => pauseOnHover && setIsPaused(true)}
        onMouseLeave={() => pauseOnHover && setIsPaused(false)}
      >
        <div
          className={[
            "flex-shrink-0",
            "flex",
            "items-center",
            "justify-around",
            "gap-[calc(var(--size)/14)]",
            "min-w-full",
            "animate-scrollX reverse-x",
            direction === "vertical" && "flex-col min-h-full animate-scrollY reverse-x"
          ]
            .filter(Boolean)
            .join(" ")}
        >
          {items.map((item, idx) => (
            <img
              key={`rev-${idx}`}
              src={item.imgUrl}
              alt={item.altText}
              className={[
                "bg-[var(--color-bg-accent)]",
                "rounded-md",
                "object-cover",
                "aspect-video",
                `w-[var(--size)] `,
                direction === "vertical" &&
                "aspect-square w-[calc(var(--size)/1.5)] p-[calc(var(--size)/6)]"
              ]
                .filter(Boolean)
                .join(" ")}
            />
          ))}
        </div>
        <div
          aria-hidden="true"
          className={[
            "flex-shrink-0",
            "flex",
            "items-center",
            "justify-around",
            "gap-[calc(var(--size)/14)]",
            "min-w-full",
            "animate-scrollX reverse-x",
            direction === "vertical" && "flex-col min-h-full animate-scrollY reverse-x"
          ]
            .filter(Boolean)
            .join(" ")}
        >
          {items.map((item, idx) => (
            <img
              key={`dup2-${idx}`}
              src={item.imgUrl}
              alt={item.altText}
              className={[
                "bg-[var(--color-bg-accent)]",
                "rounded-md",
                "object-cover",
                "aspect-video",
                `w-[var(--size)] `,
                direction === "vertical" &&
                "aspect-square w-[calc(var(--size)/1.5)] p-[calc(var(--size)/6)]"
              ]
                .filter(Boolean)
                .join(" ")}
            />
          ))}
        </div>
      </div>
    </article>
  );
}

export default LogoWall;

// ALSO NEEDED:
//
// KEYFRAME ANIMATION:
//
// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}"
//   ],
//   theme: {
//     extend: {
//       keyframes: {
//         scrollX: {
//           "0%": { transform: "translateX(0)" },
//           "100%": { transform: "translateX(-100%)" }
//         },
//         scrollY: {
//           "0%": { transform: "translateY(0)" },
//           "100%": { transform: "translateY(-100%)" }
//         }
//       },
//       animation: {
//         scrollX: "scrollX var(--duration) linear infinite",
//         scrollY: "scrollY var(--duration) linear infinite"
//       }
//     }
//   },
//   plugins: []
// };
//
// LAYER UTILITY SNIPPET:
//
