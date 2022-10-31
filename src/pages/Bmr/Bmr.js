import BmrCalculator from "./BmrCalculator";
import BmrText from "./BmrText";

import styles from "./styles/Bmr.module.css";

export default function Bmr() {
  return (
    <div className={styles.bmr}>
      <BmrCalculator />
      <BmrText />
    </div>
  );
}
