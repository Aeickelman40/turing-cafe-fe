import React, { Component } from 'react';
import './App.css';
import ReservationContainer from '../ReservationContainer'
import { getReservations, postReservation } from '../apiCalls';
import ReservationForm from '../ReservationForm';

class App extends Component {
  constructor () {
    super();
    this.state = { 
      reservations: []
    }
  }


  componentDidMount = () => {
      getReservations()
        .then((reservations) => this.setState({ reservations }))
        .catch((error) => console.log(error))
  }

    saveReservation = (newReservation) => {
      this.setState({
        reservations: [...this.state.reservations, newReservation],
      });
      this.addNewReservation(newReservation);
    };

    addNewReservation = async ({ name, date, time, number }) => {
      postReservation(name, date, time, number)
      .then((response) => response.json())
      .catch((error) => console.log(error))
    }



  render() {
    console.log(this.state)
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>

        </div>
        <div className='resy-container'>
        <ReservationForm
        reservations={this.state.reservations}
        saveReservation={this.saveReservation}
        />
        <ReservationContainer
          reservations={this.state.reservations}
        />
        </div>
      </div>
    )
  }
}

export default App;
