
import "./current-weather.css"


const CurrentWeather = ({ data }) => {



    // Add Nmae of the day 
    // const dayiInAWeek = new Date().getDay()
    //     console.log(dayiInAWeek)
    //     console.log(typeof(dayiInAWeek))
    // const today = (dayiInAWeek)=>{
        
    //     if(dayiInAWeek===1){
    //         return "Monday"
    //     }
    //     else if(dayiInAWeek===2){
    //         return "Tuesday"
    //     }
    //     else if(dayiInAWeek===3){
    //         return"Wednesday"
    //     }
    //     else if(dayiInAWeek===4){
    //         return"Thursday"
    //     }
    //     else if(dayiInAWeek===5){
    //         return"Friday"
    //     }
    //     else if(dayiInAWeek===6){
    //         return"Saturday"
    //     }
    //     else if(dayiInAWeek===7){
    //         return"Sunday"
    //     }
        
    //}
    //console.log(today)

    // Date and Month
    let date = new Date().getDate()
    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    let name = month[new Date().getMonth()];


    return (
        <div className="weather">
            <div className="top">
                <div>
                    <p className="city">{data.city}</p>
                    <p className="weatherDescription">{data.weather[0].description}</p>
                    <p>{date}th {name}</p>
                </div>
                <img alt="weather" className="weatherIcon" src={`icons/${data.weather[0].icon}.png`} />
            </div>
            <div className="bottom">
                <p className="temperature">{Math.round(data.main.temp)}°C</p>
                <div className="details">
                    <div className="parameter-row">
                        <span className="parameter-label">Details</span><br />
                    </div>
                    {/* <div className="parameter-row">
                        <span className="parameter-label">Day</span>
                        <span className="parameter-value">{today}</span>
                    </div> */}
                    <div className="parameter-row">
                        <span className="parameter-label">Feels Like</span>
                        <span className="parameter-value">{(Math.round(data.main.feels_like)) + 1}°C</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Wind</span>
                        <span className="parameter-value">{data.wind.speed} m/sec</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Humidity</span>
                        <span className="parameter-value">{data.main.humidity}%</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Pressure</span>
                        <span className="parameter-value">{data.main.pressure} hPa</span>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default CurrentWeather