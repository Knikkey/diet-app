import styles from "./styles/Answers.module.css";

export default function Answer3() {
  return (
    <div className={styles.answer}>
      <p>
        No, but calories are likely the most important variable that we can
        control since in the end, you won't lose weight if you're not in a
        calorie deficit. Here are a few other points that also matter:
      </p>
      <ul>
        <li>
          Macronutrients: carbohydrates, proteins, and fats. They contain
          approximately 4, 4, and 9 calories respectively. The ratio that you
          consume them in depends on a variety of things. They each play many
          roles in our bodies, but we'll oversimplify their roles like this:
        </li>
        <ul>
          <li>
            Carbohydrates are used for quick energy. Bread, rice, and sugars are
            typical examples of carb sources.
          </li>
          <li>
            Protiens are used for maintaining and building muscle. Meats, fish,
            and beans are typical examples of protein sources
          </li>
          <li>
            Fats are used for sustained slow energy and affect brain function
            and hormones. Fish, nuts, and oils are ypical sources of fats.
          </li>
        </ul>
        <li>
          Stress and sleep are very important. They not only affect hormones,
          but can also hinder your weight loss in seemingly obvious ways. For
          example, many people stress eat. Also, if you sleep for 8 hours a
          night, that's 8 hours you aren't hungry or eating. You'll likely have
          a much easier time with your diet than someone who only sleeps for 4
          hours a night and thus has 4 more hours a day of possible hunger or
          eating.
        </li>
      </ul>
    </div>
  );
}
