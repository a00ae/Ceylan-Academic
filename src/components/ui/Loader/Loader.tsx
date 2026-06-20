interface Props {
  loading: boolean;
}

const Loader = (props: Props) => {
  const text = "Ceylan Dil Akademisi";

  const letterDuration = 0.2;
  const letterStagger = 0.02;
  const textAnimationTime = text.length * letterStagger + letterDuration; // حوالي 0.62 ثانية

  return (
    <>
      <div
        style={{
          position: "fixed",
          top: "0",
          left: "0", // إشهار المتصفح بمكان البداية الأفقي
          width: "100%",
          height: "100vh", // نثبت الارتفاع 100vh دائماً
          backgroundColor: "var(--bg-color-default)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 9999, // نثبته ليكون دائماً بالأعلى فوق كل شيء
          
          // بدلاً من تغيير الارتفاع، سنقوم بتحريك الشاشة بالكامل للأعلى (أفضل للأداء بكثير)
          transform: props.loading ? "translateY(0)" : "translateY(-100%)",
          visibility: props.loading ? "visible" : "hidden",
          
          // التعديل السحري هنا:
          // عند الإغلاق (false): ننتظر مدة النص (textAnimationTime) ثم نقوم بتحريك الشاشة خلال 0.5 ثانية
          // والـ visibility تختفي تماماً بعد انتهاء حركتي النص والشاشة معاً
          transition: props.loading
            ? "transform 0s, visibility 0s"
            : `transform 0.5s ease-in-out ${textAnimationTime}s, visibility 0s ${textAnimationTime + 0.5}s`,
        }}
        className="loader"
      >
        <div>
          <span
            style={{
              display: "inline-block",
              opacity: props.loading ? "1" : "0",
              transition: props.loading ? "" : `opacity 0.1s ${textAnimationTime}s`,
            }}
          >
            {text.split("").map((char, index) => (
              <span
                style={{
                  fontSize: "100px",
                  display: "inline-block",
                  opacity: props.loading ? "1" : "0",
                  transform: props.loading ? "translateY(0)" : "translateY(-30px)",
                  transition: props.loading
                    ? `all ${letterDuration}s calc(${index} * ${letterStagger}s) ease-out`
                    : `all ${letterDuration}s calc(${(text.length - 1 - index) * letterStagger}s) ease-in`,
                }}
                key={index}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </span>
        </div>
      </div>
    </>
  );
};

export default Loader;