import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import "./Weather.style.css";

const Weather = () => { 

    const { cityId } = useParams();

    const [cId, setcId] = useState(null);
    const [error, setError] = useState(false);
    const [weatherData, setWeatherData] = useState({});

    useEffect(() => {
        setcId(cityId);
        console.log(cityId);
    }, []); 

    const api_key = "Your_api_key"; 

    useEffect(() =>  {
        axios
        .get(`http://api.openweathermap.org/data/2.5/forecast?id=${cId}&appid=${api_key}&cnt=5`)
        .then(message => {

                setError(false);    
                setWeatherData(message.data);
                console.log(weatherData);
            
        });
    }, [cId]); 

    return(
        <div className="Weather">
            fjshjsfd
        </div>
    );
}

export default Weather;