import React, { useCallback, useState } from "react";
import "./ListCourse.css";
import EditForm from "../../EditForm";
import { Course } from "../../../../interfaces";
import { FaEdit } from "react-icons/fa";

function ListCourse(props: { course: Course }) {
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
        <EditForm course={props.course} closeFormHandler={closeFormHandler} />
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
