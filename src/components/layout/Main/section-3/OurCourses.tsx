import Box from "@/components/ui/Card/Box-Heading/Box";
import styles from "./Our-courses.module.scss";
import { pageData } from "@/components/ui/Card/Box-Heading/dataBox";
import Heading from "@/components/ui/Card/Box-Heading/Heading";
import Button from "@/components/ui/Button/Button";
import { dataCard } from "./dataCard";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const OurCourses = () => {
  const { ourCourses } = pageData;
  const [ref, isVisible] = useScrollAnimation();
  return (
    <section className={styles["our-courses"]}>
      <div ref={ref} className={`${styles["our-courses_container"]} ${isVisible ? styles.visible :""}`}>
        <Box {...ourCourses} />

        <div className={styles["our-courses_title-box"]}>
          <div className={styles["right"]}>
            <Heading {...ourCourses} />
            <p>
              Her yaş grubuna yönelik kapsamlı bir bilimsel deneyim sunuyoruz.
            </p>
          </div>
          <div className={styles["left"]}>
            <Button
              variant="outline"
              children="daha fazlasını keşfedin"
              arrow
              style={{
                borderColor: "var(--text-color-grey)"
              }}
            />
          </div>
        </div>

        <div className={`${styles["our-courses_card"]} ${isVisible ? styles.visible : ""}`}>
          {dataCard.map((card) => (
            <div key={card.id} className={styles["item-card"]}>
              <div className={styles["card-img"]}>
                <img src={card.img} alt={card.desc} />
              </div>
              <div className={styles["card-descrapthion"]}>
                <h3>{card.title}</h3>
                <p>Lorem ipsum dolor sit amet consectetur</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurCourses;
