import Divider from "../../components/divider/Divider";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Slide2 from "./Slide2";

import styles from "./styles/Basics.module.css";

export default function Basics({ id }) {
  return (
    <div id={id} className={styles.basics}>
      <DndProvider backend={HTML5Backend}>
        <Slide2 />
      </DndProvider>

      <Divider color="emerald" />
    </div>
  );
}
