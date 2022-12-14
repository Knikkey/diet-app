import styles from "./styles/Answers.module.css";

export default function Answer6() {
  return (
    <div className={styles.answer}>
      <p>
        Your eagerness to lose weight ASAP is totally understandable. While you
        can create a large calorie deficit to lose a lot of weight quickly, you
        need to be aware of the trade-offs.
      </p>
      <ul>
        <li>
          The deeper your deficit, the more likely you'll lose muscle along with
          body fat. This can cause your body composition to remain the same,
          despite losing a lot of weight. In other words, you'll look the same,
          but a bit smaller. The reason for this is breaking down body fat takes
          time, and your body might not be able to break it down fast enough to
          get the energy it needs if the calorie deficit is too large. In this
          case, your body may start to break down muscle tissue simultaneously
          to make up for it.{" "}
        </li>
        <li>
          The chances of rebound (gaining your lost weight back) could be rather
          high. If you lose weight too quickly, you likely haven't ironed out
          the bad eating habits that you to be overweight in the first place.
          Thus, you'll likely revert to your old habits and eventually gain all
          that lost weight back again.
        </li>
        <li>
          Being in a large deficit feels awful. Fatigue and brain fog may become
          part of your daily life, causing your quality of life to drop.
        </li>
      </ul>
      <p>
        If you're interested in trying to go with this kind of aggressive weight
        loss phase, I recommend this{" "}
        <a href="https://www.youtube.com/watch?v=mzqLgqfxxqo">
          video by Eugene Teo
        </a>{" "}
        about how he aggressively cuts down to 1,000 calories a day.
      </p>
    </div>
  );
}
