import Box from "../../../ui/Card/Box";
import { pageData } from "../../../ui/Card/dataBox";
import styles from "./Plans.module.scss";


const Plans = () => {
  // نستخرج كائن الـ plans المباشر
  const { plans } = pageData; 

  return (
    <div className={styles.plans}>
        <div className={styles["plans_container"]}>

        </div>
      {/* نمرر الكائن مباشرة بدون map */}
      <Box {...plans} />

    </div>
  );
};

export default Plans;
