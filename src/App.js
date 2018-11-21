import React, { Component } from 'react';
import './App.css';
import Radium from 'radium';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons:[
      {id: 1, name: 'Governor', age: 60},
      {id: 2, name: 'Foo', age: 70}
    ],
    showState: false
  };
  toggleStateHandler = () => {
    const state = this.state.showState;
    this.setState({showState: !state});
  }
  deleteNameHandler = (index) => {
    const persons = this.state.persons;
    persons.splice(index, 1);
    this.setState({persons: persons});
  }
  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(person => {
      return person.id === id;
    });
    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons});
  }
  render() {
    let style = {
      width: '100px',
      height: '40px',
      border: '3px solid black',
      borderRadius: '5px',
      backgroundColor: 'green',
      color: 'white',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    }
    let persons = null;
    if(this.state.showState) {
      persons = (
        <div>
        {this.state.persons.map((person, index) => {
          return(
            <Person name={person.name} age={person.age} key= {person.id} click={this.deleteNameHandler.bind(this, index)} change={(event) => this.nameChangeHandler(event, person.id)}/>
          )
        })}
        </div>
      );
      style.backgroundColor = 'red';
    }
    return (
      <div className="App">
          <button onClick={this.toggleStateHandler} style={style}>Click me</button>
          {persons}
      </div>
    );
  }
}

export default Radium(App);
