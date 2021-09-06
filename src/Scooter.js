import React, { Component } from "react";


function Scooter(props) {

  const classes=['card']
if (props.scooter.marked) {

  classes.push('marked')
}

  return (
    <div className={classes.join(' ')} onClick={props.onMark}>
      <h3>Наименование: {props.scooter.name}</h3>
      <p>Заряд: {props.scooter.charge}</p>
      <p> Стоимость: {props.scooter.price}</p>
    </div>
  );
}

class ScooterComp extends Component {
  state = {
    scooters: [
      { marked:false, name: "Lila", charge: "100%", price: "120" },
      { marked:false, name: "LEO", charge: "80%", price: "130" },
      { marked:false, name: "Mario", charge: "70%", price: "150" },
      { marked:false, name: "Mario1", charge: "70%", price: "150" },
      { marked:false, name: "Mario2", charge: "20%", price: "120" },
      { marked:false, name: "Mario3", charge: "60%", price: "140" },
      { marked:false, name: "Mario4", charge: "80%", price: "110" },
    ],
  }
handleMarked(name) {
const scooters=this.state.scooters.concat()
const scooter=scooters.find(c=> c.name===name)
scooter.marked =!scooter.marked
this.setState({scooters})
}
  
renderScooter(){

    return this.state.scooters.map(scooter => {
        return (
        <Scooter
         scooter={scooter} 
          key={scooter.name+Math.random()}
          onMark={this.handleMarked.bind(this,scooter.name)}
          />
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
