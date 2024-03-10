import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    person: {
      fullName: "yosri chihaoui",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imgSrc: "https://via.placeholder.com/150",
      profession: "full stack js Developer"
    },
    show: false,
    timeInterval: 0
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState(prevState => ({
        timeInterval: prevState.timeInterval + 1
      }));
    }, 1000); // Update every second
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  toggleShow = () => {
    this.setState(prevState => ({
      show: !prevState.show
    }));
  };

  render() {
    const { person, show, timeInterval } = this.state;

    return (
      <div className="App">
        <h1>Person Profile</h1>
        <button onClick={this.toggleShow}>
          {show ? 'Hide Profile' : 'Show Profile'}
        </button>
        {show && (
          <div>
            <img src={person.imgSrc} alt="Profile" />
            <h2>{person.fullName}</h2>
            <p>{person.bio}</p>
            <p>Profession: {person.profession}</p>
          </div>
        )}
        <p>Time since component mounted: {timeInterval} seconds</p>
      </div>
    );
  }
}

export default App;

