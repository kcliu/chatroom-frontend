import React, { Component } from 'react';
import loremIpsum from 'lorem-ipsum';
import MessageBox from '../../common/MessageBox/index.js';
import MessageInput from '../../common/MessageInput/index.js';
import Message from '../..//common/Message/index.js';
import MembersBox from '../../common/MembersBox/index.js';

import './styles.css';

const msgGengerator = (count, ids=[]) => {
  // console.log("msgGengerator:", count, ids);
  return [...Array(count).keys()].map(idx => {
    const who = Math.floor(Math.random() * ids.length);
    // console.log("index:", who);
    return {
      id: ids[who],
      text: loremIpsum({
        count: 1,
        units: 'sentences'
      }),
    }
  })
}

const makeUser = (count) => {
  return [...Array(count).keys()].map(user => {
    const id = loremIpsum({
      count: 1,
      units: 'words'
    })
    return {
      id,
      avatar: `https://api.adorable.io/avatars/10/${id}.png`,
    }
  })
}

class RoomA extends Component {
  state = {
    members: [
      {
        id: 'kcliu',
        avatar: `https://api.adorable.io/avatars/10/kcliu.png`,
      }
    ],
    messages: [],
    me: {
      id: 'kcliu',
      avatar: `https://api.adorable.io/avatars/10/kcliu.png`,
    },
  }

  sendText = (id, text) => {
    return (text) => {
      const newList = [];
      const myMessage = {
        id,
        text,
      }
      newList.push(myMessage);
      this.setState({
        messages: this.state.messages.concat(newList),
      })
    }
  }

  sendMyText = this.sendText(this.state.me.id)

  addUser = (users) => {
    // console.log("addUser:", users);
    this.setState({
      members: this.state.members.concat(users),
    })
  }

  addMessages = (messages) => {
    // console.log("addMessages:", messages);
    this.setState({
      messages: this.state.messages.concat(messages),
    })
  }

  getAvatar = (id) => {
    return this.state.members.filter(member => member.id === id)[0].avatar;
  }

  componentWillMount() {
    this.addUser(makeUser(10));
  }
  componentDidMount() {
    const newMessages = msgGengerator(20, this.state.members.map(member => member.id));
    // console.log(newMessages);
    this.addMessages(newMessages);
  }

  render() {
    console.log(this.state);
    const { state } = this;
    const messages = state.messages || [];
    return (
      <div className="room-container">
        <MembersBox
          members={state.members}
        />
        <MessageBox>
          {
            messages.map((msg, i) => {
              return (
                <Message
                  avatar={this.getAvatar(msg.id)}
                  text={msg.text}
                  key={i}
                />
              )
            })
          }
        </MessageBox>
        <MessageInput
          sendText={this.sendMyText}
        />
      </div>
    );
  }
}

export default RoomA;
