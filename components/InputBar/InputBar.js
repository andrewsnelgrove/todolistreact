import React, { Component } from 'react';


import classes from './InputBar.css';

class InputBar extends Component {
  constructor(props) {
    super(props);
    this.state = { inputtedText: ''};
  }

  handleChangedText = (event) => {
    this.setState({inputtedText: event.target.value});
  }

  addTask = (event) => {

  }

  handleSubmit = (event) => {
    var


    this.state.inputtedText = '';
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <p> Enter your task here: </p>
        <input type="text"
        onChange={this.handleChangedText}
        />
        <input type="submit" value="Add your task" />
      </form>


    );
  }

}

export default InputBar;
