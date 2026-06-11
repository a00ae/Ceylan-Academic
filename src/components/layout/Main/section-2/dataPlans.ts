interface DataPlans {
  id: number;
  name: string;
  type: "Basic" | "Premium" | "Professional";
  price: string;
  descount?: "1000 TL" | "4850 TL" | "7500 TL";
  desc: string;
  features: string[];
}

export const DataPlans: DataPlans[] = [
  {
    id: 1,
    name: "Mini plan",
    type: "Basic",
    price: "1200 TL",
    descount: "1000 TL",
    desc: "Bu plan, bağımsız olarak çalışmak isteyen ileri düzey öğrenciler için tasarlanmıştır.",
    features: ["4",  "Öğrencinin hızına ve kavrayışına bağlıdır.", "20"],
  },
  {
    id: 2,
    name: "Premium (en popüler)",
    type: "Premium",
    price: "5100 TL",
    descount: "4850 TL",
    desc: "Bu plan tüm öğrenciler için uygundur. Ancak, kursu erken bitirmek istiyorsanız, bunu tavsiye etmiyoruz.",
    features: ["18", "15", "50"],
  },
  {
    id: 3,
    name: "Profesyonel",
    type: "Professional",
    price: "8400 TL",
    descount: "7500 TL",
    desc: "Bu plan, derslerin yoğunluğu ve sağlanan destek açısından herkes için uygundur. Ancak, kısıtlı bütçesi olanlar için önerilmez.",
    features: ["36",  "8", "20"],
  },
];
