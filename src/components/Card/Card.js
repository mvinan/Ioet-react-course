import React, { Component } from 'react';
import styles from './Card.css';

class Card extends Component {

  constructor(props){
    super(props);
    this.state = {
      stateButton: 'no-clicked',
    };
  }

  onClick() {
    const newState = { stateButton: 'clicked' };
    this.setState( newState );
  }

  render() {
    const { message } = this.props;
    return (
      <div className={ styles.container }>
        <h1>{ message }</h1>
        <h1>evento button { this.state.stateButton }</h1>
        <button onClick={ () => this.onClick() } >Button</button>
      </div>
    );
  }
}

export default Card;