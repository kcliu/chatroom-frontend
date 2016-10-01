import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <div className="app-header">
          <h2>chat room</h2>
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default App;
