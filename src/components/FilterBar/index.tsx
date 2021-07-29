import React, { useEffect, useState, useCallback } from "react";
import DropdownFilter from "../DropdownFilter";
import SearchFilter from "../SearchFilter";
import { getFilters as getFiltersHelper } from "../../helpers/GetFilters";
import "./FilterBar.css";
import { DropDownData } from "../../interfaces";

const FilterBar = () => {
  const [dropDownData, setDropDownData] = useState<DropDownData | null>(null);
  const getData = useCallback(async () => {
    try {
      const data = await getFiltersHelper();
      setDropDownData({ ...data });
    } catch (err) {
      alert(err);
    }
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <>
      {dropDownData ? (
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
