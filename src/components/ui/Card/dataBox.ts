interface PlansCard {
  pricePelan: string;
  desc: string;
}

export interface BoxItemType {
  id: number;
  title: string;
  desc?: string;
  heading?: string;
  titleDescription?: string; 
  card?: PlansCard[]; // تركتها مصفوفة هنا لأن الكرت نفسه قد يحتوي على عدة أسعار بالداخل
}

// الواجهة الخاصة بالأوبجيكت الكبير (بدون مصفوفات للأقسام)
interface FullPageDataType {
  plans: BoxItemType;  // كائن واحد مباشر
  prices: BoxItemType; // كائن واحد مباشر
}

export const pageData: FullPageDataType = {
  plans: {
    id: 1,
    title: "Planlar",
    desc: "@2026 - Sınırlı özellikler",
    heading: "Mevcut planlar"
  },
  prices: {
    id: 1,
    title: "Fyiat",
    desc: "plans",
    card: [
      {
        pricePelan: "15$",
        desc: "وصف السعر الأول",
      },
    ],
  },
};