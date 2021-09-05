import React, { Component } from "react";
import "./App.css";

function Scooter(props) {
  return (
    <div className="card">
      <h3>Наименование: {props.scooter.name}</h3>
      <p>Заряд: {props.scooter.charge}</p>
      <p> Стоимость: {props.scooter.price}</p>
    </div>
  );
}

class ScooterComp extends Component {
  state = {
    scooters: [
      { name: "Lila", charge: "100%", price: "120" },
      { name: "LEO", charge: "80%", price: "130" },
      { name: "Mario", charge: "70%", price: "150" },
      { name: "Mario1", charge: "70%", price: "150" },
      { name: "Mario2", charge: "20%", price: "120" },
      { name: "Mario3", charge: "60%", price: "140" },
      { name: "Mario4", charge: "80%", price: "110" },
    ],
  }
  
renderScooter(){

    return this.state.scooters.map(scooter => {
        return (
        <Scooter scooter={scooter}  key={scooter.name+Math.random()}/>
      )
    })

}
  render() {
    return (
      <div className="app">
        <div className="list">
          {this.renderScooter()}
        </div>
      </div>
    );
  }
}


export default ScooterComp;
