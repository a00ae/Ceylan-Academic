import Service from "./section-1/Service.tsx";

const Main = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "var(--gap-md)",
      }}>
      <Service />
    </div>
  );
};

export default Main;
