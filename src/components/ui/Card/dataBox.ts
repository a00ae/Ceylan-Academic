interface PlansCard {
  pricePelan: string;
  desc: string;
}

interface BoxData {
  id: number;
  title?: string;
  desc?: string;
  card?: PlansCard[];
}

export const BoxData: Record<string, BoxData> = {
  palns: {
    id: 1,
    title: "plans",
    desc: "@2025",
  },
  price: {
    id: 2,
    title: "Fyiat",
    desc: "plans",
    card: [
      {
        pricePelan: "",
        desc: "",
      },
    ],
  },
};
