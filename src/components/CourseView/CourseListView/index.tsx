import React from "react";
import "./CourseListView.css";
import { CourseListViewProps } from "../../../interfaces";
import RenderCourses from "../RenderCourses";
const CourseListView = (props: CourseListViewProps) => {
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
      <RenderCourses courses={props.courses} view={"List"} />
    </>
  );
};

export default CourseListView;
