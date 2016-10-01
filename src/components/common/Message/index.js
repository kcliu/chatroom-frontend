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
      <div className="message-wrapper">
        <img src={avatar} alt='avatar'/>
        <div className="message">{props.text}</div>
      </div>
    )
  }
}
