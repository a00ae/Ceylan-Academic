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
        img: instructureImages[3],
    },
    {
        id: 2,
        type: "text",
        svg: <RiSunLine />,
        titleData: "Hepiniz geleceğin dil süperstarlarısınız! Gelin birlikte öğrenirken çok eğlenelim!",
        descraption: "Isa Halef",
    },
    {
        id: 3,
        type:"img",
        img: instructureImages[2],
    },
    {
        id: 4,
        type: "text",
        svg: <RiCloudLine />,
        titleData: "Ne kadar çok pratik yaparsanız, o kadar kendinize güvenirsiniz! Harika gidiyorsun!",
        descraption: "Ali Reza",
    },
    {
        id: 5,
        type: "img",
        img: instructureImages[1],
    },
    {
        id: 6,
        type: "text",
        svg: <RiMoonLine />,
        titleData: "Her yeni kelime dil kulenizin bir yapı taşıdır! Haydi onları istiflemeye devam edelim!",
        descraption:"Zyna Ahmed",
    }

]