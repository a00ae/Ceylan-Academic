import {
  RiFacebookCircleLine,
  RiInstagramLine,
  RiMapPinLine,
  RiSendInsLine,
  RiTiktokFill,
  RiWhatsappLine,
} from "@remixicon/react";
import LesilingoLogo from "../Header/LesilingoLogo";
import styles from "./footer.module.scss";
import { moreInformation } from ".";
import type React from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

type Address = {
  svg: React.ReactNode;
  city: string;
};

const socilElemnt: React.ReactNode[] = [
  <RiFacebookCircleLine />,
  <RiInstagramLine />,
  <RiWhatsappLine />,
  <RiTiktokFill />,
];

const emailAddress: Address[] = [
  {
    svg: <RiSendInsLine />,
    city: "destek@ceylan.com",
  },
  {
    svg: <RiMapPinLine />,
    city: "Konya, Türkiye - Mevlana",
  },
];

const Footer = () => {
  const [ref, isVisible] = useScrollAnimation();
  return (
    <footer className={styles["footer"]}>
      <div ref={ref} className={`${styles["footer_container"]} ${isVisible ? styles.visible : ""}`}>
        <div className={`${styles["footer_side-left"]} ${isVisible ? styles.visible : ""}`}>
          {/* top */}
          <div className={styles["logo-top"]}>
            <div className={styles["logo"]}>
              <LesilingoLogo />
              <span className={styles["main-logo"]}>ceylan</span>
            </div>
            <div className={styles["description"]}>
              <p>
                Bu uygulama, öğrencilerin yeni beceri ve bilgileri keyifli ve
                etkileşimli bir şekilde edinmelerine yardımcı olarak, öğrenmeyi
                eğlenceli ve etkili hale getirmeyi amaçlamaktadır.
              </p>
            </div>
          </div>
          {/* bottom */}
          <div className={styles["media-bottom"]}>
            {emailAddress.map(({ city, svg }) => (
                <div key={city} className={styles["box-mail"]}>
              <div className={styles["addess"]}>
                {svg}
                <div className={styles["mail"]}>{city}</div>
              </div>
                </div>
            ))}
          </div>
        </div>
        {/* right */}
        <div className={styles["footer_side-right"]}>
          {/* right Top Mune */}
          <div className={styles["top-mune"]}>
            {moreInformation.map((item) => (
              <ul key={item.titleName}>
                <li data-title>{item.titleName}</li>
                {item.muneName.map((ele) => (
                  <li data-item key={ele}>
                    <span data-span-item={ele}>
                      {ele !== "ana sayfa" ? ele : "Ana sayfa"}
                    </span>
                  </li>
                ))}
              </ul>
            ))}
          </div>
          {/* right Bottom Social */}
          <div className={styles["bottom-socil-media"]}>
            <span className={styles["title"]}>Socil Media</span>
            <ul className={styles["icons"]}>
              {socilElemnt.map((ele, i) => (
                <li key={i}>{ele}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
