import React from "react"

// correct_answer +5
// incorrect_answers -2
export default function Timer(props) {
    // const [timePlus, setTimePlus] = React.useState(null)
    // const [minusTime, setMinusTime] = React.useState(null)

    // const [timeLeft, setTimeLeft] = React.useState(15)

    React.useEffect(() => {
        //  if there is not timeLeft then game over?
        if (props.timeLeft <= 0) props.setGameState("gameOver");
        // else create set interval function for every second
        const intervalId = setInterval(() => {
                props.setTimeLeft(props.timeLeft - 1)
            }, 1000);
        return () => clearInterval(intervalId)
    }, [props.timeLeft])

    return (
   
        <div>
            <h1>{props.timeLeft}</h1>
             <label for="game">progress:</label>
             <progress id="game" value={props.timeLeft} max="30"> {props.timeLeft} </progress>
       
        </div>
        
    )

}


// function AlterTimer() {
//     const [alterTimer, setAlterTimer] = React.useState(0)

//     React.useEffect(() => {
//         if (props.correct_answer) {
//             setAlterTimer(timeLeft + 5)
//         } else {
//             setAlterTimer(timeLeft - 2)
//         }
//     })
// }

/*




 */