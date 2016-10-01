import React, { Component } from 'react';
import loremIpsum from 'lorem-ipsum';
import MessageBox from '../../common/MessageBox/index.js';
import MessageInput from '../../common/MessageInput/index.js';
import Message from '../..//common/Message/index.js';

import './styles.css';

const msgGengerator = (ids = []) => {
  return ids.map(id => {
    return {
      avatar: `https://api.adorable.io/avatars/40/${id}.png`,
      text: loremIpsum(),
    }
  })
}

class RoomA extends Component {
  state = {
    members: [...Array(20).keys()],
    messages: [],
    me: {
      id: '999',
    },
  }

  sendText = (text) => {
    const newList = [];
    const myMessage = {
      avatar: `https://api.adorable.io/avatars/40/${this.state.me.id}.png`,
      text,
    }
    newList.push(myMessage);
    this.setState({
      messages: this.state.messages.concat(newList),
    })
  }

  componentDidMount() {
    this.setState({
      messages: this.state.messages.concat(msgGengerator(this.state.members)),
    })
  }

  render() {
    const { state } = this;
    const messages = state.messages || [];
    return (
      <div className="room-container">
        <MessageBox>
          {
            messages.map((msg, i) => {
              console.log("msg:", msg);
              return (
                <Message
                  avatar={msg.avatar}
                  text={msg.text}
                  key={i}
                />
              )
            })
          }
        </MessageBox>
        <MessageInput
          sendText={this.sendText}
        />
      </div>
    );
  }
}

export default RoomA;
