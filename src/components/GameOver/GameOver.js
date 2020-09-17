import React from "react"


export default function GameOver(props) {
    return (
        <div>
            <h1>GAME OVER!!! How Hawkward...</h1>
            <h2>You Scored {props.score}!</h2>
            <button 
            onClick={() => props.setGameState("started")
            }>Start Again!</button>
            <button 
            onClick={() => props.setGameState("notStarted")
            }>Get me Otter here!!</button>
        </div>
       
    )
}