import { useState } from "react";
import axios from "axios";


//Style
import "./Home.style.css";

//Components
import Header from "./components/Header";
import Body from "./components/Body";
import Search from "./components/Search";
import SearchItem from "./components/SearchItem";

const Home = () => { 

    const [error, setError] = useState(true);
    const [city, setCity] = useState({});

    const api_key = "Your_api_key";

    const changeInput = (query) => {
        axios
        .get(`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${api_key}`)
        .then((message) => {
            if(message.data.cod === 200) {
                setError(false);
                setCity(
                    {"id": message.data.id, "name": message.data.name, "country": message.data.sys.country}
                );
            }
            console.log(message);
        })
        .catch(() => setError(true));
    }
    
    return(
        <div className="Home">
            <Header title="iWeather" />
            <Body />
            <Search changeInput={changeInput} />
            <div className="SearchItems">
                {
                    !error ? <SearchItem id={city.id} text={`${city.name} - ${city.country}`} /> 
                    :
                    <></>
                }
            </div>
        </div>
    );
}

export default  Home;