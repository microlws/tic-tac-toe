import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='Main'>
         <h1 className='Main__Title'>Tic Tac Toe App</h1>
         <div className='Main__Board'>
            <div className='Main__Board-tiles'>X</div>
            <div className='Main__Board-tiles'>X</div>
            <div className='Main__Board-tiles'>X</div>
            <div className='Main__Board-tiles'>X</div>
            <div className='Main__Board-tiles'>X</div>
            <div className='Main__Board-tiles'>X</div>
            <div className='Main__Board-tiles'>X</div>
            <div className='Main__Board-tiles'>X</div>
            <div className='Main__Board-tiles'>X</div>
         </div>
      </div>   
    );
  }
}

export default App;
