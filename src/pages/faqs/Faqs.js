import { useState } from "react";
import FaqsAnswers from "./FaqsAnswers";
import Divider from "../../components/divider/Divider";

import styles from "./styles/Faqs.module.css";

const faqs = [
  "I'm not losing weight. CICO is a lie!",
  "I'm hungry. What do I do?",
  "Do I need to exercise?",
  "Are calories all that matter for weight loss?",
  "I don't want to count calories. What else can I do?",
  "My social life is taking a hit. What can I do?",
  "I want to make a huge deficit to lose weight ASAP.",
  "I want to learn more.",
];

export default function Faqs({ id }) {
  const [active, setActive] = useState();

  const faqRevealHandler = (e) => {
    setActive(e.target.id.toString());
  };

  return (
    <div id={id} className={styles.faqs}>
      <h2 className="title">FAQs</h2>
      <p className={styles.text}>
        You've made it to the end! You've learned the bare basics of how to lose
        weight. If you still have questions, take a look at the FAQs below.
      </p>
      <div className={styles["faqs-container"]}>
        <div className={styles["questions-container"]}>
          {faqs.map((faq, i) => (
            <button
              className={active === i.toString() ? `${styles.active}` : ""}
              id={i}
              key={i}
              onClick={faqRevealHandler}
            >
              {faq}
            </button>
          ))}
        </div>
        <div className={styles["answers-container"]}>
          {active && <p>{FaqsAnswers[active]}</p>}
        </div>
      </div>

      <Divider color="sky-blue" />
    </div>
  );
}
