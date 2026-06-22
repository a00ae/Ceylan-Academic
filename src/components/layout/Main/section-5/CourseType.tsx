import { pageData } from "@/components/ui/Card/Box-Heading/dataBox";
import styles from "./Course-type.module.scss";
import img from "@/assets/about-us/about-us-ceylan-dil.webp";
import Box from "@/components/ui/Card/Box-Heading/Box";
import Heading from "@/components/ui/Card/Box-Heading/Heading";
import { RiArrowUpSLine } from "@remixicon/react";
import { useState } from "react";
import { ASK_DATA } from "./dataAsk";
import { indexImg } from "@/assets/our-courses/img";

type Props = {
  id: number;
  img: string;
  active: boolean;
};

const CourseType = () => {
  const { courseType } = pageData;
  const [isActive, setIsActive] = useState<Props | null>(null);
  const handleAccordion = ({ id, active, img }: Props) => {
    setIsActive({ id: id, active: !active, img: img });
  };
  const activeAccordion: boolean = isActive == null || isActive?.active  === false;
  return (
    <section className={styles["course-type"]}>
      <div className={styles["course-type_container"]}>
        <div className={styles["course-type_left"]}>
          <p>(0{activeAccordion  ?  "1" : isActive?.id })</p>
          <div className={styles.ig}>
            <img src={activeAccordion ? indexImg[0] : isActive?.img} alt="" />
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
            {ASK_DATA.map(({ id, description, title, img }) => {
              return (
                <div
                  key={id}
                  onClick={() =>
                    handleAccordion({
                      id,
                      img,
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
