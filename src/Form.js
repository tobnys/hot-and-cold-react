import React, { Component } from 'react';
import "./Form.css";
import Output from "./Output";

class Form extends Component {
    constructor(props){
        super(props);
        this.state = {
            currentGuess: "",
            randomValue: Math.round(Math.random()*10),
            historyGuesses: [],
            temperature: "Cold"
        }
    }

    handleSubmit(e){
        e.preventDefault();
        let value = this.state.currentGuess;
        if(value > 10 || value < 0){
            alert("Must be a number between 0-10");
        }
        else {
            console.log(value)
            console.log(this.state.randomValue)
    
            // eslint-disable-next-line
            if(value == this.state.randomValue){
                console.log("correct guess");
                alert("You guessed right!");
            }
            else {
                console.log("wrong guess");
                // eslint-disable-next-line 
                if(value == this.state.randomValue+1 || value == this.state.randomValue-1){
                    this.setState({
                        temperature: "Very hot"
                    })
                }
                // eslint-disable-next-line 
                if(value == this.state.randomValue+2 || value == this.state.randomValue-2){
                    this.setState({
                        temperature: "Hot"
                    })
                }
                // eslint-disable-next-line 
                if(value == this.state.randomValue+3 || value == this.state.randomValue-3){
                    this.setState({
                        temperature: "Cold"
                    })
                }
    
                var newHistoryGuesses = this.state.historyGuesses;
                if(newHistoryGuesses.length > 1){
                    for(var i = 0; i < newHistoryGuesses.length; i++){
                        if(newHistoryGuesses[i] === value){
                            console.log("same number as in array");
                        }
                        else {
                            console.log("not same number, adding to array")
                            newHistoryGuesses.push(value);
                            break;
                        }
                    }
                }
                else {
                    newHistoryGuesses.push(value);
                }
    
                this.setState({
                    historyGuesses: newHistoryGuesses
                })
            }
        }

    }

    handleInputChange(e){
        this.setState({
            currentGuess: e.target.value 
        })
    }

    render(){
        let formatedString = "";
        for(var char in this.state.historyGuesses){
            formatedString += this.state.historyGuesses[char] + ", ";
        }

        return(
            <div className="form" onSubmit={e => this.handleSubmit(e)}>
                <form className="main-form">
                    <input type="text" value={this.state.currentGuess} onChange={e => this.handleInputChange(e)}/>
                    <input type="submit" value="Submit"/>
                    <Output historyGuesses={this.state.historyGuesses} temperature={this.state.temperature} formatedString={formatedString} />
                </form>
            </div>
        );
    }
}

export default Form;