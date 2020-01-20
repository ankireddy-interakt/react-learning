import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props=> {
 const [personsState, setPersonsState] = useState({
  persons :[
    {name:'Anki Reddy', age:25},
    {name: 'Rauda ', age: 27},
    {name: 'virat', age: 30}
  ],
  otherState:'Some other state!'
})

const swichNameHandler = ()=>{
  setPersonsState({persons :[
    {name:'Anki', age:25},
    {name: 'Radra ', age: 27},
    {name: 'virat', age: 30}
  ]})
}

    return (
      <div className="App">
        <h1> Im react App</h1>
         <button onClick={swichNameHandler}>Swich name</button> 
        <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
        <Person na me={personsState.persons[1].name} age={personsState.persons[1].age} />
        <Person name={personsState.persons[2].name} age={personsState.persons[2].age} > My hobbies are playing games </Person>
      </div>
    );
    // return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'Welcome to react js!'))
}

export default app;

// state ={
//   persons :[
//     {name:'Anki Reddy', age:25},
//     {name: 'Rauda ', age: 27},
//     {name: 'virat', age: 30}
//   ],
//   otherState:'Some other state!'
// }

// swichNameHandler = ()=>{
// this.setState({persons :[
//   {name:'Anki', age:25},
//   {name: 'Radra ', age: 27},
//   {name: 'virat', age: 30}
// ]})
// }
