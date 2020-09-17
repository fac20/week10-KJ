import React from 'react';
import GameOver from "../GameOver/GameOver"

import StartGame from "../StartGame/StartGame"
import Quiz from "../PlayGame/Quiz"
// import logo from './logo.svg';
import './App.css';

function App() {
  const [username, setUser] = React.useState("")
  const [gameState, setGameState] = React.useState("notStarted")
  const [score, setScore] = React.useState(0)

  return (
    <div className="bg__image">
     { gameState === "notStarted" ? <StartGame username={username} setUser={setUser} setGameState={setGameState}/> :
     gameState === "started" ? <Quiz  username={username} setGameState={setGameState} score={score} setScore={setScore}/> :
    <GameOver setGameState={setGameState} score={score}/> 
    
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

