import { RiArrowRightUpLine } from "@remixicon/react";
import styles from "./Button.module.scss";
interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: "default" | "primary" | "secondary" | "danger" | "black"; // تحديد أشكال الزر
  size?: "small" | "medium" | "large";
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "default",
  size = "medium",
  className = "",
  ...props
}) => {
  const buttonClass = `${styles.btn} ${styles[variant]} ${styles[size]} ${className}`;
  return (
    <a className={buttonClass} {...props}>
      <div className={styles.first}>
        <span className={styles["data-title"]} data-title={children}>
          {children}
        </span>
      </div>
      <div className={styles.svg}>
        <RiArrowRightUpLine />
      </div>
    </a>
  );
};

export default Button;
