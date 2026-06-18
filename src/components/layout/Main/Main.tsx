import Service from "./section-1/Service.tsx";
import { memo } from "react";
import Plans from "./section-4/Plans.tsx";
import Curriculum from "./section-3/Curriculum.tsx";

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
      <Curriculum />
    </div>
  );
};

export default memo(Main);
