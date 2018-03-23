import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './App.css';
import { dark } from './styles/palette.css';
import * as counterActions from './actions/counterActions';
import Card from './components/Card/Card';

import Modal from 'Components/Modal/Modal';

@connect(state => ({
  counter: state.counter
}), {
  increment: counterActions.increment,
  decrement: counterActions.decrement,
  reset: counterActions.reset,
})
class App extends Component {
  state = {
    visible: false
  }

  static defaultProps = {
    increment: () => null,
    decrement: () => null,
    reset: () => null,
  }

  toggleModal = () => {
    this.setState(({ visible }) => ({ visible: !visible }));
  }

  render() {
    const { counter, increment, decrement, reset } = this.props;
    const { visible } = this.state;

    return (
      <div className={styles.container} >
        <button onClick={increment}>+</button>
        <h1 onClick={reset}>{counter}</h1>
        <button onClick={decrement}>-</button>

        <button onClick={this.toggleModal}>Show Modal</button>

        <Card image='http://via.placeholder.com/350x150'/>

        {visible &&
          <Modal dismiss={this.toggleModal}>
            <h2>Portal</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae iusto rerum tenetur, ratione reiciendis, delectus quibusdam aliquid ipsam, assumenda dolor temporibus vero laudantium optio! Consequatur atque nesciunt voluptas pariatur voluptatibus?</p>
          </Modal>
        }
      </div>
    );
  }
}

export default App;
