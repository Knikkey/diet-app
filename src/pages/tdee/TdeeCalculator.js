import { useState, useRef, useContext } from "react";
import { ValuesContext } from "../../context/ValuesContext";

import styles from "./styles/TdeeCalculator.module.css";

export default function TdeeCalculator() {
  const [lightCardio, setLightCardio] = useState(null);
  const [hardCardio, setHeavyCardio] = useState(null);

  const { bmrState, tdeeState, settdeeState } = useContext(ValuesContext);

  const neat = bmrState * 1.13;
  const burnLightCardio = lightCardio * 200;
  const burnHardCardio = hardCardio * 700;

  return <div>TdeeCalculator</div>;
}
