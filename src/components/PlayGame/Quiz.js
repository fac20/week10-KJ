// import datahelpers stuff 
import getData from "../../utils/data_helpers"
import React from "react"

export default function Quiz(props) {
    const [jsonData, setJsonData] = React.useState(null)
    const [index, setIndex] = React.useState(0);

    console.log("index", index)
    
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
   console.log("correct answer" , correct_answer)
    function checkAnswer(event){
        
        // if selected answer = correct answer 
        //  then change background of button to green
        //  else if wrong background of button to red

        // event.target is the clicked button
        // event.target.value should be words
        if (event.target.textContent === correct_answer) {
            event.target.className = "green";
        } else {
            event.target.className = "red";
        }
    }
    /*
    function createInnerHtml(){
        return {__html: question}
        dangerouslySetInnerHTML={createInnerHtml()
    }
    */
    


    return (
        <main>

            { index === 0 ? <h1>Welcome, {props.username}!</h1> : null }
            {/* <div dangerouslySetInnerHTML={Quiz()} />; */}
            <h2>{index}.{question}</h2> 
            {choices.map(choice => (
                <button onClick ={(event) =>{
                    checkAnswer(event)
                    setIndex(index + 1)
                }
                
                }>{choice}</button>
            ))}

        </main>
    )
}





// create function 
/*
- should get animals data
"results": [
    {
      "category": "Animals",
      "type": "boolean",
      "difficulty": "easy",
      "question": "The Axolotl is an amphibian that can spend its whole life in a larval state.",
      "correct_answer": "True",
      "incorrect_answers": [
        "False"
      ]
    },
    {
      "category": "Animals",
      "type": "multiple",
      "difficulty": "hard",
      "question": "What was the name of the Ethiopian Wolf before they knew it was related to wolves?",
      "correct_answer": "Simien Jackel",
        "incorrect_answers": [
        "Ethiopian Coyote",
        "Amharic Fox",
        "Canis Simiensis"
    ]
    }
- keep tab of questions using useState() 
- which will be initialised with the first question in the api 
- create choices variable - whcih will have true and false answers
- counter var- tab of how many question  the user has attempted/has been rendered
- render 2 sections - 1 with questions and another with choices
- render timer bar which we will import from timer.js




*/