import { indexImg } from "@/assets/our-courses/img";

interface DataCard {
    id: number,
    img: string;
    title: string;
    desc: string;
}

export const dataCard: DataCard[] = [
    {
        id: 1, 
        img: indexImg[0], 
        title: "Öğrencilerin dil becerilerini geliştirmek",
        desc: ""
    },
    {
        id: 2, 
        img: indexImg[1], 
        title: "Kelime bilgisi ve dil bilgisi öğrenin.",
        desc: ""
    },
    {
        id: 3, 
        img: indexImg[2], 
        title: "Konuşmalara büyük önem verilir.",
        desc: ""
    },
]