import { useState, useEffect } from "react";

import "./Search.style.css";

const Search = ({changeInput}) => {

    const [inputValue, setInputValue] = useState("");

    useEffect(() => {
        changeInput(inputValue);
    }, [inputValue]);


    const handleInputChange = (event) => setInputValue(event.target.value);

    return(
        <div className="Search">
            <input 
                type="text" 
                placeholder="Search location" 
                onChange={handleInputChange}  
            />
        </div>
    );
}

export default Search;