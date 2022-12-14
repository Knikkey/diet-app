import styles from "./styles/Answers.module.css";

export default function Answer4() {
  return (
    <div className={styles.answer}>
      <p>
        No worries. This is very common. Some people can't be fussed with
        tracking everything and want a more hands-off approach. Below are a
        couple of diet models that you may find fit you more than counting
        calories.
      </p>
      <ul>
        <li>
          <p>
            <a href="https://www.healthline.com/nutrition/intermittent-fasting-and-weight-loss">
              <span>Intermittent fasting</span>
            </a>{" "}
            is a diet model where you restrict your eating time to a few
            specific hours every day. For example, you may have your "feeding
            window" be for 8 hours from 7am to 3pm. Within that time, you can
            eat whatever you want, though it's highly recommended you do your
            best to eat "healthy" foods over junk foods. Outside of that time,
            you're not allowed to eat. This diet model can help some people
            reach a calorie deficit.
          </p>
        </li>
        <li>
          <p>
            {" "}
            <a href="https://www.healthline.com/nutrition/ketogenic-diet-101">
              <span>The keto diet</span>
            </a>{" "}
            is a diet model where you restict your carb intake to almost nothing
            and instead consume mostly protiens and fats. Note that many people
            cite ketosis (a metabolic state where your body primarily burns fat
            as energy over carbs) as the driving factor of weight loss from this
            diet model. However, ketosis doesn't really do much, and as always
            people who are successful with keto have just succesfully created
            calorie deficits.
          </p>
        </li>
        <li>
          <p>
            <a href="https://www.healthline.com/nutrition/carb-cycling-101">
              <span>Carb Cycling</span>
            </a>{" "}
            is a diet model where you restrict your carbohydrate intake on
            alternating days. This can help you obtain a net weekly calorie
            deficit.
          </p>
        </li>
      </ul>

      <p>
        Remember, neither of these diet models do anything "magical", no matter
        what people may tell you. They work for some people, and they don't work
        for others. This is because some people can create a calorie deficit
        with these diet models, while others cannot.{" "}
      </p>
    </div>
  );
}
