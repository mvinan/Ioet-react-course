import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styles from './Modal.css';

const portal = document.getElementById('portal');

// export default class Modal extends Component {
//   el = document.createElement('div');

//   componentDidMount() {
//     portal.appendChild(this.el);
//   }

  // componentWillUnmount() {
  //   portal.removeChild(this.el);
  // }

//   dismiss = () => {
//     if(this.props.dismiss) this.props.dismiss();
//   }

//   render() {
//     const modal = (
//       <div id='modal' className={styles.container} onClick={this.dismiss}>
//         {this.props.children}
//       </div>
//     );

//     return ReactDOM.createPortal( modal, this.el );
//   };
// }


class Modal extends Component {
  render() {
    const modal = (
      <div className={styles.container} onClick={() => this.props.dismiss()}>
        {this.props.children}
      </div>
    );
    return ReactDOM.createPortal(modal, document.getElementById('portal'))
  }
}

export default Modal;