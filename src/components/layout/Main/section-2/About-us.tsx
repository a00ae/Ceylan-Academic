import { memo } from "react";
import styles from "./About-us.module.scss";
import Box from "@/components/ui/Card/Box-Heading/Box";
import { pageData } from "@/components/ui/Card/Box-Heading/dataBox";
import Heading from "@/components/ui/Card/Box-Heading/Heading";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import ceylanDil from "@/assets/about-us/about-us-ceylan-dil.webp";
import { RiPlayCircleFill, RiPlayCircleLine } from "@remixicon/react";

type Props = {};

const AboutUs = (props: Props) => {
  const { aboutUs } = pageData;
  const [ref, isVisible] = useScrollAnimation();
  return (
    <section className={styles["about-us"]}>
      <div ref={ref} className={`${styles["about-us_container"]} ${isVisible ? styles.visible : ""}`}>
        <Box {...aboutUs} />
        <div
          className={`${styles["about-us_title"]}`}>
          <Heading  {...aboutUs}  />
          <div className={`${styles["about-us_title_desc"]}`}>
            <p>
              Birçok öğrencinin dil becerilerini geliştirmesine yardımcı olduk.
              Öğretmenlerimizin de on yılı aşkın öğretmenlik deneyimi
              bulunmaktadır.
            </p>
          </div>
        </div>
        <div className={styles["about-us_video"]}>
          <img src={ceylanDil} alt="" />
          <div className={styles["about-us_video_play"]}>
            <RiPlayCircleFill  className={styles["play-icon"]} />
          </div>

        </div>
      </div>
    </section>
  );
};

export default memo(AboutUs);
