import {
  RiBookOpenLine,
  RiCustomerServiceLine,
  RiGroupLine,
  RiTiktokFill,
  RiTrophyLine,
  RiVidiconLine,
} from "@remixicon/react";
import { type ReactNode } from "react";

interface DataUs {
  id: number;
  svg: ReactNode;
  titleCard: string;
  description: string;
}

export const CARD_US: DataUs[] = [
  {
    id: 1,
    svg: <RiTrophyLine />,
    titleCard: "Gelişmeleri takip ediyoruz",
    description:
      "Öğrenciler ve veliler, öğretim tarzı hakkındaki görüşlerini paylaşabilir ve performansımızı iyileştirmek için yapılandırılmış geri bildirim alabilirler.",
  },
  {
    id: 2,
    svg: <RiGroupLine   />,
    titleCard: "kültürel farkındalık",
    description:
      "Kurslarımız aynı zamanda öğrencilerin ufuklarını genişletmek için onları kültürle tanıştırır.",
  },
  {
    id: 3,
    svg: <RiTiktokFill />,
    titleCard: "Etkileşimli içerik",
    description:
      "Kurslarımız, çocuklardan yetişkinlere kadar her yaş grubuna uygun, etkileşimli içeriklerle tasarlanmıştır; bu sayede katılımcıların ilgisini ve motivasyonunu canlı tutar.",
  },
  {
    id: 4,
    svg: <RiBookOpenLine />,
    titleCard: "Pratik becerilere odaklanın",
    description:
      "Kurslarımız, öğrencilerin öğrendiklerini günlük hayata uygulamalarına yardımcı olmak amacıyla, günlük yaşamla ilgili pratik dil becerilerine odaklanmaktadır.",
  },
  {
    id: 5,
    svg: <RiVidiconLine />,
    titleCard: "Esnek öğrenme seçenekleri",
    description:
      "online kurslar, kendi hızlarında ve kendi programlarına göre öğrenmelerine olanak tanıdığı için meşgul öğrenciler için uygundur.",
  },
  {
    id: 6,
    svg: <RiCustomerServiceLine />,
    titleCard: "Etkileşimli öğrenme araçları",
    description:
      "Kurslarımız, öğrenmeyi geliştirmek ve öğrenciler için daha keyifli hale getirmek amacıyla etkileşimli araçlar ve oyunlar kullanmaktadır.",
  },
];
