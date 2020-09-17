// import datahelpers stuff 
import getData from "../../utils/data_helpers"
import React from "react"

export default function Quiz() {
    const [jsonData, setJsonData] = React.useState(null)
    // const []
  
    console.log(jsonData)

    
    React.useEffect(() => {
        getData().then(results => setJsonData(results))
    }, []);
    
    if (!jsonData) {
        return <h3>...Loading</h3>;
    }
    const currentQuestion = jsonData.results[0]
    const question = currentQuestion.question;
    const correct_answer = currentQuestion.correct_answer;
    const incorrect_answers = currentQuestion.incorrect_answers;
    
    return (
        <main>
            
            <h1>Welcome, {props.username}!</h1>
            <h2>{question}</h2> 
            <ul>{correct_answer}</ul>
            <p>{incorrect_answers}</p>
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