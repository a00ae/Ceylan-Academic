interface PlansCard {
  pricePelan: string;
  desc: string;
}

export interface BoxItemType {
  id: number;
  title: string;
  desc?: string;
  heading?: string;
  animate?: boolean;
  isAnimation?: boolean; 
  titleDescription?: string;
  card?: PlansCard[]; // تركتها مصفوفة هنا لأن الكرت نفسه قد يحتوي على عدة أسعار بالداخل
}

// الواجهة الخاصة بالأوبجيكت الكبير (بدون مصفوفات للأقسام)
interface FullPageDataType {
  aboutUs: BoxItemType;
  ourCourses: BoxItemType;
  whyChoose: BoxItemType;
  courseType: BoxItemType;
  plans: BoxItemType; // كائن واحد مباشر
  curriculum: BoxItemType; // كائن واحد مباشر
}

export const pageData: FullPageDataType = {
  aboutUs: {
    id: 1,
    title: "About us",
    desc: "@Hakkımızda",
    heading: "Ceylan, öğrencileri arasında iyi bir üne sahip",
    animate: true,
    isAnimation: true
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
    animate: true,
    isAnimation: true
  },
  courseType: {
    id: 4,
    title: "Ders türü",
    heading: "Çeşitli kurslar sunuyoruz.",
    animate: true, 
    isAnimation: true,
  },


  curriculum: {
    id: 6,
    title: "Müfredat",
    desc: "@2026",
    heading: "Öğretmenlerimiz tarafından öğretilen müfredat",
  },
  plans: {
    id: 5,
    title: "Planlar",
    desc: "@2026 - Sınırlı özellikler",
    heading: "Mevcut Diller",
  },
};
