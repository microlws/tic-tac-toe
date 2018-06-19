import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
      this.state = {
        tiles: Array(9).fill(null),
    }
  }
  handleClick(index){
    let newTiles = this.state.tiles
    newTiles[index] = "X"
    this.setState({
      tiles: newTiles
    })
    console.log(this.state.tiles)
    //console.log(index)
  }

  render() {
    const Tiles = this.state.tiles.map((box, index) => <div className='Main__Board-tiles' key={index} onClick={() => this.handleClick(index)}>{Tiles}</div> )
      return (
        <div className='Main'>
           <h1 className='Main__Title'>Tic Tac Toe App</h1>
          <div className='Main__Board'>
             {Tiles}      
          </div>
        </div>   
    );
  }
}

export default App;
