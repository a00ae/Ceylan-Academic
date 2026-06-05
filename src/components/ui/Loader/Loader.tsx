interface Props {
  loading: boolean;
}

const Loader = (props: Props) => {
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
          transition: props.loading ? "" : "0.3s",
          zIndex: props.loading ? 1 : -1,
          visibility: props.loading ? "visible" : "hidden",
        }}
        className="loader">
        <div>
          <span
            style={{
              transform: props.loading
                ? "translateY(-40px)"
                : "translateY(40px)",
              backgroundColor: "blue",
              transition: "transform 0.3s", // إضافة الترانزيشن هنا للعنصر المتحرك
              display: "inline-block",
              opacity: props.loading ? "1" : "0",
            }}>
            {"CEYLAN DIL ACADEMY".split(" ").map((word, index) => (
              <span key={index}>{word}&nbsp;</span>
            ))}
          </span>
        </div>
      </div>
    </>
  );
};

export default Loader;
