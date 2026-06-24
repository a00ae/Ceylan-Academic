interface PlansCard {
  pricePelan: string;
  desc: string;
}

export interface BoxItemType {
  id: number;
  title: string;
  desc?: string;
  heading?: string;
  isAnimation?: boolean;
  titleDescription?: string;
  headingGreyColor?: string[]; 
  card?: PlansCard[]; // تركتها مصفوفة هنا لأن الكرت نفسه قد يحتوي على عدة أسعار بالداخل
}

// الواجهة الخاصة بالأوبجيكت الكبير (بدون مصفوفات للأقسام)
interface FullPageDataType {
  aboutUs: BoxItemType;
  ourCourses: BoxItemType;
  whyChoose: BoxItemType;
  courseType: BoxItemType;
  ourInstructure: BoxItemType;
  plans: BoxItemType; // كائن واحد مباشر
  curriculum: BoxItemType; // كائن واحد مباشر
}

export const pageData: FullPageDataType = {
  aboutUs: {
    id: 1,
    title: "About us",
    desc: "@Hakkımızda",
    heading: "Ceylan, öğrencileri arasında iyi bir üne sahip",
    isAnimation: true,
  },
  ourCourses: {
    id: 2,
    title: "kurslarımız",
    heading: "kurslarımız premium",
  },
  whyChoose: {
    id: 3,
    title: "Neden bizi seçmelisiniz",
    heading: "Kursumuzun öğrenciler için avantajları",
    // isAnimation: true,
  },
  courseType: {
    id: 4,
    title: "Ders türü",
    heading: "Çeşitli kurslar sunuyoruz.",
    isAnimation: true,
  },

  ourInstructure: {
    id: 5,
    title: "Eğitimimiz",
    desc: "@Fırsatı değerlendirin",
    heading: "Profesyonel Öğretmenlerimizle Tanışın",
  },
  plans: {
    id: 6,
    title: "Planlar ve fiyatlar",
    desc: "@2026 - Sınırlı özellikler",
    heading: 
    "Akademimizde sunulan dillere bağlı olarak programlar ve fiyatlar değişiklik göstermektedir",
    isAnimation: true,
    headingGreyColor: ["programlar", "ve", "fiyatlar", "değişiklik", "göstermektedir"]
  },

  curriculum: {
    id: 7,
    title: "Müfredat",
    desc: "@2026",
    heading: "Öğretmenlerimiz tarafından öğretilen müfredat",
    isAnimation: true,
  },
};
