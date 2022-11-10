import { useState, useContext } from "react";
import FormElements from "../../components/form/FormElements";
import { ValuesContext } from "../../context/ValuesContext";

import styles from "./styles/TdeeCalculator.module.css";

export default function TdeeCalculator() {
  const [lightCardio, setLightCardio] = useState(null);
  const [hardCardio, setHardCardio] = useState(null);

  const { bmrState, tdeeState, setTdeeState } = useContext(ValuesContext);

  const formHandler = (e) => {
    e.preventDefault();

    const neat = bmrState * 0.13;
    const burnLightCardio = (lightCardio / 7) * 400;
    const burnHardCardio = (hardCardio / 7) * 700;
    const tdee =
      Math.round((bmrState + neat + burnLightCardio + burnHardCardio) / 10) *
      10;

    setTdeeState(tdee);
  };

  return (
    <div className={styles["calc-container"]}>
      <h1>TDEE Calculator</h1>
      <form onSubmit={formHandler} className={styles.form}>
        <FormElements
          label="Hours of light cardio exercise per week"
          type="input"
          placeholder="2.5"
          className={styles.input}
          onChange={(e) => setLightCardio(e.target.value)}
        />
        <p>
          <span>
            *Light cardio is considered exercise that slightly raises your heart
            rate.
          </span>
          <span>
            Examples: walking, weight lifting, light cycling/swimming, etc.
          </span>
        </p>
        <FormElements
          label="Hours of hard cardio exercise per week"
          type="input"
          placeholder="1.5"
          className={styles.input}
          onChange={(e) => setHardCardio(e.target.value)}
        />
        <p>
          <span>
            *Hard cardio is considered exercise that significantly raises your
            heart rate.
          </span>
          <span>
            Examples: jogging, running, HIIT, hard cycling/swimming, etc.
          </span>
        </p>
        <button type="submit">Calculate</button>
      </form>
      <span>Your estimated TDEE is: {tdeeState}</span>
    </div>
  );
}
