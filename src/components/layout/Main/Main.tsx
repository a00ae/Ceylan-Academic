import { memo } from "react";
import Service from "./section-1/Service.tsx";
import AboutUs from "./section-2/About-us.tsx";
import Curriculum from "./section-7/Curriculum.tsx";
import Plans from "./section-8/Plans.tsx";
import OurCourses from "./section-3/OurCourses.tsx";
import WhyChooseUs from "./section-4/WhyChooseUs.tsx";
import CourseType from "./section-5/CourseType.tsx";
import OurInstructure from "./section-6/OurInstructure.tsx";

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
      <CourseType />
      <OurInstructure />
      {/* <Curriculum /> */}
      <Plans />
    </div>
  );
};

export default memo(Main);
