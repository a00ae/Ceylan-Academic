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
    features: ["Ayda 4 saat", "İlk ders ücretsizdir",  "Öğrencinin hızına ve kavrayışına bağlıdır.", "%20 indirim"],
  },
  {
    id: 2,
    name: "Premium (en popüler)",
    type: "Premium",
    price: "5100 TL",
    descount: "4850 TL",
    desc: "Bu plan tüm öğrenciler için uygundur. Ancak, kursu erken bitirmek istiyorsanız, bunu tavsiye etmiyoruz.",
    features: ["Ayda 18 saat", "İlk hafta ücretsiz", "15 ay", "%50 indirim"],
  },
  {
    id: 3,
    name: "Profesyonel",
    type: "Professional",
    price: "8400 TL",
    descount: "7500 TL",
    desc: "Bu plan, derslerin yoğunluğu ve sağlanan destek açısından herkes için uygundur. Ancak, kısıtlı bütçesi olanlar için önerilmez.",
    features: ["Ayda 18 saat", "İlk hafta ücretsiz",  "8 ay", "%20 indirim"],
  },
];
