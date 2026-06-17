import Box from "@/components/ui/Card/Box";
import styles from "./Curriculum.module.scss";
import { pageData } from "@/components/ui/Card/dataBox";
import Heading from "@/components/ui/Card/Heading";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
type Props = {};

const Curriculum = (props: Props) => {
    const [currentRef, isVisible] = useScrollAnimation();
  const { curriculum } = pageData;
  return (
    <section className={styles["curriculum"]}>
      <div ref={currentRef} className={styles["curriculum_container"]}>
        <Box {...curriculum} />
        <Heading isAnimation {...curriculum} animate={isVisible}/>
      </div>
    </section>
  );
};

export default Curriculum;
