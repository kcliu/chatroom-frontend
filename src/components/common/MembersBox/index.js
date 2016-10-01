import React, { Component } from 'react';

import './styles.css';

export default class MembersBox extends Component {

  render() {
    const { state, props } = this;
    return (
      <div className="members-box-container">
        <div className="total-indicator">{props.members.length}</div>
        {
          props.members.map(member => {
            return (
              <div className="member-wrapper">
                <img src={member.avatar} alt='member' />
              </div>
            )
          })
        }
      </div>
    )
  }
}
