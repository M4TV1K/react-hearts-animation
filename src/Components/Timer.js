
import React from 'react';
import './assets/timer.css';

class Timer extends React.Component {
  render() {
    return (
      <div>
        <p className='timer'>{this.props.hours}:{this.props.minutes}{this.props.period}</p>
      </div>
    );
  }
}

export default Timer;