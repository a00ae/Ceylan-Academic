interface DataPlans {
    id: number;
    type: "Basic" | "Premium" | "Professional",
    price: string;
    descount?: "1000 TL" | "4850 TL" | "7500 TL"; 
    desc: string;
    features: string[]; 
}

export const DataPlans: DataPlans[] = [
    {
        id: 1,
        type: "Basic",
        price: "1200 TL",
        descount: "1000 TL",
        desc: "",
        features: ["", "", "", ""]
    },
    {
        id: 2,
        type: "Premium",
        price: "5100 TL",
        descount: "4850 TL",
        desc: "",
        features: ["", "", "", ""]
    },
    {
        id: 3,
        type: "Professional",
        price: "8400 TL",
        descount: "7500 TL",
        desc: "",
        features: ["", "", "", ""]
    },
]