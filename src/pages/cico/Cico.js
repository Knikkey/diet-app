import Divider from "../../components/divider/Divider";
import weightGainGif from "./weight-gain-gif.webp";

import styles from "./styles/Cico.module.css";

export default function Cico({ id }) {
  return (
    <div id={id} className={styles.cico}>
      <div className={styles["img-container"]}>
        <img
          src={weightGainGif}
          alt="gif of a sheep eating food and becoming larger"
          className={styles.img}
        />
      </div>
      <div className={styles["text-container"]}>
        <h2 className="title">What is CICO?</h2>
        <p>
          <span>CICO</span> stands for <span>C</span>alories <span>I</span>n,{" "}
          <span>C</span>alories <span>O</span>
          ut. As we know from the first law of thermodynamics, energy cannot be
          created or destroyed. Therefore, when we consume more calories than
          our bodies can use, our bodies save the excess energy as body fat.
          When the opposite happens, our bodies break down body fat to be used
          as energy. So, if you want to lose weight, you just need to consume
          less calories than you burn.
        </p>
        <p>
          "Why eat less?", you might be wondering. "Instead of lowering the
          Calories In part, can't we raise the Calories Out?" You most certainly
          can, but it's harder to do. Take this example:
          <ul>
            <li>
              An average person will burn around 100 calories per mile ran. A
              Quarter Pounder With Cheese is over 400 calories. Which seems
              easier, running over 4 miles, or not eating that burger?
            </li>
          </ul>
        </p>

        <p>
          Consuming less calories than what you burn is commonly known as a
          calorie deficit. There are many ways to create a calorie deficit, but
          we'll be looking at the most hands-on, tried and true method: counting
          calories. Later, we'll briefly go over other methods in case counting
          calories isn't for you. First, let's start by estimating how many
          calories you burn in a day.
        </p>
      </div>

      <Divider color="emerald" />
    </div>
  );
}
