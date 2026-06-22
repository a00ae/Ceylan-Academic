import { indexImg } from "@/assets/our-courses/img";

interface DataAsk {
  id: number;
  img: string;
  title: string;
  description: string;
}

export const ASK_DATA: DataAsk[] = [
  {
    id: 1,
    img: indexImg[0],
    title:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum, unde!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis dignissimos expedita dolorum quis, audio voluptate Temporary ratione ipsam totam. Necessitatibus.",
  },
  {
    id: 2,
    img: indexImg[1],
    title:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum, unde!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis dignissimos expedita dolorum quis, audio voluptate Temporary ratione ipsam totam. Necessitatibus.",
  },
  {
    id: 3,
    img: indexImg[2],
    title:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum, unde!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis dignissimos expedita dolorum quis, audio voluptate Temporary ratione ipsam totam. Necessitatibus.",
  },
  {
    id: 4,
    img: indexImg[3],
    title:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum, unde!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis dignissimos expedita dolorum quis, audio voluptate Temporary ratione ipsam totam. Necessitatibus.",
  },
];
