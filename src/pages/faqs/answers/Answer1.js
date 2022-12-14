import styles from "./styles/Answers.module.css";

export default function Answer1() {
  return (
    <div className={styles.answer}>
      <p>
        Hunger is unfortunately a normal part of losing weight, but there are a
        few ways you can combat it:
      </p>
      <ul>
        <li>
          Avoid calorie-dense foods. These are foods that are high in calories
          but low in volume. Eating these kinds of foods will result in high
          calorie intake but won't satisfy your hunger. Ice cream is an example
          of this. You can easily eat 2,000 calories of ice cream and not feel
          full at all... though you might end up with a stomach ache.
        </li>
        <li>
          Reach for foods with a low calorie density. These are foods that you
          can eat a lot of without consuming too many calories. Broccoli or
          chicken breasts are some examples. Foods that are high in protien and
          fiber are typically good choices.
        </li>
        <li>
          Don't drink your calories. This is huge. Sugary drinks like smoothies,
          juices, and sodas pack a lot of calories but don't keep you full at
          all.
        </li>
      </ul>
      <p>
        These days, people have been getting really creative in the kitchen.
        There are a ton of "normal" recipes that have been adopted to be
        diet-friendly. Below are some links to a few of them.
      </p>
      <ul>
        <li>
          <a href="https://www.reddit.com/r/Volumeeating/">
            Reddit r/volumeeating
          </a>
          : People are constatly posting foods and recipes here that are high
          volume and low calorie. A personal favorite would be{" "}
          <a href="https://www.reddit.com/r/Volumeeating/comments/tplrx4/made_uboo9817_s_famous_ridiculous_brownies_today/">
            Boo's Ridiculous Brownies
          </a>
          .
        </li>
        <li>
          YouTube is a goldmine for great diet recipes. Below are some very
          tasty ones ones:
          <ul>
            <li>
              <a href="https://www.youtube.com/watch?v=1U7QQjiYsQg&t=326s">
                Mina Ayoub's chickpea pasta recipe
              </a>{" "}
            </li>
            <li>
              <a href="https://www.youtube.com/watch?v=dqR6HhYrGnM">
                Buff Dude's broccoli pizza recipe
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/watch?v=ZXZMqN3ONII&t=149s">
                Will Tennyson's low calorie food hack recipes
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/watch?v=z-p84S56h3U">
                Greg Doucette's French toast recipe
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/watch?v=RcNcHzGNBW8&list=PL2HcFHvU0LOOs-iy1ykdwKubGEazugloT&index=4&t=76s">
                Nicko's keto KFC fried chicken recipe
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
