import Box from "@/components/ui/Card/Box-Heading/Box";
import styles from "./Our-courses.module.scss";
import { pageData } from "@/components/ui/Card/Box-Heading/dataBox";
import Heading from "@/components/ui/Card/Box-Heading/Heading";
import Button from "@/components/ui/Button/Button";

const OurCourses = () => {
  const { ourCourses } = pageData;
  return (
    <section className={styles["our-courses"]}>
      <div className={styles["our-courses_container"]}>
        <Box {...ourCourses} />

        <div className={styles["our-courses_title-box"]}>
          <div className={styles["right"]}>
            <Heading {...ourCourses} />
            <p>Her yaş grubuna yönelik kapsamlı bir bilimsel deneyim sunuyoruz.</p>
          </div>
          <div className={styles["left"]}>
          <Button variant="outline" children="daha fazlasını keşfedin" arrow/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurCourses;
