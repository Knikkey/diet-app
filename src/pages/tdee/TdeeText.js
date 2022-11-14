import { useContext } from "react";
import { ValuesContext } from "../../context/ValuesContext";
import {
  foodComparisonPercent,
  foodComparison,
} from "../../components/calculations/FoodCalc";
import ImagesRep from "../../components/imagesRep/ImagesRep";

import styles from "./styles/TdeeText.module.css";

export default function TdeeText() {
  const { tdeeState } = useContext(ValuesContext);

  return (
    <div className={styles["tdeeText-container"]}>
      <h1>What is TDEE?</h1>
      <p>
        TDEE stands for <span>T</span>otal <span>D</span>aily <span>E</span>
        nergy <span>E</span>xpenditure and represents an estimate on how much
        energy your body uses in a day. This takes your <span>BMR</span> into
        account as well as things like exercise and non-exercise activities.
      </p>

      {tdeeState && (
        <>
          <p className={styles.text}>
            According to our calculations, your body requires about{" "}
            <span>{tdeeState}</span> calories per day. That's like
            <span className={styles["food-comparison"]}>
              {" "}
              {foodComparisonPercent(tdeeState, 2080)}%{" "}
            </span>
            of a whole medium sized Buffalo Chicken pizza from Domino's or{" "}
            <span className={styles["food-comparison"]}>
              {" "}
              {foodComparison(tdeeState, 270)}{" "}
            </span>{" "}
            large scoops of Pralines & Cream ice cream from Baskin-Robbins! Not
            bad, huh?
          </p>
          <ImagesRep number={tdeeState} label={"BMR"} />
        </>
      )}
    </div>
  );
}
