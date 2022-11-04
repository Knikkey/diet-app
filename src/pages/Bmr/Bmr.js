import BmrCalculator from "./BmrCalculator";
import BmrText from "./BmrText";
import Divider from "../../components/divider/Divider";

import styles from "./styles/Bmr.module.css";

export default function Bmr({ id }) {
  return (
    <section id={id} className={styles.bmr}>
      <BmrCalculator />
      <BmrText />
      <Divider color="beige" />
    </section>
  );
}
