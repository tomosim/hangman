import React from "react";
import { generate } from "shortid";

class Graveyard extends React.Component {
  render() {
    return (
      <div id="graveyard">
        <input className="letterCheck" onChange={this.handleInputLetter} />
        <button className="reset" onClick={this.handleClick}>
          reset
        </button>

        <br />
        {this.props.usedLetters.map(usedLetter => (
          <span className="usedLetters" key={generate()}>
            {" "}
            {usedLetter}{" "}
          </span>
        ))}
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
