// Component name start with Capital letter
import { Accordion, 
        AccordionItem, 
        AccordionItemButton, 
        AccordionItemHeading, 
        AccordionItemPanel 
    } from "react-accessible-accordion"

import './forecast.css'

const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

const Forecast = ({ data }) => {
    const dayiInAWeek = new Date().getDay()
    const forecastDays = WEEK_DAYS.slice(dayiInAWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayiInAWeek))   //Slice dont change original array
    
    // let date = new Date().getDate()
    // const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    // let name = month[new Date().getMonth()];

    return (
        <>
            <label className="title">Daily Forecast</label>
            <Accordion allowZeroExpanded>
                {data.list.splice(0, 7).map((item, idx) => (
                    <AccordionItem key={idx}>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                <div className="daily-item">
                                    <img alt="weather" className="icon-small" src={`icons/${item.weather[0].icon}.png`} />
                                    <label className="day">{forecastDays[idx]}</label>
                                    <label className="description">{item.weather[0].description}</label>
                                    <label className="min-max">
                                        {Math.round(item.main.temp_min)}°C /{" "}
                                        {Math.round(item.main.temp_max)}°C 
                                    </label>
                                </div>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <div className="daily-deatils-grid">
                                <div className="daily-deatils-grid-item">
                                    <label>Pressure</label>
                                    <label>{item.main.pressure}hPa</label>
                                </div>
                                <div className="daily-deatils-grid-item">
                                    <label>Humidity</label>
                                    <label>{item.main.humidity} %</label>
                                </div>
                                <div className="daily-deatils-grid-item">
                                    <label>Clouds</label>
                                    <label>{item.clouds.all}</label>
                                </div>
                                <div className="daily-deatils-grid-item">
                                    <label>Wind Speed</label>
                                    <label>{item.wind.speed} m/s</label>
                                </div>
                                <div className="daily-deatils-grid-item">
                                    <label>Feels like</label>
                                    <label>{Math.round(item.main.feels_like)+1} °C</label>
                                </div>
                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>
                ))}
            </Accordion>
        </>
    )
}

export default Forecast;