import { useContext } from "react";
import { ValuesContext } from "../../context/ValuesContext";
import TdeeText from "./TdeeText";
import TdeeCalculator from "./TdeeCalculator";
import Divider from "../../components/divider/Divider";

import styles from "./styles/Tdee.module.css";

export default function Tdee({ id }) {
  const { bmrState } = useContext(ValuesContext);

  return (
    <div id={id} className={bmrState ? styles.tdee : styles["tdee--wait"]}>
      {bmrState && (
        <>
          <TdeeText />
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
