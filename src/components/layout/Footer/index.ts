import { mainListName } from "../Header";
type MoreInformation = {
  titleName: string;
  muneName: string[];
}

export const moreInformation: MoreInformation[] = [
  {
    titleName: "Menü",
    muneName: mainListName,
  },
  {
    titleName: "şirket",
    muneName: ["kariyerler", "Sorular", "Blog", "Destek"],
  }
];