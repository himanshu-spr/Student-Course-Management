import { filter } from "minimatch";
import React, { useContext, useMemo } from "react";
import CoursesContext from "../../contexts/CoursesContext";
import FilterContext from "../../contexts/FilterContext";
import { Courses, Filters } from "../../interfaces";
import CourseListView from "./CourseListView";
import CourseGridView from "./CourseGridView";
import "./CourseView.css";

const getFilteredCourses = (courses: Courses, filters: Filters) => {
  const filteredCourses = [];
  for (let code in courses) {
    let course = courses[code];

    if (
      (course.year == parseInt(filters.year) || filters.year === "All Years") &&
      (course.branch === filters.branch || filters.branch === "All Branches")
    ) {
      if (course.name.toLowerCase().includes(filters.search.toLowerCase())) {
        filteredCourses.push(course);
      }
    }
  }
  if (filters.sort === "Strength - Low to High") {
    filteredCourses.sort((a, b) => {
      return a.strength - b.strength;
    });
  }

  if (filters.sort === "Strength - High to Low") {
    filteredCourses.sort((a, b) => {
      return b.strength - a.strength;
    });
  }

  return filteredCourses;
};

const CourseView = () => {
  const [courses, coursesDispath] = useContext(CoursesContext);
  const [filters, filtersDispatch] = useContext(FilterContext);

  const filteredCourses = useMemo(
    () => getFilteredCourses(courses, filters),
    [courses, filters]
  );
  const containerClass =
    filters.view === "Grid" ? "course-view-grid" : "course-view-list";
  return (
    <div className={containerClass}>
      {filters.view === "Grid" ? (
        <CourseGridView courses={filteredCourses} />
      ) : (
        <CourseListView courses={filteredCourses} />
      )}
    </div>
  );
};

export default CourseView;
