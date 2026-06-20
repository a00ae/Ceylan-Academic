import styles from "./Why-choose-us.module.scss";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
type Props = {};

const WhyChooseUs = (props: Props) => {
  const [ref, isVisible] = useScrollAnimation();
  return (
    <section className={styles["why-choose-us"]}>
      <div
      ref={ref}
        className={`${styles["why-choose-us_container"]} ${isVisible ? styles.visible : ""}`}>
            
        </div>
    </section>
  );
};

export default WhyChooseUs;
