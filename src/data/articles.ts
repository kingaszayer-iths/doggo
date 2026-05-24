import trainingImage from "../assets/images/comehere.webp";
import walkImage from "../assets/images/walkroutines.webp";
import cafeImage from "../assets/images/cafevisit.webp";

export type Article = {
    id: number;
    title: string;
    category: string;
    description: string;
    image: string;
};

export const articles: Article[] = [
    {
        id: 1,
        title: "Så tränar du inkallning",
        category: "Träning",
        description:
            "Enkla tips för att stärka kontakt och trygghet mellan dig och din hund.",
        image: trainingImage,
    },
    {
        id: 2,
        title: "Bästa promenadrutinerna",
        category: "Vardag",
        description:
            "Skapa en lugn och balanserad promenad som fungerar i vardagen.",
        image: walkImage,
    },
    {
        id: 3,
        title: "Ta med hunden på café",
        category: "Hundvänliga platser",
        description:
            "Vad du kan tänka på när du besöker caféer och offentliga miljöer.",
        image: cafeImage,
    },
];