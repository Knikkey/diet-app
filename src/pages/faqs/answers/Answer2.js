import styles from "./styles/Answers.module.css";

export default function Answer2() {
  return (
    <div className={styles.answer}>
      <p>
        To lose weight, you don't need to exercise at all. However, exercise
        offers many benefits and it's highly recommended that you do some form
        of exercise. Some benefits of exercise are listed below:
      </p>
      <ul>
        <li>
          Your body will primarily break down fat to make up the difference of
          your calorie deficit, but it will also break down muscle if those
          muscles aren't being used. After all, muscles require calories. If you
          have less muscle, your body uses less calories. Therefore, removing
          unused muscle is like a two-birds-one-stone deal from a survival
          standpoint. If you're losing muslce and fat at the same time, you will
          indeed become lighter, but you might not look too different
          aesthetically. If you want to look different, exercising will limit
          the amount of muscle lost during your weight loss journey.{" "}
        </li>
        <li>
          Exercising raises your calorie output, meaning you may be able to
          raise your calorie intake while still maintaining a calorie deficit.
        </li>
        <li>
          If you're trying to lose weight, it's likely you want to improve your
          quality of life. Exercise does that in a number of ways.
        </li>
      </ul>
    </div>
  );
}
