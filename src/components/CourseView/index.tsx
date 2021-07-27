import { filter } from "minimatch";
import React, { useContext, useCallback } from "react";
import CoursesContext from "../../contexts/CoursesContext";
import FilterContext from "../../contexts/FilterContext";
import { Courses, Filters } from "../../interfaces";
import CourseListView from "./CourseListView";
import CourseGridView from "./CourseGridView";
import { getFilteredCourses as getFilteredCoursesHelper } from "../../helpers";
import "./CourseView.css";

const CourseView = () => {
  const [courses, coursesDispath] = useContext(CoursesContext);
  const [filters, filtersDispatch] = useContext(FilterContext);

  const filteredCourses = useCallback(
    () => getFilteredCoursesHelper(courses, filters),
    [courses, filters]
  );
  const containerClass =
    filters.view === "Grid" ? "course-view-grid" : "course-view-list";
  return (
    <div className={containerClass}>
      {filters.view === "Grid" ? (
        <CourseGridView courses={filteredCourses()} />
      ) : (
        <CourseListView courses={filteredCourses()} />
      )}
    </div>
  );
};

export default CourseView;
