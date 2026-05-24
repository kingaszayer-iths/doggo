import walkImage from "../assets/images/walkgroup.webp";
import trainingImage from "../assets/images/puppytraining.webp";
import cafeImage from "../assets/images/cafevasastan.webp";
import aktivitydogImage from "../assets/images/aktivitydog.webp";

export type Activity = {
  id: number;
  title: string;
  category: string;
  location: string;
  distance: string;
  description: string;
  image: string;
};

export const activities: Activity[] = [
  {
    id: 1,
    title: "Promenadgrupp i Hagaparken",
    category: "Promenad",
    location: "Hagaparken",
    distance: "2 km bort",
    description:
      "En lugn promenad för hundägare som vill träffa andra i området.",
    image: walkImage,
  },
  {
    id: 2,
    title: "Valpträning utomhus",
    category: "Träning",
    location: "Vasaparken",
    distance: "3 km bort",
    description:
      "Enkel träning med fokus på kontakt, inkallning och vardagslydnad.",
    image: trainingImage,
  },
  {
    id: 3,
    title: "Hundvänligt caféhäng",
    category: "Café",
    location: "Vasastan",
    distance: "3 km bort",
    description:
      "Träffa andra hundägare på ett hundvänligt café med avslappnad stämning.",
    image: cafeImage,
  },
  {
    id: 4,
    title: "Aktivitetsdag för hundar",
    category: "Event",
    location: "Djurgården",
    distance: "6 km bort",
    description:
      "En social dag med lek, tips och aktiviteter för både hundar och ägare.",
    image: aktivitydogImage,
  },
];