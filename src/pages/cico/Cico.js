import Divider from "../../components/divider/Divider";

import styles from "./styles/Cico.module.css";

export default function Cico({ id }) {
  return (
    <div id={id} className={styles.cico}>
      <span className={styles.title}>What is CICO?</span>
      <div className={styles["text-container"]}>
        <p>
          CICO stands for Calories In, Calories Out. As we know from the first
          law of thermodynamics, energy cannot be created or destroyed.
          Therefore, when we consume more caloires than our bodies can use, our
          bodies save the excess energy as body fat. When the opposite happens,
          our bodies break down fat to be used as energy. So, the weight-loss
          formula is simple: consume less calories than you use.
        </p>
        <p>
          There are many ways to execute this. We'll look at the most hands-on
          method: counting calories. At the end, we'll briefly go over other
          methods in case counting calories isn't for you. Let's start by
          estimating how many calories you burn in a day.
        </p>
      </div>
      <Divider color="emerald" />
    </div>
  );
}
