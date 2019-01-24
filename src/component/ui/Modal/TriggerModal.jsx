import React, { Fragment, Component } from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import './TriggerModal.scss';
import Button from '../Buttons/Button';

/**
 * @description - Heimdal Authors TriggerModal Component
 * @param {props} Class - the class of the button(bootstrap or custom)
 * @param {function} toggle - the function to be performed when the modal is triggered
 * @returns {fragment} Modal fragment
 */
class TriggerModal extends Component {
  state = {
    modal: false,
  };

  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal,
    }));
  };

  render() {
    return (
      <Fragment>
        <Button
          className="header-button"
          type={this.props.type}
          label={this.props.label}
          onClick={this.toggle}
        />
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle} />
          <ModalBody>{this.props.children}</ModalBody>
        </Modal>
      </Fragment>
    );
  }
}

export default TriggerModal;
