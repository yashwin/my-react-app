import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Toggle extends React.Component {

  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={(e) => this.handleClick(e)}>
        {this.state.isToggleOn ? 'ON': 'OFF'}
      </button>
    );
  }
}

ReactDOM.render(
  <Toggle />,
  document.getElementById('root')
);
