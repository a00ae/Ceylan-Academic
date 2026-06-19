// جلب جميع الصور من المجلد مباشرة
const images: Record<string, { default: string }> = import.meta.glob(
  './cours-0*.{png,jpg,jpeg,webp}', // حدد الصيغ والمجلد بالشكل الصحيح
  { eager: true } // eager تعني جلبها فوراً وليس كلينك مؤجل
);

// تحويل الكائن إلى مصفوفة روابط نصية فقط
export const indexImg: string[] = Object.values(images).map((img) => img.default);