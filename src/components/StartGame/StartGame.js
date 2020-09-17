import React from "react";

// Display a card that has an input for entering your username 
// and a "start Game" button


// const [gameStarted, setGameStarted] = React.useState(false)
export default function StartGame(props){
    //  set a global state eg gamestarted
    
    return (
        <div>
       <h1>How Seal-y!</h1>
        <form>
        <label htmlFor="username">Enter Username</label>
        <input
            required
            name="username"
            id="username"
            value={props.username}
            onChange ={(event) => props.setUser(event.target.value)}
        />
        <input type="submit" value="Start Game"
            onClick={() => props.setGameState("started")}
        
        />
        </form>
        {/* <img src="https://i.dailymail.co.uk/1s/2019/01/19/00/8715018-0-image-a-32_1547857542694.jpg" /> */}
        </div>
    );
}



