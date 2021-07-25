import React, { useState } from 'react';
import './AddCourse.css';
import AddForm from './AddForm';

const AddCourse = () => {
    const [isAddFormOpen, setIsAddFormOpen] = useState(false);

    const openHandler = () => {
      setIsAddFormOpen(true); 
    } 

    const cancelHandler = () => {
      setIsAddFormOpen(false); 
    } 

    return (
        <div className="course-add-container"> 
          { isAddFormOpen && <AddForm cancelHandler={cancelHandler} isAddFormOpen={isAddFormOpen} /> }
          <button onClick={openHandler}
           className="course-add">
             Add Course
          </button> 
        </div>
    );
}

export default AddCourse;
