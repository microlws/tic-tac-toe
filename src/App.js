import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
      this.state = {
        board: Array(9).fill("X")
    }
  }
  render() {
    const Box = this.state.board.map(box => <div className='Main__Board-tiles'>{Box}</div> )
      return (
        <div className='Main'>
           <h1 className='Main__Title'>Tic Tac Toe App</h1>
          <div className='Main__Board'>
             {Box}      
          </div>
        </div>   
    );
  }
}

export default App;
