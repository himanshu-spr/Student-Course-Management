import { Courses, CourseReducerActionProps, Filters, FilterReducerActionProps } from "../interfaces";

export function courseReducer(state: Courses, action: CourseReducerActionProps): Courses {
    const code = action.payload.code;
    switch (action.type) {
    case 'ADD':
      return ({...state, [code]: action.payload});
    case 'EDIT':
        return ({...state, [code]: action.payload});
    default:
      return state;
  }
}

export function filterReducer(state: Filters, action: FilterReducerActionProps): Filters {
    switch (action.type) {
    case 'MODIFY_VIEW':
      return ({...state, view: action.payload});
    case 'MODIFY_YEAR':
        return ({...state, year: action.payload});
    case 'MODIFY_BRANCH':
      return ({...state, branch: action.payload});
    case 'MODIFY_SORT':
        return ({...state, sort: action.payload});
    case 'MODIFY_SEARCH':
        return ({...state, search: action.payload});
    default:
      return state;
  }
}