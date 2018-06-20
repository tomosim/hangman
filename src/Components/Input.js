import React from "react";

class Input extends React.Component {
  state = { newWord: "" };

  render() {
    return (
      <div className="Input">
        <input placeholder="enter word" onChange={this.handleChange} />
        <button className="submit" onClick={this.handleClick}>
          submit
        </button>
      </div>
    );
  }
  handleChange = e => {
    this.setState({ newWord: e.target.value.toLowerCase() });
  };

  handleClick = e => {
    this.props.submit({ word: this.state.newWord });
    this.setState({ newWord: "" });
  };
}

export default Input;
