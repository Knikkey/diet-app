import styles from "./styles/Hero.module.css";

export default function Hero() {
  return (
    <div className={styles.hero}>
      <h1>Fit with Nick</h1>
      <h2>A beginner's guide to weight loss</h2>
      <p>Just enough info to help you get started without overloading you.</p>
    </div>
  );
}
