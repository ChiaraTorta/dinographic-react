import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dinos: []
    }
  }
  render() {
    return (
      <h1>Dinographic React</h1>
    );
  }
}
export default App;