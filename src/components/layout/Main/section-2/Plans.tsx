import { useState } from "react";
import Button from "../../../ui/Button/Button";
import Box from "../../../ui/Card/Box";
import { pageData } from "../../../ui/Card/dataBox";
import Heading from "../../../ui/Card/Heading";
import { DataPlans } from "./dataPlans";
import styles from "./Plans.module.scss";
import { RiCheckboxCircleLine } from "@remixicon/react";

const Plans = () => {
  // نستخرج كائن الـ plans المباشر
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
      <Box {...plans} />
      <div className={styles["plans_container"]}>
        {/* نمرر الكائن مباشرة بدون map */}

        <Heading {...plans} />

        <div className={styles["plans_card"]}>
          {DataPlans.map(
            ({ id, type, name, price, discount, desc, features, currency }) => {
              const isYearly = !!checkedPlans[name];
              return (
                <div
                  key={id}
                  className={`${styles["price-card"]} ${styles[type.toLowerCase()]}`}>
                  <div className={styles.top}>
                    {/* title */}
                    <div className={styles.title}>
                      <div className={styles["title_right"]}>
                     <span data-plans>{name}</span>
                    {type == "Premium" && <>
                    <span data-break>|</span>
                    <span data-popular>popüler</span>
                    </>}

                      </div>

                      {type !== "Professional" ? (
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
                      ) : null}
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

                      <p className={styles["price-period"]}>
                        / Aylık
                      </p>
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
                      variant="primary"
                      style={{
                        justifyContent: "space-between",
                        borderRadius: "var(--border-radius-lg)",
                      }}>
                      Şimdi kayıt olun
                    </Button>
                  ) : (
                    <Button
                      style={{
                        justifyContent: "space-between",
                        borderRadius: "var(--border-radius-lg)",
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
