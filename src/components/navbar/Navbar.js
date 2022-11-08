import { useState, useEffect } from "react";

import styles from "./styles/Navbar.module.css";

const links = [
  { href: "home", label: "Home" },
  { href: "basics", label: "Weight Loss 101" },
  { href: "bmr", label: "BMR Calculator" },
  { href: "tdee", label: "TDEE Calculator" },
  { href: "faqs", label: "FAQs" },
];

export default function Navbar() {
  const [show, setShow] = useState(true);
  const controlNavbar = () => {
    if (window.scrollY > 600) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
  }, []);

  return (
    <nav className={`${styles.nav} ${!show && styles["nav__hide"]}`}>
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
            <a href={`#${link.href}`} className={styles.link}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
