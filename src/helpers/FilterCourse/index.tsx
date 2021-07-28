import { Courses, Filters } from "../../interfaces";

export const getFilteredCourses = (courses: Courses, filters: Filters) => {
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
