"use client";

import { useEffect, useRef, useState } from "react";

export default function TubesBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let mounted = true;

    async function init() {
      if (!canvasRef.current) return;
      try {
        const mod = await import(
          /* webpackIgnore: true */
          "https://cdn.jsdelivr.net/npm/threejs-components@0.0.19/build/cursors/tubes1.min.js"
        );
        const TubesCursor = mod.default;
        if (!mounted) return;

        TubesCursor(canvasRef.current, {
          tubes: {
            colors: ["#a855f7", "#ec4899", "#14b8a6"],
            lights: {
              intensity: 200,
              colors: ["#a855f7", "#ec4899", "#14b8a6", "#fafafa"],
            },
          },
        });
        setLoaded(true);
      } catch (err) {
        console.error("TubesCursor init failed:", err);
      }
    }

    init();
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-0"
      aria-hidden="true"
    >
      <canvas
        ref={canvasRef}
        className={`w-full h-full block transition-opacity duration-500 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        style={{ touchAction: "none" }}
      />
    </div>
  );
}
