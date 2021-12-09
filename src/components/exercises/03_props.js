import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import CourseModulesWithProps from "../../stories/exercises/03-component.stories";



const Demo = () => {
  const course = "MSc Computing - Modules table.";
  const modules = [
    {
      name: "DevOps",
      noLectures: 2,
      noPracticals: 3
    },
    {
      name: "Enterprise Web Dev",
      noLectures: 3,
      noPracticals: 2
    }
  ];
  return <CourseModulesWithProps modules={modules} course={course} />;
  
};

export default Demo;
