import React from "react";
import './Searchbox.css';

export const Searchbox = ({placeholder,handelchange})=>(
    <input 
    className="search"
    type='search' 
    placeholder={placeholder}
    onChange = {handelchange}     
     />
);  