import React from 'react';
import GameOver from "../GameOver/GameOver"

import StartGame from "../StartGame/StartGame"
import Quiz from "../PlayGame/Quiz"
// import logo from './logo.svg';
import './App.css';

function App() {
  const [username, setUser] = React.useState("")
  const [gameState, setGameState] = React.useState("notStarted")

  return (
    <div className="App">
     { gameState === "notStarted" ? <StartGame username={username} setUser={setUser} setGameState={setGameState}/> :
     gameState === "started" ? <Quiz  username={username} setGameState={setGameState}/> :
    <GameOver /> 
     }
{/*     
      {gameState === “notStarted” ? <StartGame />
      : gameState === “started” ? <Quiz />
      : <GameOver />} 
    */}

    </div>
  );
}

export default App;

