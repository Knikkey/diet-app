import Divider from "../../components/divider/Divider";

import styles from "./styles/Basics.module.css";

export default function Basics({ id }) {
  return (
    <div id={id} className={styles.basics}>
      <p className={styles.test}>
        Weight loss is a simple formula of calories in, calories out, otherwise
        known as CICO. You may have heard this before, and you may have also
        heard that it's not true. Let's take a quick look at whether it is
        indeed true or not. <br></br>First, we need to understand what a calorie
        is. A calorie is a measurement of energy, just like how a gram is a
        measurement of weight. To be more specific, a calorie is the amount of
        energy required to increase the temperature of 1 gram of water by 1
        degree. That means when we’re talking about calories from food, we’re
        talking about how much energy we get from eating that food. <br></br>So,
        what does that mean? Well, considering the following facts: <br></br>1.
        Our bodies use energy to do things. <br></br>2. Energy cannot be created
        or destroyed; only transferred That means if Billy consumes a pizza of
        3,000 calories, but only uses 2,000 calories, the excess 1,000 doesn’t
        just disappear. Rather, our bodies store it for later use for
        survivability purposes. Our bodies store excess energy as fat, and fat
        has weight. Alternatively, if Billy consumes a pizza of 2,000 calories,
        but uses 3,000 calories, the 1,000 doesn’t just appear. Billy will get
        the energy from breaking down part of his own body, usually fat, which
        mean that fat gets used up or “burned” away for energy. <br></br>
        Therefore, calories in, calories out, is in fact, true. <br></br>Easy,
        right? Not quite. The CICO formula is simple, but determining the CI and
        CO of the formula is not. Don’t worry, we’ll walk you through it. Let’s
        start with the CI part.
      </p>
      <Divider color="emerald" />
    </div>
  );
}
