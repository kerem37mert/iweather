import { Link } from "react-router-dom";

import "./SearchItem.style.css";

const SearchItem = ({id, text}) => {
    return(
        <div className="SearchItem">
            <Link to={`/weather/${id}`}>
                {text}
            </Link>
        </div>
    );
}

export default SearchItem;