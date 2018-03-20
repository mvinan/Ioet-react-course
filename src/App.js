import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './App.css';
import * as counterActions from './actions/counterActions';

@connect(state => ({
  counter: state.counter
}), {
  increment: counterActions.increment,
  decrement: counterActions.decrement,
  reset: counterActions.reset,
})
class App extends Component {
  static defaultProps = {
    increment: () => null,
    decrement: () => null,
    reset: () => null,
  }

  render() {
    const { counter, increment, decrement, reset } = this.props;
    return (
      <div className={styles.container}>
        <button onClick={increment}>+</button>
        <h1 onClick={reset}>{counter}</h1>
        <button onClick={decrement}>-</button>
      </div>
    );
  }
}

export default App;
