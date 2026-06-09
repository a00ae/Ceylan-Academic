import Service from "./section-1/Service.tsx";
import { memo } from "react";
import Plans from "./section-2/Plans.tsx";

const Main = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "var(--gap-md)",
      }}>
      <Service />
      <Plans />
    </div>
  );
};

export default memo(Main);
