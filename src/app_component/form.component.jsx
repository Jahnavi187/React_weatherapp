import React from 'react';
import "./form.style.css";
const Form = props => {
    return (
        <div className="container">
            <h1>Weather App</h1>
            <form onSubmit={props.loadweather} >
                <div className="row">

                    <div className="col-md-3 offset-md-2">
                        <input type="text" className="from-control" name="city" autoComplete="off" placeholder="City"></input>
                    </div>
                    <div className="col-md-3">
                        <input type="text" className="from-control" name="country" autoComplete="off" placeholder="Country"></input>

                    </div>
                    <div className="col-md-3 mt-md-0 text-md-left">
                        <button className="btn btn-dark">Get weather</button>
                    </div>
                </div>
            </form>
        </div>
    );
};
export default Form