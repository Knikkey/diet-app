import Divider from "../../components/divider/Divider";

import styles from "./styles/Tdee.module.css";

export default function Tdee({ id }) {
  return (
    <div id={id} className={styles.tdee}>
      Tdee
      <Divider color="pink" />
    </div>
  );
}
