import styles from "./Header.module.scss";
// إذا كنت تستخدم Vite، أضف ?react في نهاية المسار لاستيرادها كمكون
// @ts-ignore
// import CeylanLogo from "../../../assets/logo/Ceylan-Language-Academi-Logo.svg?react";
import Button from "../../ui/Button/Button";
import LesilingoLogo from "./LesilingoLogo";
import { mainListName } from ".";





const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles["header_icon"]}>
        <LesilingoLogo />
        <span className={styles["main-logo"]}>ceylan</span>
        {/* <CeylanLogo className={styles.mainLogo} title="Ceylan Logo" /> */}
      </nav>
      <ul className={styles["header_nav"]}>
        {mainListName.map((ele) => (
          <li key={ele}>
            <a data-element={ele} href={`#${ele}`}>
              <span>{ele}</span>
            </a>
          </li>
        ))}
      </ul>
      <Button variant="black" size="large">Fiyat teklifi alın</Button>
    </header>
  );
};

export default Header;
