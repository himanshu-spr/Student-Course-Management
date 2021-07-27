import React, { useState, useCallback } from "react";
import "./AddCourse.css";
import AddEditForm from "../AddEditForm";

const AddCourse = () => {
  const [isAddFormOpen, setIsAddFormOpen] = useState(false);

  const openHandler = useCallback(() => {
    setIsAddFormOpen(true);
  }, [isAddFormOpen]);

  const closeFormHandler = useCallback(() => {
    setIsAddFormOpen(false);
  }, [isAddFormOpen]);
  const curCourse = {
    name: "",
    prof: "",
    strength: 0,
    branch: "CSE",
    year: 1,
    code: "",
    credits: 0,
  };
  return (
    <div className="course-add-container">
      {isAddFormOpen && (
        <AddEditForm
          closeFormHandler={closeFormHandler}
          type={"ADD"}
          course={curCourse}
        />
      )}
      <button onClick={openHandler} className="course-add">
        Add Course
      </button>
    </div>
  );
};

export default AddCourse;
