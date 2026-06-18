import Box from "@/components/ui/Card/Box-Heading/Box";
import styles from "./Our-courses.module.scss";
import { pageData } from "@/components/ui/Card/Box-Heading/dataBox";
import Heading from "@/components/ui/Card/Box-Heading/Heading";

const OurCourses = () => {
  const { ourCourses } = pageData;
  return (
    <section className={styles["our-courses"]}>
      <div className={styles["our-coursrs_container"]}>
        <Box {...ourCourses} />

        <div className={styles["our-coursrs_title_box"]}>
          <div className={styles["right"]}>
            <Heading {...ourCourses} />
            <p></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurCourses;
