import React, { useMemo, useContext, useCallback } from "react";
import "./DropdownFilter.css";
import { DropdownFilterProps, FilterContextProps } from "../../interfaces";
import FilterContext from "../../contexts/FilterContext";

const getOptions = (options: string[]) => {
  const retOptions = options.map((option: string) => {
    return <option>{option}</option>;
  });
  return retOptions;
};

const DropdownFilter = (props: DropdownFilterProps) => {
  const options = useMemo(() => getOptions(props.options), [props.options]);

  const [state, dispatch] = useContext(FilterContext);

  const changeHandler = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      const changeProp = props.name.toUpperCase();
      const actionType = `MODIFY_${changeProp}`;

      dispatch({ type: actionType, payload: event.target.value });
    },
    [props.name]
  );

  return (
    <form name={props.name}>
      <label className="dropdown-label">{props.label}</label>
      <select
        name={props.name}
        className="dropdown-select"
        onChange={changeHandler}
      >
        {options}
      </select>
    </form>
  );
};

export default DropdownFilter;
