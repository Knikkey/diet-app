import Divider from "../../components/divider/Divider";

import styles from "./styles/Faqs.module.css";

export default function Faqs({ id }) {
  return (
    <div id={id} className={styles.faqs}>
      Faqs
      <Divider color="orange" />
    </div>
  );
}
