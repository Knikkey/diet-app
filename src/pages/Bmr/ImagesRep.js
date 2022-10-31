import { useContext, useState } from "react";
import { ValuesContext } from "../../context/ValuesContext";

import pizza from "./images/pizza.webp";
import icecream from "./images/icecream.jpg";
import costcoSalad from "./images/costco-salad.webp";
import crunchwrap from "./images/crunchwrap.jpg";
import chickenBreast from "./images/chicken-breast.png";
import quarterPounder from "./images/quarter-pounder.jpg";
import ramen from "./images/ramen.jpg";

import styles from "./styles/ImagesRep.module.css";

const images = [
  {
    label: "Pizza",
    img: pizza,
    description: "A medium buffalo chicken pizza from Domino's",
    calories: 2080,
  },
  {
    label: "Ice cream",
    img: icecream,
    description: "A scoop of pralines & cream ice cream from Baskin-Robbins",
    calories: 270,
  },
  {
    label: "Ceasar salad",
    img: costcoSalad,
    description: "A ceasar salad from Costco (with dressing)",
    calories: 700,
  },
  {
    label: "Crunchwrap",
    img: crunchwrap,
    description: "A chicken crunchwrap supreme from Taco Bell",
    calories: 600,
  },
  {
    label: "Chicken breast",
    img: chickenBreast,
    description: "A cooked chicken breast",
    calories: 270,
  },
  {
    label: "Quarter Pounder",
    img: quarterPounder,
    description: "A quarter pounder from McDonald's",
    calories: 420,
  },
  {
    label: "Ramen",
    img: ramen,
    description: "A bowl of Ichiran ramen without toppings",
    calories: 550,
  },
];

export default function ImagesRep() {
  const [food, setFood] = useState("");

  const { bmrState } = useContext(ValuesContext);

  const calorieRatio = Math.round((bmrState / food.calories) * 100) / 100;

  return (
    <div className={styles["imagesRep-container"]}>
      <h1>Select a food to see a visual representation of your BMR</h1>
      <div className={styles["btn-container"]}>
        {images.map((image) => (
          <button onClick={() => setFood(image)}>{image.label}</button>
        ))}
      </div>
      {food && <p>{food.description}</p>}
      {food && (
        <img src={food.img} alt={food.description} className={styles.img} />
      )}
      {food && <p>{calorieRatio}</p>}
    </div>
  );
}
