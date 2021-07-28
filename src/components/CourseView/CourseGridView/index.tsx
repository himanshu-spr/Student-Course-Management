import React from "react";
import "./CourseGridView.css";
import { CourseGridViewProps } from "../../../interfaces";
import RenderCourses from "../RenderCourses";

const CourseGridView = (props: CourseGridViewProps) => {
  return <RenderCourses courses={props.courses} view={"Grid"} />;
};

export default CourseGridView;
