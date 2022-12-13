import { useState, useEffect } from "react";

import styles from "./styles/Navbar.module.css";

const links = [
  { href: "home", label: "Home" },
  { href: "calories", label: "What's a calorie?" },
  { href: "cico", label: "CICO" },
  { href: "bmr", label: "BMR Calculator" },
  { href: "tdee", label: "TDEE Calculator" },
  { href: "counting", label: "Counting Calories" },
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
