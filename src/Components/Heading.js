/* Calls the React Library to be used */
import React from "react";
/* Calls an image */
import Logo from "../Images/draw.jpg";

/* Creates Functional Component */
const Heading = () => {
	/* Data to be executed and displayed */
	return (
			/* Creates a div box */
			<div>
				{/* Inserts an image using the imported image as the source */}
				<img src = {Logo} id = "Logo" alt = "Logo"/>
				{/* Converts text to heading format 1 and 4 */}
				<h1>Game of Luck</h1>
				{/* Creates a line across the page */}
				<hr/>
				{/* Converts text to heading format 2 */}
				<h2>It's Your Move!</h2>
			</div>
	)
}

/* Allow the component to be called and used on other pages */
export default Heading;