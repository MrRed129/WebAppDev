import React from "react";
import CourseModulesWithProps from "../../components/exercises/03_props";

export default {
  title: "Exercises/03 - component with props",
  component: CourseModulesWithProps,
};

export const Basic = () => {
  const course = "HDip Computer Science";
  const modules = [
    {
      name: "DevOps",
      noLectures: 1,
      noPracticals: 2,
    },
    {
      name: "Enterprise Web Dev",
      noLectures: 2,
      noPracticals: 3,
    },
  ];
  return (
    <div>
      <h2>{course}</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>No lectures</th>
            <th>No practicals</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{modules[0].name}</td>
            <td>{modules[0].noLectures}</td>
            <td>{modules[0].noPracticals}</td>
          </tr>
          <tr>
            <td>{modules[1].name}</td>
            <td>{modules[1].noLectures}</td>
            <td>{modules[1].noPracticals}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
