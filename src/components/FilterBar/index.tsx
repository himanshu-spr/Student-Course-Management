import React from 'react';
import DropdownFilter from '../DropdownFilter';
import SearchFilter from '../SearchFilter';
import { DropdownFilterConstant } from '../../constants'; 
import './FilterBar.css';

const FilterBar = () => {
    return (
        <div className="filter-bar">
            <DropdownFilter {...DropdownFilterConstant.view} />

            <DropdownFilter {...DropdownFilterConstant.year} />

            <DropdownFilter {...DropdownFilterConstant.branch} />

            <DropdownFilter {...DropdownFilterConstant.sort} />
            
            <SearchFilter />
        </div>
    );
}

export default FilterBar;
