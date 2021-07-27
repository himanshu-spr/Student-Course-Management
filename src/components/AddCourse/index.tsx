import React, { useState, useCallback } from "react";
import "./AddCourse.css";
import AddForm from "./AddForm";

const AddCourse = () => {
  const [isAddFormOpen, setIsAddFormOpen] = useState(false);

  const openHandler = useCallback(() => {
    setIsAddFormOpen(true);
  }, [isAddFormOpen]);

  const closeHandler = useCallback(() => {
    setIsAddFormOpen(false);
  }, [isAddFormOpen]);

  return (
    <div className="course-add-container">
      {isAddFormOpen && (
        <AddForm closeHandler={closeHandler} isAddFormOpen={isAddFormOpen} />
      )}
      <button onClick={openHandler} className="course-add">
        Add Course
      </button>
    </div>
  );
};

export default AddCourse;
