import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dinos: {}
    }
  }
  componentDidMount() {
    fetch("https://dinosaur-facts-api.shultzlab.com/dinosaurs")
      .then(res => res.json())
      .then(data => this.setState({ dinos: data }))
      .catch(err => console.log(err));
  }
  render() {
    const { dinos } = this.state;
    if (dinos.length > 0) {
      return (
        <div>
          <div className="grid">
            {dinos.map((dino, i) =>
              <div className="grid-item" key={i + 1}>
                <h3>{dino.Name}</h3>
                <p>{dino.Description}</p>
              </div>
            )}
          </div>
        </div>
      );
    }
  }
}
export default App;