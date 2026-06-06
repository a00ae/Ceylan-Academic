import styles from "./Service.module.scss";
import ArbiacLanguage from "../../../../assets/service/language-ar-1.png";
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
          <div className={styles["service_img_specifications"]}>
            <div className={styles["service_specifications-desc"]}>
              Küresel iletişim ve kariyerinizde ilerlemek için Arapçanın
              temellerini öğrenin.
            </div>
            <BentoGrid />

          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
