import React, { Component } from 'react';
import css from './Modals.module.css';
import { createPortal } from 'react-dom';

const rootModal = document.querySelector('#root-modal');

export default class Modal extends Component {
  componentDidMount = () => {
    window.addEventListener('keydown', this.handleKeyDownEsc);
  };

  componentWillUnmount = () => {
    window.removeEventListener('keydown', this.handleKeyDownEsc);
  };

  handleKeyDownEsc = e => {
    if (e.code === 'Escape') {
      return this.props.toggleModal();
    }
  };

  handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      return this.props.toggleModal();
    }
  };

  render() {
    return createPortal(
      <div className={css.Modal__backdrop} onClick={this.handleBackdropClick}>
        <div className={css.Modal__content}>{this.props.children}</div>
      </div>,
      rootModal
    );
  }
}
