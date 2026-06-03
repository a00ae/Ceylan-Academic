import styles from "./Service.module.scss";
import ArbiacLanguage from "../../../../assets/service/language-ar.png";
import Button from "../../../ui/Button/Button";
import { RiArrowRightUpLine } from "@remixicon/react";

const Service = () => {
  return (
    <section className={styles["service"]}>
      <div className={styles["service_container"]}>
        <div className={styles["service_text-desc"]}>
          <h2>Arapça öğrenin</h2>
          <p>
            Şimdi kayıt olun ve her seviyedeki Arapça dil kurslarında %50
            indirimden yararlanın.
          </p>
          <a href="#">
            <Button style={{ display: "flex", alignItems: "center" }}>
              <span style={{ flex: 1 }}>Şimdi başla</span>{" "}
              <RiArrowRightUpLine />
            </Button>
          </a>
        </div>
        <div className={styles["service_img"]}>
          <img draggable={false} src={ArbiacLanguage} alt="Arapça öğrenin" />
        </div>
      </div>
    </section>
  );
};

export default Service;
