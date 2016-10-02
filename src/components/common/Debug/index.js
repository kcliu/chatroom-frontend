import React, { Component } from 'react';
import loremIpsum from 'lorem-ipsum';
import moment from 'moment';

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

export default class Debug extends Component {

  add100Msgs = () => {
    this.props.addMsgs(msgGengerator(100, this.props.memberIds))
  }

  addOneUser = () => {
    this.props.addUsers(makeUser(1))
  }

  render() {
    const { props } = this;
    return (
      <div className="debug-container">
        <div className="btn" onClick={this.add100Msgs}>Add 100 messages</div>
        <div className="btn" onClick={this.addOneUser}>Add a User</div>
      </div>
    )
  }
}
