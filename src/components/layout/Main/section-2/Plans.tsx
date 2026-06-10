import { useState } from "react";
import Box from "../../../ui/Card/Box";
import { pageData } from "../../../ui/Card/dataBox";
import Heading from "../../../ui/Card/Heading";
import styles from "./Plans.module.scss";

const Plans = () => {
  // نستخرج كائن الـ plans المباشر
  const { plans } = pageData;
  const [checkedPlans, setCheckedPlans] = useState<Record<string, boolean>>({});

  // const togglePlan = (planTitle: string) => {
  //   setCheckedPlans((prev) => ({
  //     ...prev,
  //     [planTitle]: !prev[planTitle],
  //   }));
  // };

  return (
    <section className={styles.plans}>
      <div className={styles["plans_container"]}>
        {/* نمرر الكائن مباشرة بدون map */}

        <Box {...plans} />
        <Heading {...plans} />

        <div className={styles["plans_card"]}>
          <div className={styles["price-card"]}>
            <div className={styles.top}>
              {/* title */}
              <div className={styles.title}>
                <span data-plans>Basic</span>
                <div className={styles["check-box"]}>
                  <label className={styles.switch}>
                    <input
                      // checked={isYearly}
                      // onChange={() => togglePlan(title)}
                      type="checkbox"
                    />
                    <span className="slider round"></span>
                  </label>
                  <p>Yearly</p>
                </div>
              </div>
              {/* price */}
              <div className={styles["price-componints"]}>
                <p>1000 TL</p>
                <p>/ <span>Ayilk</span></p>


              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Plans;
