import React, { Component } from "react";

class ReservationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      date: "",
      time: "",
      number: "",
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const newReservation = {
      id: this.props.reservations.length + 1,
      name: this.state.name,
      date: this.state.date,
      time: this.state.time,
      number: +this.state.number,
    };
    this.props.saveReservation(newReservation);
    this.clearInputs();
  };

  clearInputs = () => {
    this.setState({ name: "", date: "", time: "", number: "" });
  };

  render() {
    return (
      <form className="form">
        <input type="text" name="name" placeholder="Name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <input type="text" name="date" placeholder="Date (mm/dd)"
          value={this.state.date}
          onChange={this.handleChange}
        />
        <input type="text" name="time" placeholder="Time"
          value={this.state.time}
          onChange={this.handleChange}
        />
        <input type="number" name="number" placeholder="Number of guests"
          value={this.state.number}
          onChange={this.handleChange}
        />
        <button onClick={this.handleSubmit}>Make Reservation</button>
      </form>
    );
  }
}

export default ReservationForm;