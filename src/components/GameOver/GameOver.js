import React from "react"
import "./gameOver.css"
import arf from "./arf-arf.mp3"
export default function GameOver(props) {
    return (
        <div class="game__over">
            <audio  src={arf} id="my_audio" loop autoPlay />
            <h1>GAME OVER!!!<br /> How Hawkward...</h1>
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