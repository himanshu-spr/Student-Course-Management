import React, { useState, useContext } from "react";
import "./EditForm.css";
import { EditFormProps, Course } from "../../../interfaces";
import { DropdownFilterConstant } from "../../../constants";
import { MdClose } from "react-icons/md";
import CoursesContext from "../../../contexts/CoursesContext";

const branchOptions = DropdownFilterConstant.branch.options
  .filter((option) => {
    return option !== "All Branches";
  })
  .map((option) => {
    return <option>{option}</option>;
  });

const yearOptions = DropdownFilterConstant.year.options
  .filter((option) => {
    return option !== "All Years";
  })
  .map((option) => {
    return <option value={option}>{option}</option>;
  });

function EditForm(props: EditFormProps) {
  const [state, dispatch] = useContext(CoursesContext);

  const [name, setName] = useState(props.course.name);
  const [code, setCode] = useState(props.course.code);
  const [credits, setCredits] = useState(props.course.credits);
  const [branch, setBranch] = useState(props.course.branch);
  const [year, setYear] = useState(props.course.year);

  const submitHandler = (event: any) => {
    event.preventDefault();
    const editedCourse: Course = {
      name,
      prof: "John Doe",
      strength: props.course.strength,
      branch: event.target.course_branch.value,
      year: event.target.course_year.value,
      code,
      credits,
    };

    dispatch({ type: "EDIT", payload: editedCourse });
    props.closeFormHandler();
  };

  return (
    <div className="form-container">
      <form id="add-form" name="addCourse" onSubmit={submitHandler}>
        <MdClose className="close-form" onClick={props.closeFormHandler} />
        <h2>Edit course</h2>
        <label htmlFor="course_name">Course Name</label>
        <input
          type="text"
          name="course_name"
          className="add-form-input"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <div className="form-small-input">
          <div>
            <label htmlFor="course_code">Course Code</label>
            <input
              type="text"
              name="course_code"
              className="add-form-input"
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="course_credits">Credits</label>
            <input
              type="number"
              name="course_credits"
              className="add-form-input"
              value={credits}
              onChange={(e) => setCredits(parseInt(e.target.value))}
            />
          </div>
        </div>

        <label htmlFor="course_branch">Branch</label>
        <select
          name="course_branch"
          className="add-form-select"
          value={branch}
          onChange={(e) => setBranch(e.target.value)}
        >
          {branchOptions}
        </select>

        <label htmlFor="course_year">Year</label>
        <select
          name="course_year"
          className="add-form-select"
          value={year}
          onChange={(e) => setYear(parseInt(e.target.value))}
        >
          {yearOptions}
        </select>

        <button type="submit" className="add-form-submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default EditForm;
