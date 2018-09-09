import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOut from './UserOutput/UserOut';

class App extends Component {
  state = {
    outs: [
      { userName: 'catmom666', age: 28 },
      { userName: 'natalie.todd', age: 27 },
      { userName: 'eenaanee', age: 30 }
    ],
  }

  switchAgeHandler = (newAge) => {
    this.setState = ({
      outs: [
        { userName: 'catmom666', age: 28 },
        { userName: 'natalie.todd', age: 27 },
        { userName: 'eenaanee', age: newAge }
      ],
    })
  }
  render() {
    return (
      <div className="App">
        <UserOut
          userName={this.state.outs[0].userName}
          age={this.state.outs[0].age} />
        <UserOut
          userName={this.state.outs[1].userName}
          age={this.state.outs[1].age} />
        <UserOut
          userName={this.state.outs[2].userName}
          age={this.state.outs[2].age}
          click={this.switchAgeHandler.bind(this, '27.5')} />
      </div>
    );
  }s
}
export default App;
