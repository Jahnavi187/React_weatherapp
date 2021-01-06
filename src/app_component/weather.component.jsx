import React from 'react'
const Weather = (props)=> {
    return(
        <div className="container">
        
            <div className="cards">
            
                <h1>{props.city}</h1>
                <h5 className="py-4">
                <h3>Will give accurate results just  in few seconds </h3>
                <i className ={`wi ${props.weatherIcon} display-1`}></i>
                </h5>
                
                {props.temp_celsius ?(<h1 className="py-2"> {props.temp_celsius}&deg;C</h1>) :null}
                {/**show the min and max temp */}
                {minmaxTemp(props.temp_min,props.temp_max)}
                <h4 className="py-3">{props.description}</h4>
                {/* Wind Speed */}
        { props.wind_speed ? (
        <h4 className="text-black py-2">Wind Speed : {props.wind_speed} mph</h4> 
        ) : null}
            </div>
        </div>

    );
}
function minmaxTemp(min,max){
  if(min&&max){
    return(<h3>
      <span className="px-4">{min}&deg;C</span>
      <span className="px-4">{max}&deg;C</span>
    </h3>);
  }
      
  
  }
export default Weather