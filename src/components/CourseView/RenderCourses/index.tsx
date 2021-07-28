import React from "react";
import { RenderCoursesProps, Course } from "../../../interfaces";
import ListCourse from "../CourseListView/ListCourse";
import GridCourse from "../CourseGridView/GridCourse";

const RenderCourses = (props: RenderCoursesProps) => {
  return (
    <>
      {props.courses.map((course: Course) => {
        return props.view === "List" ? (
          <ListCourse course={course} />
        ) : (
          <GridCourse course={course} />
        );
      })}
    </>
  );
};

export default RenderCourses;
