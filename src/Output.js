import React from "react";
import "./Output.css"

function Output(props) {
        return(
            <div className="output">
                <p>{props.temperature}</p>
                <p>Guess #<span>{props.historyGuesses.length+1}</span></p>
                <p>Numbers guessed: <span>{props.formatedString}</span></p>
            </div>
        );
}

export default Output;