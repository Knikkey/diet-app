import { useContext } from "react";
import { ValuesContext } from "../../context/ValuesContext";
import {
  foodComparisonPercent,
  foodComparison,
} from "../../components/calculations/FoodCalc";
import ImagesRep from "./ImagesRep";

import styles from "./styles/BmrText.module.css";

export default function BmrText() {
  const { bmrState } = useContext(ValuesContext);

  return (
    <div className={styles["bmrText-container"]}>
      <h1>What is BMR?</h1>
      <p>
        BMR stands for <span>B</span>asal <span>M</span>etabolic <span>R</span>
        ate and represents an estimate on how much energy your body uses just to
        exist.
      </p>
      {bmrState && (
        <>
          <p className={styles.text}>
            According to our calculations, just by not being dead, your body
            requires about <span>{bmrState}</span> calories per day. That's like
            <span className={styles["food-comparison"]}>
              {" "}
              {foodComparisonPercent(bmrState, 2080)}%{" "}
            </span>
            of a whole medium sized Buffalo Chicken pizza from Domino's or{" "}
            <span className={styles["food-comparison"]}>
              {" "}
              {foodComparison(bmrState, 270)}{" "}
            </span>{" "}
            large scoops of Pralines & Cream ice cream from Baskin-Robbins just
            for existing! Pretty sweet, huh?
          </p>
          <ImagesRep />
        </>
      )}
    </div>
  );
}
