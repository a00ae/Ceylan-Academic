interface Props {
  loading: boolean;
}

const Loader = (props: Props) => {
  const text = "CEYLAN DIL ACADEMY";

  // مدة حركة كل حرف فردي
  const letterDuration = 0.5;
  // التأخير بين كل حرف والآخر
  const letterStagger = 0.05;
  // الوقت الإجمالي الذي تستغرقه الحروف كلها لتختفي تماماً
  const textAnimationTime = text.length * letterStagger + letterDuration;

  return (
    <>
      <div
        style={{
          position: "fixed",
          top: "0",
          width: "100%",
          height: props.loading ? "100vh" : "0vh",
          backgroundColor: "var(--text-color)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: props.loading ? 1 : -1,
          visibility: props.loading ? "visible" : "hidden",
          // تعديل الأنيميشن هنا: الشاشة تنتظر اختفاء النص بالكامل (textAnimationTime) قبل أن تبدأ بالارتفاع
          transition: props.loading
            ? ""
            : ` 0.5s ${textAnimationTime}s ease-in-out, visibility 0s ${textAnimationTime + 0.5}s`,
        }}
        className="loader">
        <div>
          <span style={{ display: "inline-block" }}>
            {text.split("").map((char, index) => (
              <span
                style={{
                  fontSize: "100px",
                  display: "inline-block",
                  opacity: props.loading ? "1" : "0",
                  transform: props.loading
                    ? "translateY(0)"
                    : "translateY(-30px)", // يرتفع للأعلى قليلاً أثناء الاختفاء لمظهر أجمل
                  transition: props.loading
                    ? `all ${letterDuration}s calc(${index} * ${letterStagger}s) ease-out`
                    : `all ${letterDuration}s calc(${(text.length - 1 - index) * letterStagger}s) ease-in`,
                  // تعديل المعادلة بالأعلى (text.length - 1 - index) لضمان أن آخر حرف يبدأ الاختفاء فوراً في الـ Exit
                }}
                key={index}>
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
