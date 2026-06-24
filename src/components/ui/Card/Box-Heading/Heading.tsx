import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import "./box.scss";

type Props = {
  heading?: string;
  titleDescription?: string;
  isAnimation?: boolean;
  headingGreyColor?: string[];
};

const Heading = ({
  heading,
  titleDescription,
  headingGreyColor,
  isAnimation = false,
}: Props) => {
  const animation_delay = 0.04;
  const [ref, isVisible] = useScrollAnimation();

  return (
    <div ref={ref} className="box__title">
      {heading && heading ? (
        <h2>
          {isAnimation
            ? heading.split(" ").map((word, i) => {
                const isSpecial = headingGreyColor?.includes(
                  word.toLowerCase(),
                );
                if (isSpecial) {
                  return (
                    <span style={{ color: "#0126", display: "inline-block", }} key={i}>
                      {word.split("").map((char, i) => {
                      // حساب التأخير: ترتيب الكلمة الحالي مضروباً في طول تقريبي + ترتيب الحرف
                      // أو ببساطة شديدة لجعلها متتالية بشكل رائع:
                      const delayIndex = i * word.length + i;

                      return (
                        <span
                          key={i}
                          className={`reveal-char ${isVisible  ? "start-animation" : ""}`}
                          style={{
                            animationDelay:   `${delayIndex * animation_delay}s`,
                          }}>
                          {char}
                        </span>
                      );
                    })}
                      &nbsp;
                    </span>
                  );
                }
                return (
                  <span key={i} style={{ display: "inline-block" }}>
                    {word.split("").map((char, charIndex) => {
                      // حساب التأخير: ترتيب الكلمة الحالي مضروباً في طول تقريبي + ترتيب الحرف
                      // أو ببساطة شديدة لجعلها متتالية بشكل رائع:
                      const delayIndex = i * word.length + charIndex;

                      return (
                        <span
                          key={charIndex}
                          className={`reveal-char ${isVisible ? "start-animation" : ""}`}
                          style={{
                            animationDelay: `${delayIndex * animation_delay}s` ,
                            display: "inline-block",
                          }}>
                          {char}
                        </span>
                      );
                    })}
                    <span>&nbsp;</span>
                  </span>
                );
              })
            : heading}
        </h2>
      ) : (
        ""
      )}
      {titleDescription && titleDescription ? <p>{titleDescription}</p> : ""}
    </div>
  );
};

export default Heading;
