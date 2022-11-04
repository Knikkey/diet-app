import { Link } from "react-router-dom";

import styles from "./styles/Navbar.module.css";

const links = [
  { to: "/", label: "Home" },
  { to: "/basics", label: "Weight Loss 101" },
  { to: "/bmr", label: "BMR Calculator" },
  { to: "/tdee", label: "TDEE Calculator" },
  { to: "/faqs", label: "FAQs" },
];

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.bubble}>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z"
            className={styles["shape-fill"]}
          ></path>
        </svg>
      </div>
      <ul>
        {links.map((link, i) => (
          <li key={i}>
            <Link to={link.to} className={styles.link}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
