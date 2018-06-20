import React, { Component } from "react";
import Graveyard from "./Components/Graveyard";
import "./App.css";
import Lives from "./Components/Lives";
import Input from "./Components/Input";

class App extends Component {
  state = {
    word: "",
    usedLetters: [],
    lives: 10
  };
  render() {
    return (
      <div className="App">
        <h1 className="App-title">hangman</h1>
        {!this.state.word && <Input submit={this.submit} />}
        {this.state.word && <h2 className="hiddenWord">{this.hiddenWord()}</h2>}
        {this.state.word && <h2 className="winOrLose">{this.winOrLose()}</h2>}
        {this.state.word && <Lives livesLeft={this.state.lives} />}
        {this.state.word && (
          <Graveyard
            usedLetters={this.state.usedLetters}
            setUsedLetters={this.setUsedLetters}
            clearGraveyard={this.clearGraveyard}
          />
        )}
      </div>
    );
  }

  submit = inputWord => {
    this.setState(inputWord);
  };

  hiddenWord = () => {
    if (this.state.lives <= 0) {
      return this.state.word;
    } else {
      const hiddenSplitWord = this.state.word.split("").map(letter => {
        if (this.state.usedLetters.includes(letter)) {
          return letter;
        } else if (letter === "/") {
          return letter;
        } else {
          return "_";
        }
      });
      return hiddenSplitWord.join("");
    }
  };

  setUsedLetters = (letter, e) => {
    if (this.state.usedLetters.includes(letter)) {
      return null;
    } else {
      this.setState({ usedLetters: [...this.state.usedLetters, letter] });
    }
    let newLives;
    if (this.state.lives === 0) {
      newLives = 0;
    } else {
      newLives = this.state.lives - 1;
    }
    if (!this.state.word.includes(letter)) {
      this.setState({ lives: newLives });
    }
  };

  winOrLose = () => {
    if (this.state.lives <= 0) {
      return "You Lose!";
    }
    if (this.state.word === this.hiddenWord()) return "You Win!";
  };

  clearGraveyard = () => {
    this.setState({ word: "", usedLetters: [], lives: 10 });
  };
}

export default App;
