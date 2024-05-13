import React from 'react';

class TimerClass extends React.Component {

  constructor(props) {
    super(props)
    this.state = { date: new Date() }
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({ date: new Date() });
    }, 1000);
  }

  render() {
    return (<div><h1>Hora: {this.state.date.toLocaleTimeString()} </h1></div>);
  };
}

export default TimerClass;