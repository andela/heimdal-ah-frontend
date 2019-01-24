import React, { PureComponent, Fragment } from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import Button from '../../buttons/Button';
import './TriggerModal.scss';

class TriggerModal extends PureComponent {
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
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle} />
          <ModalBody>{this.props.children}</ModalBody>
        </Modal>
      </Fragment>
    );
  }
}

export default TriggerModal;
