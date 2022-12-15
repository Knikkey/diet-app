import { useContext } from "react";
import { ValuesContext } from "../../context/ValuesContext";
import CalcText from "../../components/calcText/CalcText";
import TdeeCalculator from "./TdeeCalculator";
import Divider from "../../components/divider/Divider";

import styles from "./styles/Tdee.module.css";

export default function Tdee({ id }) {
  const { bmrState, tdeeState } = useContext(ValuesContext);

  return (
    <div id={id} className={bmrState ? styles.tdee : styles["tdee--wait"]}>
      {bmrState && (
        <>
          <CalcText
            calcResult={tdeeState}
            label="TDEE"
            text="based on your reported
            activity."
          >
            <p>
              <span>TDEE</span> stands for <span>T</span>otal <span>D</span>aily{" "}
              <span>E</span>
              nergy <span>E</span>xpenditure and represents an estimate on how
              much energy your body uses in a day. This is calculated by adding
              a few things to your <span>BMR</span>. First, we add your
              non-exercise activities, such as typing on a keyboard or bobbing
              your head to music. This is otherwise known as <span>NEAT</span>,
              or <span>N</span>on <span>E</span>
              xercise <span>A</span>ctivity <span>T</span>hermogenesis. Second,
              we add your exercise-related activites, such as resistance
              training or sports.
            </p>
          </CalcText>
          <TdeeCalculator />
        </>
      )}
      {!bmrState && (
        <div className={styles["wait-container"]}>
          <p className={styles.wait}>Wait!</p>
          <p className={styles["wait-text"]}>
            We know you're excited to excited to learn, but let's take it
            slowly. Let's figure out your <a href="#bmr">BMR</a> first before we
            continue.
          </p>
        </div>
      )}
      <Divider color="deep-green" />
    </div>
  );
}
