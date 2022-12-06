import Divider from "../../components/divider/Divider";
import BasicsSwiper from "./BasicsSwiper";

import styles from "./styles/Basics.module.css";

export default function Basics({ id }) {
  return (
    <div id={id} className={styles.basics}>
      <BasicsSwiper />
      <Divider color="emerald" />
    </div>
  );
}
