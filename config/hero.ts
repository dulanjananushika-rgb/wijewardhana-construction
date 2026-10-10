import type { HeroVideoSource } from "@/components/hero/hero-media";

export const heroContent = {
  eyebrow: "A HOME, SHAPED WITH INTENTION",
  description:
    "Thoughtfully built homes, from the first foundation to the final finishing touch.",
  primaryAction: "START YOUR PROJECT",
  secondaryAction: "REPLAY THE REVEAL",
  scrollCue: "VIEW THE CONCEPT FILMS",
} as const;
export const heroMedia = {
  films: [
    {
      id: "blue-hour",
      selectorLabel: "BLUE HOUR",
      visualTitle: "BLUE-HOUR RESIDENCE STUDY",
      visualLabel: "ARCHITECTURAL CONCEPT FILM",
      visualAlt:
        "Architectural concept film showing a contemporary tropical residence at blue hour; not a completed Wijewardhana Construction project.",
      sources: [
        { src: "/media/wijewardhana-construction-concept.mp4", type: "video/mp4" },
      ] satisfies readonly HeroVideoSource[],
      posterSrc: "/media/wijewardhana-construction-poster.webp",
      startAtSeconds: 0,
    },
    {
      id: "daylight",
      selectorLabel: "DAYLIGHT",
      visualTitle: "DAYLIGHT RESIDENCE STUDY",
      visualLabel: "ARCHITECTURAL CONCEPT FILM",
      visualAlt:
        "Architectural concept film showing a contemporary two-storey tropical residence in daylight; not a completed Wijewardhana Construction project.",
      sources: [
        { src: "/media/wijewardhana-hero-concept.mp4", type: "video/mp4" },
      ] satisfies readonly HeroVideoSource[],
      posterSrc: "/media/wijewardhana-hero-poster.webp",
      startAtSeconds: 0,
    },
  ],
} as const;
