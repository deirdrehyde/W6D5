import React from 'react';

class Clock extends React.Component{
  constructor(props){
    super(props);
    this.tick = this.tick.bind(this);
    let date = new Date();
    this.state = {
      time: date.toLocaleTimeString(),
      date: date.toDateString(),
    };
  }

  //your code here
  componentWillUnmount () {
    clearInterval(this.setId);
    this.setId = 0;
  }

  componentDidMount(){
    this.setId = setInterval(this.tick, 1000);
  }

  tick() {
    let newDate = new Date();
    this.setState({
      time: newDate.toLocaleTimeString(),
      date: newDate.toDateString(),
    });
  }

  render(){
    return (
      <div className={"clock"}>
        <h1>Clock</h1>
        <span>
          <ul>
            <li>{this.state.time}</li>
            <li>{this.state.date}</li>
          </ul>
        </span>
      </div>
    );
  }

}

export default Clock;
