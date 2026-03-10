import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Vyarah — Web Development, Mobile Apps & AI Solutions",
    short_name: "Vyarah",
    description:
      "Custom websites, mobile apps, and AI tools for startups and businesses. Gujarat, India.",
    start_url: "/",
    display: "standalone",
    background_color: "#18181b",
    theme_color: "#a855f7",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
