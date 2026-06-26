import Button from "@/components/ui/Button/Button";
import styles from "./contact-us.module.scss";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

type Props = {};

const Contactus = (props: Props) => {
  const [ref, isVisible] = useScrollAnimation();
  return (
    <div className={styles["contact-us"]}>
      <div
        ref={ref}
        className={`${styles["contact-us_container"]} ${isVisible ? styles.visible : ""}`}>
        <h2
          className={`${styles["heading"]} ${isVisible ? styles.visible : ""}`}>
          {"Bizden En Son Bilgilerle Güncel Kalın!".split(" ").map((ele) => (
            <span>{ele}</span>
          ))}
        </h2>
        <div className={styles["box-email"]}>
          <div className={styles["input-box"]}>
            <input type="text" placeholder="e-postanı gir" />
          </div>
          <Button
            style={{
              padding: "4px 20px",
              borderRadius: "calc(var(--border-radius-input-box) - 5px)",
            }}
            variant="white">
            Gönder
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
