import React, { useCallback } from "react";
import "./CourseGridView.css";
import { CourseGridViewProps } from "../../../interfaces";
import GridCourse from "./GridCourse";

const CourseGridView = (props: CourseGridViewProps) => {
  const coursesElement = useCallback(
    () =>
      props.courses.map((course) => {
        return <GridCourse course={course} />;
      }),
    [props.courses]
  );

  return <>{coursesElement()}</>;
};

export default CourseGridView;
