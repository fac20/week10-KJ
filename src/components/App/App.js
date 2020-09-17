import React from 'react';


import StartGame from "../StartGame/StartGame"
import Quiz from "../PlayGame/Questions"
// import logo from './logo.svg';
import './App.css';

function App() {
  const [username, setUser] = React.useState("")
  const [gameStarted, setGameStarted] = React.useState(false)

  return (
    <div className="App">
     { gameStarted ?  <Quiz/> : <StartGame username={username} setUser={setUser} setGameStarted={setGameStarted} /> }
    

    </div>
  );
}

export default App;

