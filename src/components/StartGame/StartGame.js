import React from "react";

// Display a card that has an input for entering your username 
// and a "start Game" button


// const [gameStarted, setGameStarted] = React.useState(false)
export default function StartGame(props){
    //  set a global state eg gamestarted
    
    return (
        <form>
        <label htmlFor="username">Enter your Username</label>
        <input
            required
            name="username"
            id="username"
            value={props.username}
            onChange ={(event) => props.setUser(event.target.value)}
        />
        <input type="submit" value="Start Game"
            onClick={() => props.setGameStarted(true)}
        
        />
        </form>

    );
}



