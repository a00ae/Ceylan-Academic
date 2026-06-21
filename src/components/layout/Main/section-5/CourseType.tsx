import { pageData } from "@/components/ui/Card/Box-Heading/dataBox";
import styles from "./Course-type.module.scss";
import img from "@/assets/about-us/about-us-ceylan-dil.webp";
import Box from "@/components/ui/Card/Box-Heading/Box";
import Heading from "@/components/ui/Card/Box-Heading/Heading";

type Props = {};

const CourseType = () => {
  const { courseType } = pageData;
  return (
    <section className={styles["course-type"]}>
      <div className={styles["course-type_container"]}>
        <div className={styles["course-type_left"]}>
          <img src={img} alt="" />
        </div>
        <div className={styles["course-type_right"]}>
          <div className={styles["course-type_right_top"]}>
            <Box {...courseType} />
            <Heading {...courseType} />
            <p>
              Bu ifade, dili keşif, iletişim ve kültürel zenginleşme aracı
              olarak görme fikrini somutlaştırıyor.
            </p>
          </div>
          {/* bottom */}
          <div className={styles["course-type_right_bottom"]}></div>
        </div>
      </div>
    </section>
  );
};

export default CourseType;
