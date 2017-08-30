import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const scaleNames = {
  c: 'Celcius',
  f: 'Fahrenheit'
};

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.handleCelciusChange = this.handleCelciusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    this.state = {temperature:'', scale: 'c'};
  }
  handleCelciusChange(temperature) {
    this.setState({scale: 'c', temperature});
  }

  handleFahrenheitChange(temperature) {
    this.setState({scale: 'f', temperature});
  }

  render() {
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celcius = scale === 'f' ? tryConvert(temperature, toCelcius) : temperature;
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit): temperature;
    return(
      <div>
        <TemperatureInput scale="c"
         temperature={celcius}
         onTemperatureChange={this.handleCelciusChange}
         />
        <TemperatureInput scale="f"
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange}
         />
        <BoilingVerdict
          celcius={parseFloat(celcius)} />
      </div>
    );
  }
}

function BoilingVerdict(props) {
  if(props.celcius >= 100) {
    return <p> The water would boil </p>
  }
  return <p> The water would not boil.</p>
}

function toCelcius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celcius) {
  return (celcius * 9 /5) + 32;
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {temperature: ''};
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.props.onTemperatureChange(e.target.value);
  }
  render() {
    const temperature = this.props.temperature;
    const scale = this.props.scale;
    return(
      <fieldset>
        <legend>Enter the temperature in {scaleNames[scale]}:</legend>
        <input value={temperature}
          onChange={this.handleChange} />
        <BoilingVerdict celcius={parseFloat(temperature)} />
      </fieldset>
    );
  }
}

ReactDOM.render(
  <Calculator />,
  document.getElementById('root')
)
