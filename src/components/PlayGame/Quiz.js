import getData from "../../utils/data_helpers"
import React from "react"
import Timer from "./Timer"
import '../App/App';

export default function Quiz(props) {
    const [jsonData, setJsonData] = React.useState(null)
    const [index, setIndex] = React.useState(0);
    const [timeLeft, setTimeLeft] = React.useState(15)
   
    React.useEffect(() => {
        getData().then(results => setJsonData(results))
    }, []);
    
    if (!jsonData) {
        return <h3>...Loading</h3>;
    }
  
    const currentQuestion = jsonData.results[index]
    const question = currentQuestion.question;
    const correct_answer = currentQuestion.correct_answer;
    const incorrect_answers = currentQuestion.incorrect_answers;
    const choices = [correct_answer, ...incorrect_answers]
    

    var shuffledChoices = choices.sort(() => Math.random() - 0.5)

    function checkAnswer(event){
        
        // if selected answer = correct answer 
        //  then change background of button to green
        //  else if wrong background of button to red
        if (event.target.textContent === correct_answer) {
            event.target.className = "green";
            setTimeLeft(timeLeft + 5);
            props.setScore(props.score + 1)
            
        } else {
            event.target.className = "red";
            setTimeLeft(timeLeft - 2);
        }
    }

    return (
        <main className="quiz">
            <Timer timeLeft={timeLeft} setTimeLeft={setTimeLeft} setGameState={props.setGameState}/>
            { index === 0 ? <h1>Whale hello there, {props.username}!</h1> : null }
            { index < 9 ? <h2><span>{index + 1}.<span dangerouslySetInnerHTML={{__html: question}} /></span></h2> : 
            props.setGameState("gameOver")
            }
            
            {shuffledChoices.map(choice => (
                <button onClick ={(event) =>{
                    checkAnswer(event)
                    setIndex(index + 1)
                }
                
                }>{choice}</button>
               
            ))}
             <h2><span>SCORE:{props.score}</span></h2>
        </main>
    )
}
