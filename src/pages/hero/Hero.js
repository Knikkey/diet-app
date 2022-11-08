import Divider from "../../components/divider/Divider";

import tea from "./tea.svg";

import styles from "./styles/Hero.module.css";

export default function Hero({ id }) {
  return (
    <div id={id} className={styles.hero}>
      <div className={styles["text-container"]}>
        <h1>Fit with Nick</h1>
        <h2>A beginner's guide to weight loss</h2>
        <p>
          Just enough info to help you get started on your journey to a
          healthier life.
        </p>
        <img src={tea} alt="two people drinking tea" />
      </div>
      <Divider color="pastel-green" />
    </div>
  );
}
