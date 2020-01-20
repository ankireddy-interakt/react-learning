import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state ={
      persons :[
        {name:'Anki Reddy', age:25},
        {name: 'Rauda ', age: 27},
        {name: 'virat', age: 30}
      ],
      otherState:'Some other state!'
  }

  swichNameHandler = ()=>{
    this.setState({persons :[
      {name:'Anki', age:25},
      {name: 'Radra ', age: 27},
      {name: 'virat', age: 30}
    ]})
  }

  render() {
    return (
      <div className="App">
        <h1> Im react App</h1>
        <button onClick={this.swichNameHandler}>Swich name</button> 
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} > My hobbies are playing games </Person>
      </div>
    );
    // return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'Welcome to react js!'))
  }
}

export default App;
