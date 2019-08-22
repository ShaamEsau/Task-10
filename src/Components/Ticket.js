/* Calls the React and Route Library to be used */
import React from "react";
/* Calls Style sheet to style elements rendered */
import '../App.css';


/* Creates a variable that stores an array of objects */
const valueOfChoices = [{name: "One", value: 1},{name: "Two" , value: 2},{name: "Three" , value: 3}, {name : "Four", value : 4}, {name : "Five", value : 5}]

/* Creates Class Component */
class Ticket extends React.Component {
	render(){
	/* Executes data */	
	return (
		/* Creates a div box */
		<div>
			{/* Converts text to heading format 3 */}
			<h3>Select Your Number!</h3>
			{/* Takes the values of an array and executes element containing the values */}
			{valueOfChoices.map((val, key) =>
				<div id = "chanceBtns"  key={key++}>
					{/* Creates a button that takes the value of the keys value in the array and calls a function to be executed on click */}
					<button id = "valueBtn" value = {val.value} onClick = {this.props.onClick} >{val.value}</button>
					<br/>
				</div>
			)}
			{/* Converts text to heading format 4  */}
			<h4>Selected Number : {this.props.choiceValues}</h4>
		</div>

	)
}
}
/* Allow the component to be called and used on other pages */
export default Ticket;

