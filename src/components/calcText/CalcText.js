import {
  foodComparisonPercent,
  foodComparison,
} from "../calculations/FoodCalc";
import ImagesRep from "../imagesRep/ImagesRep";

import styles from "./styles/CalcText.module.css";

export default function CalcText({ calcResult, label, text, children }) {
  return (
    <div className={styles["calcText-container"]}>
      <h2 className="title">What is {label}?</h2>
      {children}
      {calcResult && (
        <>
          <p>
            According to our calculations, your body requires about{" "}
            <span>{calcResult}</span> calories per day {text} That's like
            <span className={styles["food-comparison"]}>
              {" "}
              {foodComparisonPercent(calcResult, 2080)}%{" "}
            </span>
            of a whole medium sized Buffalo Chicken pizza from Domino's or{" "}
            <span className={styles["food-comparison"]}>
              {" "}
              {foodComparison(calcResult, 270)}{" "}
            </span>{" "}
            large scoops of Pralines & Cream ice cream from Baskin-Robbins just
            for existing! Pretty sweet, huh?
          </p>
          <ImagesRep number={calcResult} label={label} />
        </>
      )}
    </div>
  );
}
