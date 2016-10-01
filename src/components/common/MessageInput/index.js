import React, { Component } from 'react';

import './styles.css';

export default class MessageBox extends Component {
  state = {
    text: '',
  }

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      if (this.state.text === '') { return }
      console.log(this.state.text);
      this.props.sendText(this.state.text);
      this.setState({
        text: '',
      })
    }
  }

  handleChange = (e) => {
    this.setState({
      text: e.target.value,
    })
  }

  render() {
    const { state } = this;
    return (
      <div className="message-input-container">
        <textarea
          className="text-area"
          value={state.text}
          onKeyPress={this.handleKeyPress}
          onChange={this.handleChange}
        />
      </div>
    )
  }
}
