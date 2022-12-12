import { Component } from 'react';
import { createPortal } from 'react-dom';

import { Overlay, ModalWindow } from './StyledModal';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      this.props.onCloseModal();
    }
  };

  handleKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.onCloseModal();
    }
  };

  render() {
    return createPortal(
      <Overlay onClick={this.handleBackdropClick}>
        <ModalWindow>{this.props.children}</ModalWindow>
      </Overlay>,
      modalRoot
    );
  }
}

export default Modal;
