import React, { Component } from 'react';
import './App.css';
import { getReservations } from '../apiCalls';

class App extends Component {
  constructor () {
    super();
    this.state = {
      
    }
  }


  componentDidMount = async () => {
    try {
      const reservations = await getReservations();
      this.setState({ reservation: reservations})
    } catch(error) {
      this.setState({ error: error })
    }

  }


  render() {
    console.log(this.state)
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>

        </div>
        <div className='resy-container'>
          
        </div>
      </div>
    )
  }
}

export default App;
