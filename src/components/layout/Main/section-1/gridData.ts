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
    title: "Ceylan — Acadmi",
    tagline: "Celan, öğrencileri arasında iyi bir üne sahip..",
    // footer: "Play Showreel"
  },
  {
    id: "card-2",
    type: "services",
    tags: ["İş güvenliği", "Temelleri öğrenmek", "Net öğrenme planları", "10 yılı aşkın deneyim"],
    // footer: "© 2017 - 26 | Based in Germany"
  },
  {
    id: "card-3",
    type: "meta",
    rating: "4.9/5",
    stats: "Birçok öğrencinin seviyesini yükseltmesine yardımcı olduk.",
    title: "Her seviye için uygundur..",
    spots: "6 seviye"

  },
  {
    id: "card-4",
    type: "availability",
    title: "Şimdi başla",
    spots: "3 spots"
  }
];

