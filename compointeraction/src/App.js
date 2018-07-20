import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserInput from './UserInput';

class App extends Component {


  state={
    name:'dummyName',
    age:23
  }

  usernameHandler=(event)=>{

    this.setState(
      {
        name:event.target.value,
        age:25
      }
    )
  }

  func=(event)=>{
    
    this.setState(
      {
        name:event.target.value,
        age:25
      }
    )
  }
  render() {
    return (
      <div>
          <h1>ENTER THE USER NAME TO DISPLAY </h1>
          <UserInput username={this.usernameHandler}> randi hai tu {this.state.name}</UserInput>

          {/* <input type="text" onChange={this.func}></input> */}
          <h4>Hello my name is {this.state.name} and i am {this.state.age} years old.</h4>
      </div>
    );
  }
}

export default App;
