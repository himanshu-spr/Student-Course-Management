export interface DropdownFilterProps {
  name: string;
  label: string;
  options: string[];
}

export interface Courses {
  [key: string]: {
    name: string;
    prof: string;
    strength: number;
    branch: string;
    year: number;
    code: string;
    credits: number;
  };
}

export interface Course {
  name: string;
  prof: string;
  strength: number;
  branch: string;
  year: number;
  code: string;
  credits: number;
}

export interface CourseReducerActionProps {
  type: string;
  payload: {
    name: string;
    prof: string;
    strength: number;
    branch: string;
    year: number;
    code: string;
    credits: number;
  };
}

export interface Filters {
  view: string;
  year: string;
  branch: string;
  sort: string;
  search: string;
}

export interface FilterReducerActionProps {
  type: string;
  payload: string;
}

export interface FilterContextProps {
  filters: Filters;
  dispatchFiltersAction: (
    state: Filters,
    action: FilterReducerActionProps
  ) => Filters;
}

export interface CourseGridViewProps {
  courses: Course[];
}

export interface CourseListViewProps {
  courses: Course[];
}

export interface AddEditFormProps {
  course: Course;
  type: string;
  onClose: () => void;
  onSubmit: (course: Course) => void;
}

export interface RenderCoursesProps {
  courses: Course[];
  view: string;
}
