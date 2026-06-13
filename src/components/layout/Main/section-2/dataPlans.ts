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
    name: "Mini plan",
    type: "Basic",
    price: 1200,
    discount: 1000,
    currency: "TL",
    desc: "Bu plan, bağımsız olarak çalışmak isteyen ileri düzey öğrenciler için tasarlanmıştır.",
    features: ["Ayda 4 saat", "İlk ders ücretsizdir", "Öğrencinin hızına ve kavrayışına bağlıdır.", "%20 indirim"],
  },
  {
    id: 2,
    name: "Premium (en popüler)",
    type: "Premium",
    price: 5100,
    discount: 4850,
    currency: "TL",
    desc: "Bu plan tüm öğrenciler için uygundur. Ancak, kursu erken bitirmek istiyorsanız, bunu tavsiye etmiyoruz.",
    features: ["Ayda 18 saat", "İlk hafta ücretsiz", "15 ay", "%50 indirim"],
  },
  {
    id: 3,
    name: "Profesyonel",
    type: "Professional",
    price: 7500,
    discount: 7200,
    currency: "TL",
    desc: "Bu plan, derslerin yoğunluğu ve sağlanan destek açısından herkes için uygundur. Ancak, kısıtlı bütçesi olanlar için önerilmez.",
    features: ["Ayda 18 saat", "İlk hafta ücretsiz", "8 ay", "%20 indirim"],
  },
];
