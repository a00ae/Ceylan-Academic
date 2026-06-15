// import { SERVICE_IMAGES } from "";
// import { SERVICE_IMAGES } from "@/assets/service/imges";
import ceylan from "@/assets/service/dil.drawio.svg";
import ig from "@/assets/service/ig.drawio.svg";
import { BentoGrid } from "../../../ui/Card/BentoGrid";
import styles from "./Service.module.scss";

const Service = () => {
  return (
    <section className={styles["service"]}>
      <div className={styles["service_container"]}>
        <div className={styles["service_text-desc"]}>
          <h2>Ceylan ile — dili öğrenin</h2>
          <p>
            Şimdi kaydolun ve tüm seviyelerdeki tüm dil kurslarında{" "}
            <span>%50 indirim kazanın. </span>
          </p>
        </div>
        <div className={styles["service_img"]}>
          <div className={styles["service_img_box-img"]}>
            <div className={styles["container_img"]}>
              <div className={styles["ceylan-dil"]}>
                <img className={styles["ceylan"]} src={ceylan} alt="dil kurs" />
                <img className={styles["ig"]} src={ig} alt="dil kurs" />
              </div>
              {/* <div className={styles["dil"]}>
                <img
                  className={styles["ar-primary"]}
                  draggable={false}
                  src={SERVICE_IMAGES.ar.primary}
                  alt="Arapça öğrenin"
                />
                <img
                  className={styles["ar-secondary"]}
                  draggable={false}
                  src={SERVICE_IMAGES.ar.secondary}
                  alt="Arapça öğrenin"
                />
                <img
                  className={styles["en-secondary"]}
                  draggable={false}
                  src={SERVICE_IMAGES.en.secondary}
                  alt="Arapça öğrenin"
                />
                <img
                  className={styles["en-primary"]}
                  draggable={false}
                  src={SERVICE_IMAGES.en.primary}
                  alt="Arapça öğrenin"
                />
                <img
                  className={styles["fr-secondary"]}
                  draggable={false}
                  src={SERVICE_IMAGES.fr.secondary}
                  alt="Arapça öğrenin"
                />
                <img
                  className={styles["fr-primary"]}
                  draggable={false}
                  src={SERVICE_IMAGES.fr.primary}
                  alt="Arapça öğrenin"
                />
              </div> */}
            </div>
          </div>
          <div className={styles["service_img_specifications"]}>
            <div className={styles["service_specifications-desc"]}>
              Küresel iletişim ve mesleki gelişim için Arapça, İngilizce ve
              Fransızca'nın temellerini öğrenin.
            </div>
            <BentoGrid />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
