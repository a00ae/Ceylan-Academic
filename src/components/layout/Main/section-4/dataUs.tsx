import { RiGroupFill, RiTrophyLine } from "@remixicon/react";
import { type ReactNode } from "react"

interface DataUs {
    id: number;
    svg:  ReactNode;
    titleCard: string;
    description: string;

} 

export const  CARD_US: DataUs[] = [
    {
        id: 1,
        svg: <RiTrophyLine />,
        description: "",
        titleCard: "",
    },
    {
        id: 2,
        svg: <RiGroupFill />,
        description: "",
        titleCard: "",
    },
    {
        id: 1,
        svg: <RiTrophyLine />,
        description: "",
        titleCard: "",
    },
    {
        id: 1,
        svg: <RiTrophyLine />,
        description: "",
        titleCard: "",
    },
    {
        id: 1,
        svg: <RiTrophyLine />,
        description: "",
        titleCard: "",
    },

]