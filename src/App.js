import React from 'react';
import Game from './components/Game'
import './App.css'
export default class App extends React.Component{
  
  render(){
    return(
      <div className="container">
        <h1 >Tic Tak Toe</h1>   
        <div className="game">
          <Game/>
        </div>
       <h4>©Harjot Singh</h4>
       </div>
    )
  }
}
