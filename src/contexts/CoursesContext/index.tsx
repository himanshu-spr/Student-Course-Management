import React from "react";
import { Courses, CourseReducerActionProps } from "../../interfaces";
import { CoursesData } from "../../constants";

const CoursesContext = React.createContext<[Courses, React.Dispatch<CourseReducerActionProps>]>([
    CoursesData,
    () => {}
]);

export default CoursesContext;