import { pageData } from "@/components/ui/Card/Box-Heading/dataBox";
import styles from "./Course-type.module.scss";
import img from "@/assets/about-us/about-us-ceylan-dil.webp";
import Box from "@/components/ui/Card/Box-Heading/Box";
import Heading from "@/components/ui/Card/Box-Heading/Heading";
import { RiArrowUpSLine } from "@remixicon/react";
import { useState } from "react";
import { ASK_DATA } from "./dataAsk";

type Props = {
  id: number;
  active: boolean;
};

const CourseType = () => {
  const { courseType } = pageData;
  const [isActive, setIsActive] = useState<Props | null>(null);
  const handleAccordion = ({ id, active }: Props) => {
    setIsActive({ id: id, active: !active });
  };
  return (
    <section className={styles["course-type"]}>
      <div className={styles["course-type_container"]}>
        <div className={styles["course-type_left"]}>
          <p>(0{isActive === null ?  "1" : isActive?.id })</p>
          <div className={styles.ig}>
            <img src={img} alt="" />
          </div>
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
          <div className={styles["course-type_right_bottom"]}>
            {ASK_DATA.map(({ id, description, title }) => {
              return (
                <div
                  key={id}
                  onClick={() =>
                    handleAccordion({
                      id,
                      active: isActive?.id === id ? isActive.active : false,
                    })
                  }
                  className={`${styles["ask_accordion"]} ${isActive?.id === id && isActive.active ? styles.active : ""}`}>
                  {/* top */}
                  <div className={styles["ask_accordion_top"]}>
                    <span>{title}</span>
                    <div className={styles["arrow-up"]}>
                      <RiArrowUpSLine />
                    </div>
                  </div>
                  {/* bottom */}
                  <div className={styles["details-wrapper"]}>
                    <div className={styles["details-wrapper_inner"]}>
                      <p>{description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseType;
