import TdeeText from "./TdeeText";
import TdeeCalculator from "./TdeeCalculator";
import Divider from "../../components/divider/Divider";

import styles from "./styles/Tdee.module.css";

export default function Tdee({ id }) {
  return (
    <div id={id} className={styles.tdee}>
      <TdeeText />
      <TdeeCalculator />
      <Divider color="deep-green" />
    </div>
  );
}
