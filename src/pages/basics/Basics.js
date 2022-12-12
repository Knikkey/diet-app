import Divider from "../../components/divider/Divider";
import Slide1 from "./Slide1";
import Slide2 from "./Slide2";

import styles from "./styles/Basics.module.css";

export default function Basics({ id }) {
  return (
    <div id={id} className={styles.basics}>
      <Slide2 />
      <Divider color="emerald" />
    </div>
  );
}
