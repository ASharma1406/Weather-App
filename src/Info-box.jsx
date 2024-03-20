import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./Info-box";
//to import icons
import AcUnitIcon from '@mui/icons-material/AcUnit'; //cold icon
import ThunderstormIcon from '@mui/icons-material/Thunderstorm'; //rain icon
import WbSunnyIcon from '@mui/icons-material/WbSunny'; //sun icon

import "./index.css";




export default function InfoBox({ info }) {
    const IMG_URL = 
    "https://images.unsplash.com/photo-1580193769210-b8d1c049a7d9?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"; 

    const HOT_URL = 
    "https://media.istockphoto.com/id/1254065595/photo/hot-summer-or-heat-wave-background.webp?b=1&s=170667a&w=0&k=20&c=3pJ8IywW-9H-bcZ2XNGG0EaKwYiWD3XdMLC-mAC6dFI=";
    
    const COLD_URL = 
    "https://plus.unsplash.com/premium_photo-1670604649107-a0171e5f1bd0?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    
    const RAIN_URL = 
    "https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.jpg?s=612x612&w=0&k=20&c=lNvbIw1wReb-owe7_rMgW8lZz1zElqs5BOY1AZhyRXs=";

    return (
        <div className="Info-box">
            {/* display Card */}
            <div className='cardContainer' >
                <Card sx={{ maxWidth: 345 }} style={{alignContent: "end"}}>
                     <CardMedia sx={{ height: 140 }}
                        image={
                            info.humidity > 80 
                            ? RAIN_URL 
                            : (info.temp > 15) ? HOT_URL 
                            : COLD_URL}
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city} {
                                info.humidity > 80 
                                ? <ThunderstormIcon/>
                                : (info.temp > 15) ? <WbSunnyIcon/>
                                : <AcUnitIcon/>
                                }
                            
                        </Typography>
                        <Typography variant="body2" color="text.secondary" component={"span"}>
                            <div>Temperature : {info.temp}&deg;C</div>
                            <div>Humidity : {info.humidity}</div>
                            <div>Maximum Temperature : {info.tempMax}&deg;C</div>
                            <div>Minimum Temperature : {info.tempMin}&deg;C</div>
                            <div>The Weather can be described as <i>{info.weather}</i> and feels like as <i>{info.feelsLike}&deg;C</i></div>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
            
            
        </div>
    )
}