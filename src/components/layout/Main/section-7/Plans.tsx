import { useState } from "react";
import Button from "../../../ui/Button/Button";
import Box from "../../../ui/Card/Box-Heading/Box";
import { pageData } from "../../../ui/Card/Box-Heading/dataBox";
import Heading from "../../../ui/Card/Box-Heading/Heading";
import { DataPlans } from "./dataPlans";
import styles from "./Plans.module.scss";
import { RiCheckboxCircleLine } from "@remixicon/react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
const Plans = () => {
  const [containerRef, isVisible] = useScrollAnimation(); // نستخرج كائن الـ plans المباشر
  const { plans } = pageData;
  const [checkedPlans, setCheckedPlans] = useState<Record<string, boolean>>({});

  const togglePlan = (planTitle: string) => {
    setCheckedPlans((prev) => ({
      ...prev,
      [planTitle]: !prev[planTitle],
    }));
  };

  return (
    <section className={styles.plans}>
      <div
        ref={containerRef}
        className={`${styles["plans_container"]} ${isVisible ? styles.visible : ""}`}>
        <Box {...plans} />
        <Heading {...plans} />
        <div className={`${styles["plans_card"]}`}>
          {DataPlans.map(
            ({ id, type, name, price, discount, desc, features, currency }) => {
              const isYearly = !!checkedPlans[name];
              return (
                <div
                  key={id}
                  className={`${styles["price-card"]} ${styles[type.toLowerCase()]}`}>
                  <div className={styles.top}>
                    <div className={styles.title}>
                      <div className={styles["title_right"]}>
                        <span data-plans>{name}</span>
                        {/* {type == "Premium" && ( */}
                        <>
                          <span data-break>|</span>
                          <div
                            style={{                           
                              overflow: "hidden",
                            }}>
                              <span className={`${styles["data-popular"]} ${isYearly ? styles.active : ""}`}
                                data-popular="Grup">
                                öznel
                              </span>
                          </div>
                        </>
                      </div>

                      <div className={styles["title_left"]}>
                        <div className={styles["check-box"]}>
                          <label className={styles.switch}>
                            <input
                              checked={isYearly}
                              onChange={() => togglePlan(name)}
                              type="checkbox"
                            />
                            <span className="slider round"></span>
                          </label>
                          <p>Ayilk</p>
                        </div>
                      </div>
                    </div>
                    {/* price */}
                    <div
                      className={`${styles["price-components"]} ${isYearly ? styles.yearly : ""}`}>
                      <div className={styles["price-wrapper"]}>
                        {/* عرض السعر الأصلي مع العملة ديناميكياً */}
                        <span data-price={`${discount} ${currency}`}>
                          {price} {currency}
                        </span>
                      </div>

                      <p className={styles["price-period"]}>/ Aylık</p>
                    </div>
                    <div className={styles["price_desc"]}>
                      <p>{desc}</p>{" "}
                    </div>
                  </div>
                  {/* dashed */}
                  <div className={styles.dashed}></div>
                  {/* Middle */}
                  <div className={styles.middle}>
                    <p data-features>Özellikler</p>
                    <div className={styles.features}>
                      {features.map((ele, i) => (
                        <div key={i} className={styles["features-card"]}>
                          <RiCheckboxCircleLine />
                          <p>{ele}</p>
                          {/* <p>ayda 4 seans</p> */}
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* dashed */}
                  <div className={styles.dashed}></div>
                  {/* btn */}
                  {type === "Premium" ? (
                    <Button
                      arrow={true}
                      variant="black"
                      style={{
                        justifyContent: "space-between",
                        borderRadius: "var(--border-radius-md)",
                      }}>
                      Şimdi kayıt olun
                    </Button>
                  ) : (
                    <Button
                      arrow={true}
                      style={{
                        justifyContent: "space-between",
                        borderRadius: "var(--border-radius-md)",
                      }}>
                      Şimdi kayıt olun
                    </Button>
                  )}
                </div>
              );
            },
          )}
        </div>
      </div>
    </section>
  );
};

export default Plans;
