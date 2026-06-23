import Box from "@/components/ui/Card/Box-Heading/Box";
import styles from "./Curriculum.module.scss";
import { pageData } from "@/components/ui/Card/Box-Heading/dataBox";
import Heading from "@/components/ui/Card/Box-Heading/Heading";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { DATA_CURRICULUM } from "./data-Curriculum";
type Props = {};

const Curriculum = (props: Props) => {
  // const [currentRef, isVisible] = useScrollAnimation();
  const { curriculum } = pageData;
  return (
    <section className={styles["curriculum"]}>
      <div className={styles["curriculum_container"]}>
        <Box {...curriculum} />
        <div className={styles["curriculum_title_heading"]}>
          <Heading {...curriculum} />
          <div className={styles["description"]}>
            <p>Müfredatımız uluslararası alanda tanınmaktadır.</p>
          </div>
        </div>
        <div className={styles["curriculum_books"]}>
          {DATA_CURRICULUM.map((book) => (
          <div className={`${styles["book"]} ${styles[book.type]}` }>
            <div className={styles["book_title"]}>
            <h2>{book.bookTitle}</h2>
            </div>
            <div className={styles["book_description"]}>
            <p>{book.bookDescription}</p>
            </div>
            <div className={styles["book_level"]}>
            <span>{book.level}</span>
            </div>


          </div>

          ))}

        </div>
      </div>
    </section>
  );
};

export default Curriculum;
