// import { SERVICE_IMAGES } from "";
// import { SERVICE_IMAGES } from "@/assets/service/imges";
import Button from "@/components/ui/Button/Button";
import styles from "./Service.module.scss";
import { CARD_SERVICE, type BtnService } from "./gridData";

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
        {CARD_SERVICE.map((item, index) => (
          <div
            key={item.id}
            style={{ "--item-index": index } as React.CSSProperties}
            className={`${styles[`service_item_${item.type}`]} ${styles[item.animation]}`}>
            {item.type == "top-title" && (
              <>
                <span>Şimdi katılın ve indirimden yararlanın.</span>
              </>
            )}
            {item.type == "heading-large" && (
              <>
                <h2>Birden fazla dil öğrenmenin avantajları</h2>
              </>
            )}
            {item.type == "description" && (
              <>
                <p>
                  Küresel iletişim ve mesleki gelişim için Arapça, İngilizce ve
                  Fransızca'nın temellerini öğrenin.
                </p>
              </>
            )}
            {item.type == "btn" && (
              <>
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
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Service;
