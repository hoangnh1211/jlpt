import React, { Component } from 'react';
import './Countdown.scss'

class Countdown extends Component {
    constructor(props){
        super(props);
  
        this.state = {
            time: this.props.time,
            minutes: '00',
            seconds: '00'
        }
    }
  
    componentDidMount(){
        this.intervalId = setInterval(() => {
          const {time} = this.state;
          
          let minutes = Math.floor(time/60);
          let seconds = time - minutes * 60;
          if(minutes < 10) minutes = "0" + minutes;
          if(seconds < 10) seconds = "0" + seconds;
          this.setState({
            minutes: minutes,
            seconds: seconds,
            time: time - 1
          })
  
          if(this.state.time === -1) {
            clearInterval(this.intervalId);
            this.props.callback();
          }
        }, 1000)
    }
  
    componentWillUnmount(){
      clearInterval(this.intervalId);
    }
  
    render() {
        return (
            <div className="countdown">
                <span>Time remaining &ensp;</span>
                <div>
                    <span> {this.state.minutes} </span> :
                    <span> {this.state.seconds} </span>
                </div>
            </div>
        );
    }
}

export default Countdown;