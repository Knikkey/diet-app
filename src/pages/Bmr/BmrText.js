import { useContext } from "react";
import { ValuesContext } from "../../context/ValuesContext";

import styles from "./BmrText.module.css";

export default function BmrText() {
  const { bmrState } = useContext(ValuesContext);

  //quarter pounder = 420
  //ichiran plain, crunchwrap chicken = 600
  //costco salad = 700
  //cooked chicken breast = 300

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
          large scoops of Pralines & Cream ice cream from Baskin-Robbins just
          for existing! Pretty sweet, huh?
        </p>
      </p>
    </div>
  );
}
