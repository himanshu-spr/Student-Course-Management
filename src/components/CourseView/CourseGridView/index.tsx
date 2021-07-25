import React from "react";
import "./CourseGridView.css";
import { CourseGridViewProps } from "../../../interfaces";
import GridCourse from "./GridCourse";

const CourseGridView = (props: CourseGridViewProps) => {
  const coursesElement = props.courses.map((course) => {
    return <GridCourse course={course} />;
  });

  return <>{coursesElement}</>;
};

export default CourseGridView;
