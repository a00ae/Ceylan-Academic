import styles from "./Service.module.scss";
import ArbiacLanguage from "../../../../assets/service/language-ar-1.png";
import Button from "../../../ui/Button/Button";
import { RiArrowRightUpLine } from "@remixicon/react";
import { BentoGrid } from "../../../ui/Card/BentoGrid";

const Service = () => {
  return (
    <section className={styles["service"]}>
      <div className={styles["service_container"]}>
        <div className={styles["service_text-desc"]}>
          <h2>Arapça — öğrenin</h2>
          <p>
            - Şimdi kayıt olun ve her seviyedeki Arapça dil kurslarında{" "}
            <span>%50 indirimden yararlanın. </span>
          </p>
        </div>
        <div className={styles["service_img"]}>
          <div className={styles["service_img_box-img"]}>
            <img draggable={false} src={ArbiacLanguage} alt="Arapça öğrenin" />
          </div>
          <div className={styles["service_specifications"]}>
            <p>
              Küresel iletişim ve kariyerinizde ilerlemek için Arapçanın
              temellerini öğrenin.
            </p>
            <BentoGrid />
            <a href="#">
              <Button style={{ display: "flex", alignItems: "center" }}>
                <span style={{ flex: 1 }}>Şimdi başla</span>{" "}
                <RiArrowRightUpLine />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
