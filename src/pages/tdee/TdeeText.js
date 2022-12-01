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
        energy your body uses in a day. This is calculated by adding a few
        things: First, your <span>BMR</span>, which you calculated earlier.
        Second, your non-exercise activities, such as typing on a keyboard or
        bobbing your head to music. Finally, your exercise activites, such as
        resistance training or sports.
      </p>

      {tdeeState && (
        <>
          <p className={styles.text}>
            According to our calculations, your body requires about{" "}
            <span>{tdeeState}</span> calories per day based on your reported
            activity. That's like
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
