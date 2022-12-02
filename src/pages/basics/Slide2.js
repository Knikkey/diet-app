import { useState } from "react";
import { useDrag, useDrop } from "react-dnd";
import lightningcloud from "./lightningcloud.svg";
import icecream from "../../components/imagesRep/images/icecream.webp";
import chickenBreast from "../../components/imagesRep/images/chicken-breast.webp";
import quarterPounder from "../../components/imagesRep/images/quarter-pounder.webp";

import styles from "./styles/Slide.module.css";

const pics = [
  { src: icecream, alt: "ice cream", id: 1 },
  { src: chickenBreast, alt: "chicken breast", id: 2 },
  { src: quarterPounder, alt: "quarter pounder", id: 3 },
];

export default function Slide2() {
  const [selectedFood, setSelectedFood] = useState();

  const [{ isDragging }, drag] = useDrag(() => ({
    type: "img",
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "img",
    drop: (item) => {
      console.log(item);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

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
        <p>
          Fun fact: calories used to be measured with a device called a{" "}
          <b>bomb calorimeter</b>. Food would be placed in a container
          surrounded by water. The food would be burned electrically and the
          change in water temperature would be recorded.
        </p>
        <p>
          Drag and drop food items into our <b>bomb calorimeter</b> to see how
          many calories it has. Our <b>bomb calorimeter</b> has 100g of water,
          so an increase of 1 degree Celsius would mean 100 calories.
        </p>
        <div className={styles["imgs"]}>
          {pics.map(({ src, alt, id }) => (
            <img
              src={src}
              alt={alt}
              key={id}
              ref={drag}
              className={styles.img}
            />
          ))}
        </div>
      </div>
      <div className={styles["img-container"]}>
        <img
          src={lightningcloud}
          alt="lightning cloud"
          className={styles.lightning}
        />
        <div className={styles.calorimeter}>
          <div className={styles.drop} ref={drop}>
            {selectedFood && { selectedFood }}
          </div>
          <div className={styles.tube}>
            <div className={styles.vein}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
