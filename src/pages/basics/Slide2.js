import { useState } from "react";
import lightningcloud from "./lightningcloud.svg";
import icecream from "../../components/imagesRep/images/icecream.webp";
import costcoSalad from "../../components/imagesRep/images/costco-salad.webp";
import quarterPounder from "../../components/imagesRep/images/quarter-pounder.webp";

import styles from "./styles/Slide.module.css";

const pics = [
  {
    src: icecream,
    alt: "ice cream",
    id: 1,
    style: "ice-cream",
    tempDifference: "2.7",
  },
  {
    src: costcoSalad,
    alt: "chicken breast",
    id: 2,
    style: "ceasar-salad",
    tempDifference: "7",
  },
  {
    src: quarterPounder,
    alt: "quarter pounder",
    id: 3,
    style: "quarter-pounder",
    tempDifference: "4.2",
  },
];

export default function Slide2() {
  const [draggedFood, setDraggedFood] = useState();
  const [selectedFood, setSelectedFood] = useState(false);

  const dragStartHandler = (e) => {
    setSelectedFood(false);
    const check = pics.filter((pic) =>
      pic.alt === e.target.alt ? true : false
    );
    setDraggedFood(check[0]);
  };

  const dragEnterOverHandler = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const dropHandler = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setSelectedFood(true);
  };

  return (
    <div className={styles.slide}>
      <div className={styles["text-container"]}>
        <p>
          First, we need to understand what a calorie is. A calorie is a
          measurement of energy, just like how a gram is a measurement of
          weight. To be more specific, a calorie is the amount of energy
          required to increase the temperature of 1 gram of water by 1 degree
          Celsius. That means when we're talking about calories from food, we're
          talking about how much energy we get from eating that food.
        </p>
        <p className="italic">
          Fun fact: Calories used to be measured with a device called a{" "}
          <span className="bold">bomb calorimeter</span>. Food would be placed
          in a container surrounded by water. The food would be burned
          electrically and the change in water temperature would be recorded.
        </p>
        <p>
          Drag and drop food items into our{" "}
          <span className="bold">bomb calorimeter</span> to see how many
          calories it has. Our <span className="bold">bomb calorimeter</span>{" "}
          has 100g of water, so an increase of 1 degree Celsius would mean 100
          calories.
        </p>
        <div className={styles["imgs"]}>
          {pics.map(({ src, alt, id }) => (
            <img
              src={src}
              alt={alt}
              key={id}
              onDragStart={dragStartHandler}
              className={styles.img}
            />
          ))}
        </div>
      </div>
      <div className={styles["img-container"]}>
        {!selectedFood && <p className={styles["temp-reading"]}>&nbsp;</p>}
        {selectedFood && (
          <p className={styles["temp-reading"]}>
            + {draggedFood.tempDifference}℃ &#8594;{" "}
            {Number(draggedFood.tempDifference * 100)} calories
          </p>
        )}

        <img
          src={lightningcloud}
          alt="lightning cloud"
          className={`${styles.lightning} ${selectedFood && styles.flash}`}
        />
        <div className={styles.calorimeter}>
          <div
            className={`${styles.drop} ${selectedFood && styles.glow}`}
            onDrop={dropHandler}
            onDragEnter={dragEnterOverHandler}
            onDragOver={dragEnterOverHandler}
          >
            {selectedFood && (
              <img
                src={draggedFood.src}
                alt={draggedFood.alt}
                className={`${styles.img} ${selectedFood && styles.shrink}`}
              />
            )}
          </div>
          <div className={styles.tube}>
            <div
              className={
                !selectedFood
                  ? styles.vein
                  : styles[`vein--${draggedFood.style}`]
              }
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
