import React from 'react';
import "./Form.css";

function Input(props) {
        return(
            <div className="input">
                <input/>
                <button onClick={props.onClick}>Guess</button>
            </div>
        );
}

export default Input;