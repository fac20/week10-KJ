import React from 'react';

import StartGame from "../StartGame/StartGame"
// import logo from './logo.svg';
import './App.css';

function App() {
  // const [userData, setUserData] = React.useState(null);
  const [username, setUser] = React.useState("")
  // React.useEffect(() => {
  //   const username = "";
    
  // })
  return (
    <div className="App">
      <StartGame username={username} setUser={setUser}/>

    </div>
  );
}

export default App;
