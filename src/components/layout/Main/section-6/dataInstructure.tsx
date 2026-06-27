import { instructureImages } from "@/assets/our-instructure/instructre";
import { RiCloudLine, RiMoonLine, RiSunLine } from "@remixicon/react";
import type React from "react";
interface DataInstucture {
    id: number;
    type: "img" | "text";
    svg?: React.ReactNode;
    img?: string;
    titleData?: string;
    descraption?: string; 
}


export const dataInstucture: DataInstucture[] = [
    {
        id: 1,
        type:"img",
        img: instructureImages[0],
        descraption: "Arapça"
    },
    {
        id: 2,
        type: "text",
        svg: <RiSunLine />,
        titleData: "Her yeni kelime dil kulenizin bir yapı taşıdır! Haydi onları istiflemeye devam edelim!",
        descraption:"Sihem Mezioud",
    },
    {
        id: 3,
        type:"img",
        img: instructureImages[1],
        descraption: "İngilizce"
    },
    {
        id: 4,
        type: "text",
        svg: <RiCloudLine />,
        titleData: "Hepiniz geleceğin dil süperstarlarısınız! Gelin birlikte öğrenirken çok eğlenelim!",
        descraption: "Isa halef",
    },
    {
        id: 5,
        type: "img",
        img: instructureImages[2],
        descraption: "Fransızca"
    },
    {
        id: 6,
        type: "text",
        svg: <RiMoonLine />,
        titleData: "Ne kadar çok pratik yaparsanız, o kadar kendinize güvenirsiniz! Harika gidiyorsun!",
        descraption: "Ali Raza",
    }

]