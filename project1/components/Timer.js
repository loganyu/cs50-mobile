import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import vibrate from '../utils/vibrate';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 48,
  },
  timer: {
    fontSize: 68,
    textAlign: 'center',
  },
  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  }
});

export default class Timer extends React.Component {
  state = {
    workTime: 25*60,
    restTime: 5*60,
    time: 25*60,
    isWorkTimer: true,
    isRunning: true,
  };

  componentDidMount() {
    this.interval = setInterval(this.decrementTime, 1000);
  }

  decrementTime = () => {
    this.setState(prevState => ({ time: prevState.time - 1 }));
  }

  startTimer = () => {
    this.setState({isRunning: true});
    this.interval = setInterval(this.decrementTime, 1000);
  }

  stopTimer = () => {
    clearInterval(this.interval);
    this.setState({ isRunning: false });
  }

  resetTimer = () => {
    clearInterval(this.interval);
    let time;
    if (this.state.isWorkTimer) {
      time = this.state.workTime;
    } else {
      time = this.state.restTime;
    }
    this.setState({ isRunning: false, time});
  }

  componentDidUpdate() {
    let {time, isWorkTimer, workTime, restTime} = this.state
    if (time <= 0) {
      vibrate();
      if (isWorkTimer) {
        time = restTime;
      } else {
        time = workTime;
      }
      isWorkTimer = !isWorkTimer;

      this.setState({
        isWorkTimer,
        time,
      });
    }
  }

  displayTime = (seconds) => {
    let secDisplay = seconds % 60
    let minDisplay = Math.floor(seconds / 60)

    if (secDisplay < 10) {
      secDisplay = '0' + secDisplay
    }
    if (minDisplay < 10) {
      minDisplay = '0' + minDisplay
    }

    return `${minDisplay}:${secDisplay}`
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { isWorkTimer, time, isRunning} = this.state;
    return (
      <View style={styles.title}>
        <Text style={styles.title}>{isWorkTimer ? "Work Timer" : "Rest Timer"}</Text>
        <Text style={styles.timer}>{this.displayTime(time)}</Text>
        <View style={styles.buttons}>
          {isRunning ? 
            <Button title="Stop" onPress={this.stopTimer} />
            :
            <Button title="Start" onPress={this.startTimer} />
          }
          <Button title="Reset" onPress={this.resetTimer} />
        </View>
      </View>
      
    );
  }
}