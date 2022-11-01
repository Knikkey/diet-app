import { useContext } from "react";
import { ValuesContext } from "../../context/ValuesContext";
import ImagesRep from "./ImagesRep";

import styles from "./styles/BmrText.module.css";

export default function BmrText() {
  const { bmrState } = useContext(ValuesContext);

  const foodComparisonPercent = (food) => {
    return Math.round((Math.round((bmrState / food) * 100) / 100) * 100);
  };

  const foodComparison = (food) => {
    return Math.round((bmrState / food) * 10) / 10;
  };

  return (
    <div className={styles["bmrText-container"]}>
      <h1>What is BMR?</h1>
      <p>
        BMR stands for <span>B</span>asal <span>M</span>etabolic <span>R</span>
        ate and represents an estimate on how much energy your body uses just to
        exist. According to our calculations, just by not being dead, your body
        requires about <span>{bmrState}</span> calories per day.
      </p>
      <p>
        That's like
        <span className={styles["food-comparison"]}>
          {" "}
          {foodComparisonPercent(2080)}%{" "}
        </span>
        of a whole medium sized Buffalo Chicken pizza from Domino's or{" "}
        <span className={styles["food-comparison"]}>
          {" "}
          {foodComparison(270)}{" "}
        </span>{" "}
        large scoops of Pralines & Cream ice cream from Baskin-Robbins just for
        existing! Pretty sweet, huh?
      </p>
      <ImagesRep />
    </div>
  );
}
