
import Button from "@/components/ui/Button/Button";
import styles from "./contact-us.module.scss";

type Props = {};

const Contactus = (props: Props) => {
  return (
    <div className={styles["contact-us"]}>
      <div className={styles["contact-us_container"]}>
        <h2>Bizden En Son Bilgilerle Güncel Kalın!</h2>
        <div className={styles["box-email"]}>
            <div className={styles["input-box"]}>
            <input type="text" placeholder="e-postanı gir"/>

            </div>
            <Button style={{padding: "4px 20px", borderRadius: "calc(var(--border-radius-input-box) - 5px)"}} variant="white"> Gönder</Button>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
