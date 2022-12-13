import mfp from "./mfp.jpg";
import Divider from "../../components/divider/Divider";

import styles from "./styles/CountingCalories.module.css";

export default function CountingCalories({ id }) {
  return (
    <div id={id} className={styles.counting}>
      <div className={styles["text-container"]}>
        <h2 className="title">Counting Calories</h2>
        <p>
          Now that we have an estimate of how many calories you burn, all that's
          left is to figure out how to count calories and how many calories you
          should be consuming to lose weight.
        </p>
        <div>
          Your TDEE minus 500 is a good starting point. There are 2 reasons for
          why we choose the number 500:
          <ul>
            <li>
              First, 1 pound of fat was estimated to be about 3500 calories
              worth of energy. If we divide that number by 7 for each day of the
              week, it comes out to a 500 calorie deficit daily to lose 1 pound
              of fat a week.
            </li>
            <li>
              A 500 calorie deficit provides decent cushioning for errors in our
              CICO estimates. Remember, your TDEE is an <span>estimate</span>.
              In reality, it could be quite a bit higher or lower. On top of
              that, your actual energy expenditure is not static. It will change
              slightly day to day depending on a number of factors such as
              activity levels, stress, sleep quality, and more. You may also end
              up miscounting your calorie intake, which is very common. A 500
              calorie deficit is large enough for an accidental calorie surplus
              to be unlikely, while also being small enough to not greatly
              hinder your performance or health.
            </li>
          </ul>
        </div>
        <p>
          As for how to track your calorie intake, you can simply look at the
          label of whatever you're eating and keep a note. Many restaurants have
          nutrition that you can ask for. If you're eating something without a
          label such as an apple, you can use websites such as{" "}
          <a
            href="https://www.myfitnesspal.com/nutrition-facts-calories"
            target="_blank"
            rel="noreferrer noopener"
          >
            My Fitness Pal
          </a>{" "}
          to look up estimated calorie amounts. Apps such as My Fitness Pal also
          offers apps to track your calories if you prefer that over taking
          notes.
        </p>
      </div>

      <div className={styles["img-container"]}>
        <img src={mfp} alt="My Fitness Pal app screen" />
      </div>

      <Divider color="emerald" />
    </div>
  );
}
