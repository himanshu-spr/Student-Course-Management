import React, { useReducer } from "react";
import "./CoursesPage.css";
import FilterBar from "../FilterBar";
import AddCourse from "../AddCourse";
import CourseView from "../CourseView";
import CoursesContext from "../../contexts/CoursesContext";
import FilterContext from "../../contexts/FilterContext";
import { CoursesData, initialFilters } from "../../constants";
import { courseReducer, filterReducer } from "../../reducers";

const CoursesPage = () => {
  const [courses, dispatchCoursesAction] = useReducer(
    courseReducer,
    CoursesData
  );
  const [filters, dispatchFiltersAction] = useReducer(
    filterReducer,
    initialFilters
  );

  return (
    <CoursesContext.Provider value={[courses, dispatchCoursesAction]}>
      <FilterContext.Provider value={[filters, dispatchFiltersAction]}>
        <div className="coursepage-container">
          <div className="coursepage-filterbar">
            <FilterBar />
            <AddCourse />
          </div>
          <hr className="section-seperation" />
          <div className="course-view-container">
            <CourseView />
          </div>
        </div>
      </FilterContext.Provider>
    </CoursesContext.Provider>
  );
};

export default CoursesPage;
