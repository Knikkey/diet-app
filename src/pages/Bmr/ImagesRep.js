import { useContext, useEffect, useState } from "react";
import { ValuesContext } from "../../context/ValuesContext";

import pizza from "./images/pizza.webp";
import icecream from "./images/icecream.webp";
import costcoSalad from "./images/costco-salad.webp";
import crunchwrap from "./images/crunchwrap.jpg";
import chickenBreast from "./images/chicken-breast.webp";
import quarterPounder from "./images/quarter-pounder.webp";
import ramen from "./images/ramen.webp";

import styles from "./styles/ImagesRep.module.css";

const images = [
  {
    label: "Pizza",
    img: pizza,
    description: "a medium buffalo chicken pizza from Domino's",
    calories: 2080,
  },
  {
    label: "Ice cream",
    img: icecream,
    description: "a scoop of pralines & cream ice cream from Baskin-Robbins",
    calories: 270,
  },
  {
    label: "Caesar salad",
    img: costcoSalad,
    description: "a caesar salad from Costco (with dressing)",
    calories: 700,
  },
  {
    label: "Crunchwrap",
    img: crunchwrap,
    description: "a chicken crunchwrap supreme from Taco Bell",
    calories: 600,
  },
  {
    label: "Chicken breast",
    img: chickenBreast,
    description: "a cooked chicken breast",
    calories: 270,
  },
  {
    label: "Quarter Pounder",
    img: quarterPounder,
    description: "a quarter pounder from McDonald's",
    calories: 420,
  },
  {
    label: "Ramen",
    img: ramen,
    description: "a bowl of Ichiran ramen without toppings",
    calories: 550,
  },
];

export default function ImagesRep() {
  const [food, setFood] = useState("");
  const [array, setArray] = useState(null);

  const { bmrState } = useContext(ValuesContext);

  const calorieRatio = Math.round((bmrState / food.calories) * 100) / 100;
  const wholeNumber = Math.floor(calorieRatio);
  const fraction = Math.round((calorieRatio - wholeNumber) * 100) / 100;

  useEffect(() => {
    let arr = [];
    for (let i = 1; i <= calorieRatio; i++) {
      arr.push(food);
    }
    setArray(arr);
  }, [food, calorieRatio]);

  useEffect(() => {
    if (typeof food === "object")
      document.documentElement.style.setProperty(
        "--fraction",
        360 - fraction * 360 + "deg"
      );
  });

  return (
    <div className={styles["imagesRep-container"]}>
      <h1>Select a food to see a visual representation of your BMR</h1>
      <div className={styles["btn-container"]}>
        {images.map((image) => (
          <button key={image.label} onClick={() => setFood(image)}>
            {image.label}
          </button>
        ))}
      </div>
      {food && (
        <>
          <p>
            Your BMR compared to: <span>{food.description}</span>
          </p>
          {array &&
            array.map((food, i) => (
              <img
                key={Math.random()}
                src={food.img}
                alt={food.description}
                className={styles.img}
              />
            ))}
          {fraction > 0 && (
            <div key={Math.random()} className={styles["fraction-container"]}>
              <img
                key={Math.random()}
                src={food.img}
                alt={food.description}
                className={styles["img--fraction"]}
              />
              <img
                key={Math.random()}
                src={food.img}
                alt={food.description}
                className={styles["img--fraction--fall-off"]}
              />
            </div>
          )}
        </>
      )}
    </div>
  );
}
