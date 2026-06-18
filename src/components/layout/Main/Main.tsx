import { memo } from "react";
import Service from "./section-1/Service.tsx";
import AboutUs from "./section-2/About-us.tsx";
import Curriculum from "./section-3/Curriculum.tsx";
import Plans from "./section-4/Plans.tsx";

const Main = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "var(--gap-md)",
      }}>
      <Service />
      <AboutUs />
      <Curriculum />
      <Plans />
    </div>
  );
};

export default memo(Main);
