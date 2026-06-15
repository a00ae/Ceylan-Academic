import "./box.scss";

type Props = {
  heading?: string;
  titleDescription?: string;
  animate?: boolean;
};

const Heading = (props: Props) => {
  const animation_delay = 0.05;
  return (
    <div className="box__title">
      {props.heading && props.heading ? (
        <h2>
          {props.heading.split("").map((ele, i) => (
            <span
              className={`reveal-char ${props.animate ? "start-animation" : ""}`}
              style={{
                animationDelay: `${i * animation_delay}s`,
                // إذا كان الحرف مسافة فارغة، نضمن حفظ المساحة في المتصفح
                display: ele === " " ? "inline" : "inline-block",
              }}
              key={i}>
              {ele === " " ? "\u00A0" : ele}
            </span>
          ))}
        </h2>
      ) : (
        ""
      )}
      {props.titleDescription && props.titleDescription ? (
        <p>{props.titleDescription}</p>
      ) : (
        ""
      )}
    </div>
  );
};

export default Heading;
