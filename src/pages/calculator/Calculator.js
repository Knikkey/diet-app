import { useState } from "react";

import styles from "./Calculator.module.css";

const metricSettings = [
  { label: "Weight", placeholderMetric: "kilograms (kg)" },
  { label: "Height", placeholderMetric: "centimeters (cm)" },
  { label: "Age", placeholderMetric: "years" },
];
const imperialSettings = [
  { label: "Weight", placeholder: "kilograms (kg)" },
  { label: "Height", placeholder: "centimeters (cm)" },
  { label: "Age", placeholder: "years" },
];

export default function Calculator() {
  const [units, setUnits] = useState("metric");

  return (
    <div className={styles["form-container"]}>
      <form className={styles.form}>
        {metricSettings.map((obj) => {
          return (
            <>
              {units === "imperial" && obj.label === "Height" ? (
                <>
                  <label htmlFor={obj.placeholderImp1}>{obj.label}:</label>
                  <input
                    id={obj.placeholderImp1}
                    type="number"
                    placeholder={obj.placeholderImp1}
                  ></input>
                  <input
                    id={obj.placeholderImp2}
                    type="number"
                    placeholder={obj.placeholderImp2}
                  ></input>
                </>
              ) : (
                <>
                  <label htmlFor={obj.label}>{obj.label}:</label>
                  <input
                    id={obj.label}
                    type="number"
                    placeholder={obj.placeholderMetric}
                  ></input>
                </>
              )}
            </>
          );
        })}
        <label>Sex:</label>
        <div className={styles["radio-container"]}>
          <label>Male</label>
          <input type="radio" name="sex"></input>
          <label>Female:</label>
          <input type="radio" name="sex"></input>
        </div>
      </form>
    </div>
  );
}
