import React from "react";
import { Filters, FilterReducerActionProps } from "../../interfaces";
import { initialFilters } from "../../constants";

const FilterContext = React.createContext<[Filters, React.Dispatch<FilterReducerActionProps>]>([
    initialFilters,
    () => {}
]);

export default FilterContext;