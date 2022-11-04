import Divider from "../../components/divider/Divider";

import styles from "./styles/Basics.module.css";

export default function Basics({ id }) {
  return (
    <div id={id} className={styles.basics}>
      Basics
      <Divider color="emerald" />
    </div>
  );
}
