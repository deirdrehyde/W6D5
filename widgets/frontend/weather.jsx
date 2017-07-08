import React from 'react';

class Weather extends React.Component {
  constructor(props){
    super(props);
    this.location = this.location.bind(this);
    this.state = {
      temp: 0,
      location: ""
    };
  }

  //your code here
  componentWillUnmount () {
    clearInterval(this.setId);
    this.setId = 0;
  }

  componentDidMount(){
    this.location();
  }

  location() {
    navigator.geolocation.getCurrentPosition((pos) => {

      let request = new XMLHttpRequest();
      request.open(
        'GET',
        `http://api.openweathermap.org/data/2.5/weather?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&appid=24594dc3ee2275c48751285e4d9fd2f0`,
        true);

      request.onload = function() {
        if (request.status >= 200 && request.status < 400) {
          // Success!
          let resp = request.responseText;
          resp = JSON.parse(resp);
          console.log(resp);
          let kelvin = resp.main.temp;
          let f = Math.floor(((9/5 * (kelvin - 273)) + 32));
          this.setState({temp: f, location: resp.name});
        } else {
          // We reached our target server, but it returned an error

        }
      }.bind(this);

      request.onerror = function() {
        // There was a connection error of some sort
      };

      request.send();

    });
  }

  render(){
    return (
      <div className={"weather"}>
        <h1>Weather</h1>
        <span id={"temp"}>
          <ul>
            <li>{this.state.temp}°F</li>
            <li>{this.state.location}</li>
          </ul>
        </span>
      </div>
    );
  }

}



export default Weather;
