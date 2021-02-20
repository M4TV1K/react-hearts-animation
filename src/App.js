
import React from 'react';
import Timer from './Components/Timer';
import TimerHook from "./Components/TimerHook";
import './Components/assets/app.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hours: '12',
      minutes: '50',
      period: 'am',
      direction: true,
      blackPosition: 30,
      showLove: 'none'
    };
  }

  updateTime = () => {
    setTimeout(() => {
      let minutes = parseInt(this.state.minutes) + 1;
      let hours = parseInt(this.state.hours);
      let period = this.state.period;

      if (minutes === 60) {
        minutes = 0;
        hours += 1;
        if (hours === 12) period = this.state.period === 'am' ? 'pm' : 'am';
        else if (hours === 13) hours = 1;
      }

      if (minutes < 10) minutes = '0' + minutes;
      if (hours < 10) hours = '0' + hours;
      this.setState({
        hours: hours,
        minutes: minutes,
        period: period
      });
      this.updateTime();
    }, 50);
  };

  animateHearts = () => {
    requestAnimationFrame(() => {
      if (this.state.blackPosition >= 30 || this.state.blackPosition <= 2) {
        this.setState({direction: !this.state.direction});
      }
      if (this.state.direction) {
        this.setState({blackPosition: this.state.blackPosition + 0.5})
      } else {
        this.setState({blackPosition: this.state.blackPosition - 0.5})
      }

      if (Math.round(this.state.blackPosition) === 2) {
        this.setState({ showLove: 'block' });
        setTimeout(() => {
          this.setState({ showLove: 'none' });
        }, 1000);
      }
      this.animateHearts();
    });
  };

  componentDidMount() {
    this.updateTime();
    this.animateHearts();
  }

  render() {
    return (
        <div className='app'>
          <h1 id='love' style={{display: this.state.showLove}}>
            Love <span style={{color: 'white'}}>You!</span>
          </h1>
          <Timer hours={this.state.hours} minutes={this.state.minutes} period={this.state.period}/>
          <div className='heart-holder'>
            <h1
                id='blackHeart'
                className='heart'
                style={{width: this.state.blackPosition + 'vw'}}
            >
              🖤
            </h1>
            <h1
                id='whiteHeart'
                className='heart'
            >
              🤍
            </h1>
          </div>
          <TimerHook hours={this.state.hours} minutes={this.state.minutes} period={this.state.period}/>
        </div>
    );
  }
}

export default App;