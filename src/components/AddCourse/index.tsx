import React, { useState, useCallback, useContext } from "react";
import "./AddCourse.css";
import AddEditForm from "../AddEditForm";
import { dummyCourse } from "../../constants";
import CoursesContext from "../../contexts/CoursesContext";

const AddCourse = () => {
  const [isAddFormOpen, setIsAddFormOpen] = useState(false);
  const [coursesState, dispatch] = useContext(CoursesContext);

  const openHandler = useCallback(() => {
    setIsAddFormOpen(true);
  }, []);

  const closeFormHandler = useCallback(() => {
    setIsAddFormOpen(false);
  }, []);

  const submitFormHandler = useCallback(
    (course) => {
      dispatch({ type: "ADD", payload: course });
      closeFormHandler();
    },
    [closeFormHandler]
  );

  return (
    <div className="course-add-container">
      {isAddFormOpen && (
        <AddEditForm
          type={"ADD"}
          course={dummyCourse}
          onSubmit={submitFormHandler}
          onClose={closeFormHandler}
        />
      )}
      <button onClick={openHandler} className="course-add">
        Add Course
      </button>
    </div>
  );
};

export default AddCourse;
