import React, { useCallback } from "react";
import "./CourseListView.css";
import { CourseListViewProps } from "../../../interfaces";
import ListCourse from "./ListCourse";

const CourseListView = (props: CourseListViewProps) => {
  const coursesElement = useCallback(
    () =>
      props.courses.map((course) => {
        return <ListCourse course={course} />;
      }),
    [props.courses]
  );

  return (
    <>
      <div className="list-view-header">
        <p>Course Code</p>
        <p>Course Name</p>
        <p>Professor</p>
        <p>Branch</p>
        <p>Year</p>
        <p>Strength</p>
      </div>
      {coursesElement()}
    </>
  );
};

export default CourseListView;
