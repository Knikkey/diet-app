import Divider from "../../components/divider/Divider";
import Slide1 from "./Slide1";

import styles from "./styles/Basics.module.css";

export default function Basics({ id }) {
  return (
    <div id={id} className={styles.basics}>
      <Slide1 />
      <Divider color="emerald" />
    </div>
  );
}
