import React, { Component } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export default class App extends Component {
  state = {
    startDate: new Date(),
  };

  handleChange = (date) => {
    this.setState({
      startDate: date,
    });


    state = {
        startDate: new Date(),
        availableDates: ["2023-04-09","2023-04-11"]
      };
    
      showAvailability = () => {
        return this,state.availableDates.map((date)=> new Date(date));
      };

  };
  render() {
    return (
      <div style={center}>
        {" "}
        DatePicker:
        <br></br>
        <DatePicker
          selected={this.state.startDate}
          onChange={this.handleChange}
          includeDates={this.showAvailability}
        />
      </div>
    );
  }
}

const center = {
  position: "fixed" /* or absolute */,
  top: "50%",
  left: "50%",
  marginTop: "-50px",
  marginLeft: "-100px",
};