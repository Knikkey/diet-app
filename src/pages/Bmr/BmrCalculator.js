import { useState, useRef, useContext } from "react";
import { ValuesContext } from "../../context/ValuesContext";
import FormElements from "../../components/form/FormElements";
import Radio from "../../components/form/Radio";

import styles from "./styles/BmrCalculator.module.css";

export default function Calculator() {
  const [units, setUnits] = useState("metric");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [heightInches, setHeightInches] = useState("");
  const [age, setAge] = useState("");
  const [sex, setSex] = useState("");

  const { bmrState, setBmrState } = useContext(ValuesContext);

  const results = useRef();

  const unitHandler = (e) => {
    setUnits(e.target.value);
  };

  const formHandler = (e) => {
    e.preventDefault();
    let BMR;

    if (units === "metric") {
      BMR =
        Math.round(
          (10 * weight +
            6.25 * height -
            5 * age +
            (sex === "male" ? 5 : -161)) /
            10
        ) * 10;
    }
    if (units !== "metric") {
      BMR =
        Math.round(
          (10 * (weight / 2.2) +
            6.25 * ((height * 12 + Number(heightInches)) * 2.54) -
            5 * age +
            (sex === "male" ? 5 : -161)) /
            10
        ) * 10;
    }

    setBmrState(BMR);
    results.current.classList.add(styles["bmr-container--visable"]);
  };

  return (
    <div className={styles["calc-container"]}>
      <h1>BMR Calculator</h1>

      <form className={styles.form} onSubmit={formHandler}>
        <Radio
          mainLabel="Units"
          radioLabel1="Metric"
          radioLabel2="Imperial"
          name="system"
          defaultChecked="checked"
          style={styles["radio-container"]}
          onChange={unitHandler}
        ></Radio>

        <FormElements
          label="Weight"
          placeholder={units === "metric" ? "kilograms (kg)" : "pounds (lbs)"}
          type="number"
          onChange={(e) => setWeight(e.target.value)}
        />
        {units === "metric" && (
          <FormElements
            label="Height"
            placeholder="centimeters (cm)"
            type="number"
            onChange={(e) => setHeight(e.target.value)}
          />
        )}
        {units === "imperial" && (
          <>
            <FormElements
              label="Height"
              placeholder="feet (ft)"
              type="number"
              className={styles.span1}
              onChange={(e) => setHeight(e.target.value)}
            />
            <label htmlFor="inches" className={styles["sr-only"]}>
              Height (inches):
            </label>
            <input
              id="inches"
              placeholder="inches (in)"
              type="number"
              className={styles.inches}
              onChange={(e) => setHeightInches(e.target.value)}
            />
          </>
        )}
        <FormElements
          label={"Age"}
          placeholder={"years"}
          type={"number"}
          onChange={(e) => setAge(e.target.value)}
        />
        <Radio
          mainLabel="Sex"
          radioLabel1="Male"
          radioLabel2="Female"
          name="sex"
          style={styles["radio-container"]}
          onChange={(e) => setSex(e.target.value)}
        ></Radio>
        <button type="submit">Calculate</button>
      </form>
      <div ref={results} className={styles["bmr-container"]}>
        <span className={styles["result-message"]}>
          Your estimated BMR is <span>{bmrState}</span>
        </span>
      </div>
    </div>
  );
}
