/* Imports the React library to be used on the page */
import React from "react";



/* Retrieves file as a variable */
var myTxt = require("./Rules.txt");

/* Creates a React Class Component */
class TextFileReader extends React.Component {
    /* Initiates component properties */
    constructor(props) {
        /* Inherits parent properties */
        super(props);
        /* Sets the intitial state of text to an empty string */
        this.state = {
            text: ""
        };
    }

    /* Initializes once a component is inserted */
    componentDidMount() {

        /* Executes function with retrieved file */
        this.readTextFile(this.props.txt);
    }

    /* Creates function */
    readTextFile = () => {

        /* Sets a variable that can render information of specific data instead of the whole page */
        var aboutFile = new XMLHttpRequest();
        /* Opens file that has been retrieved */
        aboutFile.open("GET", myTxt, false);
        aboutFile.onreadystatechange = () => {
            /* Executes once state is ready */
            if (aboutFile.readyState === 4) {
                if (aboutFile.status === 200 || aboutFile.status == 0) {
                    var allText = aboutFile.responseText;
                    this.setState({
                        /* Changes the state of text */
                        text: allText
                    });
                }
            }
        };
        aboutFile.send(null);
    };

    /* Renders the information to Web readable format */
    render() {
        return (
            /* Creates a div box */
            <div>
			     {/* Converts text to heading 2 format*/}
				<h2 id="Title">RULES</h2>
			     {/* Displays the state of text. Mapping each string value and displaying it */}
				{this.state.text.split("\n").map((item, key) => {
					return <span id = "rules" key={key}>{item}<br /></span>;
				})}
			</div>
        );
    }
}

/* Makes component able to be imported to other files */
export default TextFileReader;