import "./box.scss";

type Props = {
  heading?: string;
  titleDescription?: string;
  animate?: boolean;
  isAnimation: boolean;
};

const Heading = ({
  animate,
  heading,
  titleDescription,
  isAnimation = false,
}: Props) => {
  const animation_delay = 0.05;
  console.log(animate);

  return (
    <div className="box__title">
      {heading && heading ? (
        <h2>
          {isAnimation
            ? heading.split(" ").map((word, i) => {
                const isSpecial = [
                  "tarafından",
                  "öğretilen",
                  "müfredat",
                ].includes(word.toLowerCase());
                if (isSpecial) {
                  return (
                    <span style={{ color: "#0126" }} key={i}>
                      {word.split("").map((prev) => (
                        <span
                          className={`reveal-char ${animate ? "start-animation" : ""}`}>
                          {prev}
                        </span>
                      ))}
                      &nbsp;
                    </span>
                  );
                }
                return (
                  <span key={i} style={{ display: "inline-block" }}>
                    {word.split("").map((char, charIndex) => (
                      <span
                        key={charIndex}
                        className={`reveal-char ${animate ? "start-animation" : ""}`}
                        style={{
                          animationDelay: `${(i * 5 + charIndex) * animation_delay}s`,
                          display: "inline-block",
                        }}>
                        {char}
                      </span>
                    ))}
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
