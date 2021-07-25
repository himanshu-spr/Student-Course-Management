import React, { useContext } from 'react';
import './SearchFilter.css';
import { FaSearch } from 'react-icons/fa';
import FilterContext from '../../contexts/FilterContext';

const SearchFilter = () => {
    const [state, dispatch] = useContext(FilterContext);

    const changeHandler = (event: any) => {
        event.preventDefault();
        dispatch({type: 'MODIFY_SEARCH', payload: event.target.value});
    };

    return (
        <>
            <form name="search" className="search-form">
                <input
                    type="text" 
                    name="search"
                    className="search-input"
                    placeholder="Search"
                    value={state.search} 
                    onChange={changeHandler}
                />
                <FaSearch className="search-icon"/>
            </form>
        </>
    );
}

export default SearchFilter;
