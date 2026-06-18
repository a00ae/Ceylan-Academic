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
    title: "Ceylan ー Akademisi",
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

export interface BtnService {
  id: string;
  text: string;
  variant:  "default" | "primary" | "secondary" | "danger" | "black" | "outline";
}

export interface CardService {
  id: number;
  type: "top-title" | "heading-large" | "description" | "btn";
  title: string;
  animation: string
}

export const CARD_SERVICE: CardService[] = [
  {
    id: 1,
    type:"top-title",
    title: "Şimdi katılın ve indirimden yararlanın.",
    animation: "fly-in-up"
  },
  {
    id: 2,
    type:"heading-large",
    title: "Şimdi katılın ve indirimden yararlanın.",
    animation: "blur-in"
  },
  {
    id: 3,
    type:"description",
    title: "Şimdi katılın ve indirimden yararlanın.",
    animation: "fade-in"
  },
  {
    id: 4,
    type:"btn",
    title: "Şimdi katılın ve indirimden yararlanın.",
    animation: "fade-in"
  },
]

