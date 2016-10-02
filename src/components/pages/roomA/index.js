import React, { Component } from 'react';
import loremIpsum from 'lorem-ipsum';
import moment from 'moment';

import MessageBox from '../../common/MessageBox/index.js';
import MessageInput from '../../common/MessageInput/index.js';
import Message from '../..//common/Message/index.js';
import MembersBox from '../../common/MembersBox/index.js';
import Debug from '../../common/Debug/index.js';

import './styles.css';

const msgGengerator = (count, ids=[]) => {
  // console.log("msgGengerator:", count, ids);
  return [...Array(count).keys()].map(idx => {
    const who = Math.floor(Math.random() * ids.length);
    // console.log("index:", who);
    return {
      id: ids[who],
      time: moment(moment.now()).format('h:mm A'),
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

  sendText = (id, text, time) => {
    return (text, time) => {
      console.log("send text:", text, time);
      const newList = [];
      const myMessage = {
        id,
        text,
        time,
      }
      newList.push(myMessage);
      this.setState({
        messages: this.state.messages.concat(newList),
      })
    }
  }

  sendMyText = this.sendText(this.state.me.id)

  addUsers = (users) => {
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
  }

  componentDidMount() {
    // const newMessages = msgGengerator(20, this.state.members.map(member => member.id));
    // console.log(newMessages);
    // this.addMessages(newMessages);
    this.scrollToBottom();
  }

  scrollToBottom = () => {
    const objDiv = document.getElementById("scroller");
    objDiv.scrollTop = objDiv.scrollHeight;
  }

  render() {
    console.log(this.state);
    const { state } = this;
    const messages = state.messages || [];
    return (
      <div className="room-container">
        <Debug
          memberIds={this.state.members.map(member => member.id)}
          addMsgs={this.addMessages}
          addUsers={this.addUsers}
        />
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
                  time={msg.time}
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
