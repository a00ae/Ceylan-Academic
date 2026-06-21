// 1. استخدام النمط الصحيح للكلمة وإتاحة المرونة للأسعار
interface DataPlans {
  id: number;
  name: string;
  type: "Basic" | "Premium" | "Professional";
  price: number;       // تحويله لرقم لسهولة العمليات الحسابية مستقبلاً
  discount?: number;   // تصحيح الإملاء وتحويله لرقم اختياري
  currency: string;    // إضافة العملة بشكل منفصل لدعم تعدد اللغات أو مرونة التصميم
  desc: string;
  features: string[];
}

export const DataPlans: DataPlans[] = [
  {
    id: 1,
    name: "İngilizce",
    type: "Basic",
    price: 1200,
    discount: 1000,
    currency: "TL",
    desc: "Şimdi bizimle İngilizce öğrenin, başlangıç ​​seviyesinden ileri seviyeye kadar.",
    features: ["Ayda 24 saat", "İlk hafta ücretsiz", "Kurs süresi: 6 ay", "%50 indirim", "Haftada 6 saat",],
  },
  {
    id: 2,
    name: "Arapça",
    type: "Premium",
    price: 5100,
    discount: 4850,
    currency: "TL",
    desc: "Anadili Arapça olan birinden Arapça öğrenin. Başlangıç ​​seviyesinden ileri seviyeye kadar dersler mevcuttur.",
    features: ["Ayda 24 saat", "İlk hafta ücretsiz", "Kurs süresi: 6 ay", "%50 indirim", "Haftada 6 saat"],
  },
  {
    id: 3,
    name: "Fransızca",
    type: "Professional",
    price: 7500,
    discount: 7200,
    currency: "TL",
    desc: "Bu plan, derslerin yoğunluğu ve sağlanan destek açısından herkes için uygundur. Ancak, kısıtlı bütçesi olanlar için önerilmez.",
    features: ["Ayda 24 saat", "İlk hafta ücretsiz", "Kurs süresi: 6 ay", "%50 indirim", "Haftada 6 saat"],
  },
];
