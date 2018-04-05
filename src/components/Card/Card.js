import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles, { dark } from './Card.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

class Card extends Component {
  state = {
    hasError: false,
    loading: true,
  }

  componentWillMount() {
    console.log('Antes');
  }

  componentDidMount() {
    console.log('Despues');
    fetch('https://swapi.co/api/people/1')
      .then((res) => res.json())
      .then(res => {
        this.setState({
          name: res.name,
          loading: false,
        })
      });
  }

  imageClicked = () => {
    this.setState({ hasError: !this.state.hasError });
  }

  render() {
    const { title, content, data, red = false } = this.props;
    const { loading } = this.state;

    if(loading) return <h2>Loading...</h2>;
    return (
      <div className={ cx( styles.container, { [styles.other]: red } ) }>
        <h1>{ title }</h1>
        <p>{ content }</p>
        {(data || []).map(user => {
          return <h3 key={`${user.name}`}>{user.name}</h3>
        })}
      </div>
    );
  }
}

Card.defaultProps = {
  image: '',
  title: 'Hola',
  content: '',
}

Card.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
  })),
  red: PropTypes.bool,
};

export default Card;