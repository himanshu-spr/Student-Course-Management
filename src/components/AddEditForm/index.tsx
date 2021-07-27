import React, { useState, useCallback } from "react";
import "./AddEditForm.css";
import { AddEditFormProps } from "../../interfaces";
import { DropdownFilterConstant } from "../../constants";
import { MdClose } from "react-icons/md";

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

function AddEditForm(props: AddEditFormProps) {
  const isDisabled = props.type === "EDIT";

  const [filterState, setFilterState] = useState({
    name: props.course.name,
    code: props.course.code,
    credits: props.course.credits,
    branch: props.course.branch,
    year: props.course.year,
  });

  const submitHandler = useCallback((event: any) => {
    event.preventDefault();
    const curCourse = {
      name: filterState.name,
      prof: "John Doe",
      strength: props.course.strength,
      branch: filterState.branch,
      year: filterState.year,
      code: filterState.code,
      credits: filterState.credits,
    };
    props.onSubmit(curCourse);
  }, []);

  const handleOnChange = useCallback((event: any) => {
    let value = event.target.value;
    if (event.target.name === "year" || event.target.name === "credits") {
      value = parseInt(event.target.value);
    }

    setFilterState((prevState) => {
      return { ...prevState, [event.target.name]: value };
    });
  }, []);

  return (
    <div className="form-container">
      <form id="form" name="addCourse" onSubmit={submitHandler}>
        <MdClose className="close-form" onClick={props.onClose} />
        <h2>{props.type[0] + props.type.slice(1).toLowerCase()} course</h2>
        <label htmlFor="course_name">Course Name</label>
        <input
          type="text"
          name="name"
          className="form-input"
          value={filterState.name}
          onChange={handleOnChange}
        />

        <div className="form-small-input">
          <div>
            <label htmlFor="course_code">Course Code</label>
            <input
              type="text"
              name="code"
              className="form-input"
              value={filterState.code}
              onChange={handleOnChange}
              disabled={isDisabled}
            />
          </div>
          <div>
            <label htmlFor="course_credits">Credits</label>
            <input
              type="number"
              name="credits"
              className="form-input"
              value={filterState.credits}
              onChange={handleOnChange}
            />
          </div>
        </div>

        <label htmlFor="course_branch">Branch</label>
        <select
          name="branch"
          className="form-select"
          value={filterState.branch}
          onChange={handleOnChange}
        >
          {branchOptions}
        </select>

        <label htmlFor="course_year">Year</label>
        <select
          name="year"
          className="form-select"
          value={filterState.year}
          onChange={handleOnChange}
        >
          {yearOptions}
        </select>

        <button type="submit" className="form-submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddEditForm;
