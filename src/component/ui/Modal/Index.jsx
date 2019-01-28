import React, { Fragment, Component } from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import './TriggerModal.scss';
import Button from '../Buttons/Button';

/**
 * @description - Heimdal Authors TriggerModal Component
 * @param {props} type - the class of the button(bootstrap or custom)
 * @param {props} label - the label of the modal button
 * @param {props} className - the class of the modal
 * @param {props} children - the children components to be passed
 * @param {function} toggle - the function to be performed when the modal is triggered
 * @returns {fragment} Modal fragment
 */

class TriggerModal extends Component {
  state = {
    display: false,
  };

  toggle = () => {
    this.setState(prevState => ({
      display: !prevState.display,
    }));
  };

  render() {
    return (
      <Fragment>
        <Button
          className={this.props.btnClass}
          type={this.props.type}
          label={this.props.label}
          onClick={this.toggle}
        />
        <Modal
          isOpen={this.state.display}
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
