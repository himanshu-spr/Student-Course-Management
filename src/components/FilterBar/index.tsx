import React, { useEffect, useState } from "react";
import DropdownFilter from "../DropdownFilter";
import SearchFilter from "../SearchFilter";
import { getFilters as getFiltersHelper } from "../../helpers/GetFilters";
import "./FilterBar.css";
import { DropDownData } from "../../interfaces";

const FilterBar = () => {
  const [dropDownData, setDropDownData] = useState<DropDownData>(
    {} as DropDownData
  );
  const getData = async () => {
    const data = await getFiltersHelper();
    setDropDownData((prevState) => {
      return { ...prevState, ...data };
    });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {Object.keys(dropDownData).length !== 0 ? (
        <div className="filter-bar">
          <DropdownFilter {...dropDownData.view} />

          <DropdownFilter {...dropDownData.year} />

          <DropdownFilter {...dropDownData.branch} />

          <DropdownFilter {...dropDownData.sort} />

          <SearchFilter />
        </div>
      ) : null}
    </>
  );
};

export default FilterBar;
