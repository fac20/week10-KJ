import React from "react";

// Display a card that has an input for entering your username 
// and a "start Game" button

export default function StartGame(props){
    //  create state variables and initialise the value
 console.log(props.username)

    // 
        //   const submitUser = (event) => {
        //       if(event = "submit") {
        //         props.setUser(event.target.value)
        //       }
        //     //  set username variable's value to what the user inputs
            
        //     // start game
        // }
    
    // React.useEffect(() => {
    //     // write event handler function
  
    //     // add event handler to page
    //     window.addEventListener("submit", submitUser)
    //     // remove event handler
    //     return () => window.removeEventListener("submit", submitUser)
        
    // }, [])
    
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
        <input type="submit" value="Start Game"/>
        </form>

    );
}



// function Button() {

{/* <button onClick={(event) => props.setUser(event.target.value)}>
Submit
</button> */}
// }


