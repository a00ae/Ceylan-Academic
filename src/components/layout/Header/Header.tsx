import styles from "./Header.module.scss";
// إذا كنت تستخدم Vite، أضف ?react في نهاية المسار لاستيرادها كمكون
// @ts-ignore
import CeylanLogo from "../../../assets/logo/Ceylan-Language-Academi-Logo.svg?react";

const header: string[] = ["home", "price", "content", "about my"];

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles["header_icon"]}>
        <CeylanLogo className={styles.mainLogo} title="Ceylan Logo" />
      </nav>
      <ul className={styles["header_nav"]}>
        {header.map((ele) => (
          <li key={ele}>
            <a data-element={ele} href={`#${ele}`}>
              <span>{ele}</span>
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
