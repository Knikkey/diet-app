import { useState } from "react";
import FormElements from "../../components/FormElements";
import Radio from "../../components/Radio";

import styles from "./Calculator.module.css";

export default function Calculator() {
  const [units, setUnits] = useState("metric");

  const unitHandler = (e) => {
    setUnits(e.target.value);
  };

  const formHandler = (e) => {
    e.preventDefault();
    console.log(e.target.value);
  };

  return (
    <div className={styles["calc-container"]}>
      <h1>BMR Calculator</h1>

      <form className={styles.form} onSubmit={formHandler}>
        <Radio
          mainLabel={"Units"}
          radioLabel1={"Metric"}
          radioLabel2={"Imperial"}
          name={"system"}
          defaultChecked="checked"
          style={styles["radio-container"]}
          onChange={unitHandler}
        ></Radio>

        <FormElements
          label={"Weight"}
          placeholder={units === "metric" ? "kilograms (kg)" : "pounds (lbs)"}
          type={"number"}
        />
        {units === "metric" && (
          <FormElements
            label={"Height"}
            placeholder={"centimeters (cm)"}
            type={"number"}
          />
        )}
        {units === "imperial" && (
          <>
            <FormElements
              label={"Height"}
              placeholder={"feet (ft)"}
              type={"number"}
              className={styles.span1}
            />
            <label htmlFor="inches" className={styles["sr-only"]}>
              Height (inches):
            </label>
            <input
              id="inches"
              placeholder="inches (in)"
              type="number"
              className={styles.inches}
            />
          </>
        )}
        <FormElements label={"Age"} placeholder={"years"} type={"number"} />
        <Radio
          mainLabel={"Sex"}
          radioLabel1={"Male"}
          radioLabel2={"Female"}
          name={"sex"}
          style={styles["radio-container"]}
          onChange={unitHandler}
        ></Radio>
        <button type="submit">Calculate</button>
      </form>
    </div>
  );
}
