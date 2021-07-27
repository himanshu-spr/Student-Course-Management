import React, { useCallback, useState } from "react";
import "./GridCourse.css";
import AddEditForm from "../../../AddEditForm";
import { Course } from "../../../../interfaces";
import { FaEdit } from "react-icons/fa";

function GridCourse(props: { course: Course }) {
  const [isEditFormOpen, setIsEditFormOpen] = useState(false);

  const openFormHandler = useCallback(() => {
    setIsEditFormOpen(true);
  }, [isEditFormOpen]);

  const closeFormHandler = useCallback(() => {
    setIsEditFormOpen(false);
  }, [isEditFormOpen]);

  return (
    <>
      {isEditFormOpen && (
        <AddEditForm
          course={props.course}
          closeFormHandler={closeFormHandler}
          type={"EDIT"}
        />
      )}
      <div className="course-grid-element">
        <FaEdit className="edit-btn" onClick={openFormHandler} />
        <div className="course-grid-main-info-container">
          <div className="course-grid-name-element">
            <p className="course-grid-name">{props.course.name}</p>
            <p className="course-grid-prof">
              <em>Taught by Prof. {props.course.prof}</em>
            </p>
          </div>
          <div className="course-grid-meta-container">
            <p>Code: {props.course.code}</p>
            <p>Branch: {props.course.branch}</p>
            <p>Year: {props.course.year}</p>
          </div>
        </div>
        <div className="course-grid-strength-info-container">
          <p className="course-grid-strength-number">{props.course.strength}</p>
          <span>students opted this course.</span>
        </div>
      </div>
    </>
  );
}

export default GridCourse;
