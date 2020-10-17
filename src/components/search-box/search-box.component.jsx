import React from "react";
import './search-box.styles.css'
import {CardList} from "../card-list/card-list.component";

export const SearchBox = ({placeholder, handleChange}) => (

    <input
        className='search'
        type="search" placeholder={placeholder}
        onChange={handleChange}

    />

);
