// import { SERVICE_IMAGES } from "";
// import { SERVICE_IMAGES } from "@/assets/service/imges";
import Button from "@/components/ui/Button/Button";
import styles from "./Service.module.scss";
import type { BtnService } from "./gridData";

const HERO_BUTTONS: BtnService[] = [
  {
    id: "explore",
    text: "Daha fazlasını keşfedin",
    variant: "outline" as const,
  },
  { id: "start", text: "Başlayın", variant: "black" as const },
];
const Service = () => {
  return (
    <section className={styles["service"]}>
      <div className={styles["service_container"]}>
        <div className={styles["service_top-title"]}>
          <span>Şimdi katılın ve indirimden yararlanın.</span>
          {/* <svg
            viewBox="0 0 100 100" // لوحة رسم افتراضية ثابتة النسب
            preserveAspectRatio="none" // إجبار الـ SVG على التمدد ليمط نفسه تماماً حسب حجم النص الأب
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              pointerEvents: "none",
              left: 0,
              top: 0,
            }}>
            <rect
              className={styles["bg-line"]}
   
    
            />
            <rect
              className={styles["animated-line"]}
  
            />
          </svg> */}
        </div>
        <div className={styles["service_heading-large"]}>
          <h2>Birden fazla dil öğrenmenin avantajları</h2>
        </div>
        <div className={styles["service_description"]}>
          <p>
            Küresel iletişim ve mesleki gelişim için Arapça, İngilizce ve
            Fransızca'nın temellerini öğrenin.
          </p>
        </div>
        <div className={styles["service_btn"]}>
          {HERO_BUTTONS.map(({ id, text, variant }) => (
            <Button
              key={id}
              variant={variant}
              style={{
                padding: "var(--space-xs) var(--space-sm)",
                borderRadius: "var(--border-radius-md)",
              }}>
              {text}
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
