import { useContext } from "react";
import { ValuesContext } from "../../context/ValuesContext";
import BmrCalculator from "./BmrCalculator";
import CalcText from "../../components/calcText/CalcText";
import Divider from "../../components/divider/Divider";

import styles from "./styles/Bmr.module.css";

export default function Bmr({ id }) {
  const { bmrState } = useContext(ValuesContext);

  return (
    <section id={id} className={styles.bmr}>
      <BmrCalculator />
      <CalcText
        calcResult={bmrState}
        label="BMR"
        text="just by not being dead!"
      >
        <p>
          <span>BMR</span> stands for <span>B</span>asal <span>M</span>etabolic{" "}
          <span>R</span>
          ate and represents an estimate on how much energy your body uses just
          to exist.
        </p>
      </CalcText>

      <Divider color="yellow" />
    </section>
  );
}
