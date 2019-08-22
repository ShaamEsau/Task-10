/* Calls the React and Route Library to be used */
import React from "react";
/* Calls an image */
import BallOne from "../Images/1Ball.jpg";
import BallTwo from "../Images/2Ball.jpg";
import BallThree from "../Images/3Ball.jpg";
import BallFour from "../Images/4Ball.jpg";
import BallFive from "../Images/5Ball.jpg";


/* Creates a Class Component */
class Draw extends React.Component {
    render() {
        /* Data to be executed */
        return (
            /* Creates a div box */
            <div>
				{/* Converts text to heading format 2 */}
				<h2>Chance Time!</h2>
				{/* Calls the value of the state and Converts text to heading format 3 */}
				<h3 id = "outcome">{this.props.outcome}</h3>
				{/* Calls the value of the state and Converts text to heading format 4 */}
				<h4>The number selected is : { this.props.choiceValues}</h4>
				<h4>The draw is : {this.props.chanceValues}</h4>
				{/* Creates a button that executes a function within the class component and switches between button elements when state is switched from true to false */}
				{ this.props.startOrTry ?( <button id = "initBtn" onClick={this.props.onClick}>Start!</button>) : (<button id = "initBtn" onClick={this.props.onClick}>Try Again!</button> )}
			</div>
        )
    }
}

/* Allow the component to be called and used on other pages */
export default Draw;