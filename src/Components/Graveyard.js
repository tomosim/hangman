import React from "react";
import { generate } from "shortid";

class Graveyard extends React.Component {
  render() {
    return (
      <div id="graveyard">
        <input onChange={this.handleInputLetter} />
        <button onClick={this.handleClick}>reset</button>
        <div>
          <br />
          {this.props.usedLetters.map(usedLetter => (
            <span key={generate()}> {usedLetter} </span>
          ))}
        </div>
      </div>
    );
  }

  handleInputLetter = e => {
    const letter = e.target.value;
    this.props.setUsedLetters(letter, e);

    e.target.value = "";
  };

  handleClick = () => {
    this.props.clearGraveyard();
  };
}

export default Graveyard;
