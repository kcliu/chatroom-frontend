import React, { Component } from 'react';

import './styles.css';

export default class MessageBox extends Component {
  state = {
    deafultAvatar: `https://api.adorable.io/avatars/40/0.png`,
  }

  render() {
    const { props, state } = this;
    const avatar = props.avatar ? props.avatar : state.deafultAvatar;
    return (
      <div className="message-wrapper animated fadeIn">
        <div className="img-wrapper">
          <img src={avatar} alt='avatar'/>
        </div>
        <div className="main-wrapper">
          <div className="time">{props.time}</div>
          <div className="message">{props.text}</div>
        </div>
      </div>
    )
  }
}
