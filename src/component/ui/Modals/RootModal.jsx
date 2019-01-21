import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Modal, Button } from 'react-bootstrap';
import { hideModal, showModal } from '../../../actions/modals.js';
import './Modal.scss';

const RootModal = props => (
  <div className={props.classname}>
    <Button bsClass="btn btn-primary btn-lg" onClick={props.action.show}>
      Launch modal
    </Button>
    <Modal show={props.display} onHide={props.action.hide}>
      <Modal.Header closeButton>
        <Modal.Title bsClass="modal-title">{props.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{props.children}</Modal.Body>
    </Modal>
  </div>
);

RootModal.protoType = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  classname: PropTypes.string.isRequired,
  modalType: PropTypes.string.isRequired,
  hideModal: PropTypes.func.isRequired,
  showModal: PropTypes.func.isRequired,
};

RootModal.defaultProps = {
  title: '',
  children: '',
  classname: '',
  size: '',
};

const mapStateToProps = state => ({
  display: state.modal.display,
});

const matchDispatchToProps = dispatch => ({
  action: bindActionCreators({ show: showModal, hide: hideModal }, dispatch),
});

export default connect(
  mapStateToProps,
  matchDispatchToProps,
)(RootModal);
