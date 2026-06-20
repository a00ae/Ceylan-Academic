import { memo } from "react";
import Service from "./section-1/Service.tsx";
import AboutUs from "./section-2/About-us.tsx";
import Curriculum from "./section-5/Curriculum.tsx";
import Plans from "./section-6/Plans.tsx";
import OurCourses from "./section-3/OurCourses.tsx";
import WhyChooseUs from "./section-4/WhyChooseUs.tsx";

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
      <OurCourses />
      <WhyChooseUs />
      <Curriculum />
      <Plans />
    </div>
  );
};

export default memo(Main);
