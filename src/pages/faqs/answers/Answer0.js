import styles from "./styles/Answers.module.css";

export default function Answer0() {
  return (
    <div className={styles.answer}>
      <p>
        CICO is not a lie, no matter how much we may want to believe it is. If
        you're not losing weight, there are only two possible reasons why this
        is happening: Your calorie intake is actually higher than you think it
        is or your calorie output is actually lower than you think it is.
      </p>

      <p>
        Miscounting calorie intake is the first place you should look if you're
        not losing weight. Here are a few things you can try:
      </p>
      <ul>
        <li>
          Don't guess calories. Some foods are shockingly high in calories.
          Always look up foods to get a general idea of how many calories
          something might be.
        </li>
        <li>
          Make sure that your portionings are correct by weighing your food.
          Looking at peanut butter as an example, the nutrition label might say
          2 tbsp is equal to 180 calories. However, on that label, 2 tbsp might
          be defined as 32 grams. <span>Your</span> two tbsp may very well be as
          much as double that if you're not weighing your food!
        </li>
        <li>
          Make sure you count <span>all</span> of the food you're consuming.
          Sauces, oils and dressings are common things people overlook, though
          they actually account for a ton of "missing" calories.
        </li>
        <li>
          Because of how the FDA works in terms of rounding, food labels can be
          ~20% inaccurate. If you've tried the previous two tips and aren't
          seeing progress, assume what you're eating has more calories than it
          says it does.
        </li>
      </ul>
      <p>
        In regards to miscounting calorie output, there's much less we can do.
        Hormones, stress, and a number of other things that are out of our
        control can cause us to burn less calories than we'd expect. Here are a
        couple of things you can keep in mind:
      </p>
      <ul>
        <li>
          Your BMR and TDEE are <span>estimates</span>. Don't take them as hard
          numbers and be prepared to adjust accordingly.
        </li>
        <li>
          Try to keep your activity levels consistent. A popular method for this
          is to use a step tracker to make sure you walk a certain number of
          steps daily. At least 5,000 steps daily is a common goal.
        </li>
      </ul>
    </div>
  );
}
