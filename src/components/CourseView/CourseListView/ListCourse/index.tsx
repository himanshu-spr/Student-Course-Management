import React, { useCallback, useState, useContext } from "react";
import "./ListCourse.css";
import AddEditForm from "../../../AddEditForm";
import { Course } from "../../../../interfaces";
import { FaEdit } from "react-icons/fa";
import CoursesContext from "../../../../contexts/CoursesContext";

function ListCourse(props: { course: Course }) {
  const [isEditFormOpen, setIsEditFormOpen] = useState(false);
  const [coursesState, dispatch] = useContext(CoursesContext);

  const openFormHandler = useCallback(() => {
    setIsEditFormOpen(true);
  }, []);

  const closeFormHandler = useCallback(() => {
    setIsEditFormOpen(false);
  }, []);

  const submitFormHandler = useCallback(
    (course) => {
      dispatch({ type: "EDIT", payload: course });
      closeFormHandler();
    },
    [closeFormHandler]
  );

  return (
    <>
      {isEditFormOpen && (
        <AddEditForm
          course={props.course}
          type={"EDIT"}
          onClose={closeFormHandler}
          onSubmit={submitFormHandler}
        />
      )}
      <div className="course-list-element">
        <p>{props.course.code}</p>
        <p className="course-list-name">{props.course.name}</p>
        <p>{props.course.prof}</p>
        <p>{props.course.branch}</p>
        <p>{props.course.year}</p>
        <p>{props.course.strength}</p>
        <FaEdit className="list-edit-btn" onClick={openFormHandler} />
      </div>
    </>
  );
}

export default ListCourse;
