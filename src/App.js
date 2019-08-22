/* Calls the React Library to be used */
import React from 'react';
/* Calls Style sheet to style elements rendered */
import './App.css';
/* Calls Component from a Js file */
import Heading from "./Components/Heading.js";
import Ticket from "./Components/Ticket.js";
import Draw from "./Components/Draw.js";
import Rules from "./Components/Rules.js";


class App extends React.Component {
    /* Initializes data */
    constructor() {
        /* Inherits the parent information */
        super();
        /* Sets the default properties of a state */
        this.state = {
            choiceVals: "",
            userSelect: "",
            luckyDraw: "",
            winOrLose: "",
            startOrTry: true
        }

    }

    /* Creates a function */
    ChoiceClick = (e) => {
        /* Creates a variable that stores the value of target element */
        const selectedBtn = e.target.value;

        /* Updates the state with new values  */
        this.setState({
            choiceVals: selectedBtn,
            userSelect: selectedBtn
        })
    }

    /* Creates a function */
    chanceDraw = () => {
        /* Creates a counter variable */
        let count = 0
        /* Creates a function that executes every 2 seconds */
        const outcomeChance = setInterval(() => {
            /* Creates a variable that stores an array */
            const chanceBall = ["1", "2", "3", "4", "5"]
            /* Sets a variable with a randomly chosen value in the array */
            var outcomeBall = chanceBall[Math.floor(Math.random() * 3)]
            /* Increments the counters value*/
            count++
            /* Updates the state with new values  */
            this.setState({
                luckyDraw: outcomeBall
            })
            /* Once the counter reaches the value of three of the corresponding conditions executes*/
            if (count == 1) {
                /* Stops the execution of the function */
                clearInterval(outcomeChance);
                /* Checks if the two states match an executes corresponding conditional statement */
                if (this.state.choiceVals == this.state.luckyDraw) {
                    /* Updates the state with new values  */
                    this.setState({
                        choiceVals: "",
                        winOrLose: "You Win!",
                        startOrTry: false
                    })
                } else {
                    /* Updates the state with new values  */
                    this.setState({
                        choiceVals: "",
                        winOrLose: "You Lose!",
                        startOrTry: false
                    })
                }
            }
            /* Sets the timer of the setInterval to 2 seconds */
        }, 2000)
    }

    render() {
      /* Creates a variable that stores the components and it's properties as an array */
      const compList = [
            /* Calls the component */
            <Heading/>,
            <Rules/>,
            /* Sets functions and states as properties specified on the component */
            <Ticket 
              onClick = {this.ChoiceClick}
              choiceValues = {this.state.choiceVals}
            />,
            <Draw 
              onClick = {this.chanceDraw} 
              chanceValues = {this.state.luckyDraw} 
              choiceValues = {this.state.userSelect} 
              outcome = {this.state.winOrLose}
              startOrTry = {this.state.startOrTry}
            />
      ]
        /* Executes and displays data */
        return (
            /* Creates a div box */
            <div className="App">
                {/* Takes the arrays values and starts pushing them between the specified elements */}
                {compList.map((index) =>
                   <div>{index}</div>
                )}
            </div>
        );
    }
}

/* Allow the component to be called and used on other pages */
export default App;