import React from "react";
import "../App/App.css";

export default function StartGame(props){    
    return (
        <div className="start_game">
       <h1>How Seal-y!</h1>
        <form>
        <label htmlFor="username">Enter Username</label>
        <input
            required
            name="username"
            id="username"
            placeholder="Toucan play this game..."
            value={props.username}
            onChange ={(event) => props.setUser(event.target.value)}
        />
        <input type="submit" value="Start Game"
            onClick={() => props.setGameState("started")}
        
        />
        </form>
        </div>
    );
}



