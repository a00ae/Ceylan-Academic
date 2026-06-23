interface DataCurriculum {
  type: "Arabic" | "English" | "French";
  bookTitle: string;
  bookDescription: string;
  level: string;
}

export const DATA_CURRICULUM: DataCurriculum[] = [
  {
    type: "Arabic",
    bookTitle: "Miftah Al-Arabiyya",
    bookDescription:
      '"Arapçanın Anahtarı" serisi, hem gençleri hem de yetişkinleri hedefleyen, anadili Arapça olmayanlara Arapça öğretmek için entegre bir müfredattır.',
    level:
      "6 kattan oluşmaktadır.",
  },
  {
    type: "English",
    bookTitle: "Miftah Al-Arabiyya",
    bookDescription:
      '"Arapçanın Anahtarı" serisi, hem gençleri hem de yetişkinleri hedefleyen, anadili Arapça olmayanlara Arapça öğretmek için entegre bir müfredattır.',
    level:
      "6 kattan oluşmaktadır.",
  },
  {
    type: "French",
    bookTitle: "Miftah Al-Arabiyya",
    bookDescription:
      '"Arapçanın Anahtarı" serisi, hem gençleri hem de yetişkinleri hedefleyen, anadili Arapça olmayanlara Arapça öğretmek için entegre bir müfredattır.',
    level:
      "6 kattan oluşmaktadır.",
  },
];
