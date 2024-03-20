import SearchBox from './Search-box.jsx';
import InfoBox from './Info-box.jsx';
import { useState } from 'react';
import "./index.css";

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
            city: "Wonderland",
            feelsLike: 24.94,
            humidity: 27,
            temp: 25.62,
            tempMax: 26.05,
            tempMin: 25.62,
            weather: "haze",  
    });

    let updateInfo = ( newInfo ) => {
        setWeatherInfo( newInfo );
    };

    return (
        <div style={{ textAlign: "center" }} className='bg-red-500'>
            <h2 className='bg-red-500'>Weather App by <i>Aditi</i></h2>
            <SearchBox updateInfo= {updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    );
}