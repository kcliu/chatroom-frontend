import React, { Component } from 'react';

import './styles.css';

export default class MessageBox extends Component {
  componentDidMount() {
    this.scrollToBottom();
  }
  componentDidUpdate() {
    this.scrollToBottom();
  }

  scrollToBottom = () => {
    const objDiv = document.getElementById("scroller");
    objDiv.scrollTop = objDiv.scrollHeight;
  }

  render() {

    return (
      <div id='scroller' className="message-box-container">
        <div className="message-scroll-div">
          {this.props.children}
        </div>
      </div>
    )
  }
}
