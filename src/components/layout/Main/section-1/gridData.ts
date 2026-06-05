export interface GridCard {
  id: string;
  type: 'intro' | 'services' | 'meta' | 'availability';
  title?: string;
  subtitle?: string;
  tagline?: string;
  tags?: string[];
  rating?: string;
  stats?: string;
  spots?: string;
  footer?: string;
}

export const gridData: GridCard[] = [
  {
    id: "card-1",
    type: "intro",
    title: "Averra — Studio®",
    tagline: "We create timeless design and strategic marketing that make brands impossible to ignore.",
    footer: "Play Showreel"
  },
  {
    id: "card-2",
    type: "services",
    tags: ["Branding", "Digital design", "Marketing strategy", "Creative production"],
    footer: "© 2017 - 26 | Based in Germany"
  },
  {
    id: "card-3",
    type: "meta",
    rating: "4.9/5",
    stats: "We’ve helped 95+ brands elevate their businesses"
  },
  {
    id: "card-4",
    type: "availability",
    title: "Available for Sep.",
    spots: "3 spots"
  }
];

