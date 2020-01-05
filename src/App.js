import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Im react App</h1>
        <Person name="Anki Reddy" age="25" />
        <Person name="Ankit" age="29" />
        <Person name="Akira" age="27" > My hobbies are playing games </Person>
      </div>
    );
    // return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'Welcome to react js!'))
  }
}

export default App;
