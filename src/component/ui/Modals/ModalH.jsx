import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Modal, Button } from 'react-bootstrap';
import { removeModal } from '../../../actions/modals.js';


// render() {
const ModalH = props => (
  (
    <div className={props.classname}>
      <Button bsStyle="primary" bsSize="large">
        Launch modal
      </Button>
      <Modal show={props.display}>
        <Modal.Header>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.children}</Modal.Body>
        <Modal.Footer>
          <Button onClick={removeModal()}>Cancel</Button>
          <Button bsStyle="primary">{props.modalType}</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
);


ModalH.protoType = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  classname: PropTypes.string.isRequired,
  display: PropTypes.bool.isRequired,
  removeModal: PropTypes.func.isRequired,
};

ModalH.defaultProps = {
  title: '',
  children: '',
  classname: '',
  display: true,
};

const mapStateToProps = state => ({
  display: state.modal.display,
});

const matchDispatchToProps = dispatch => ({
  action: bindActionCreators({ removeModal }, dispatch),
});

export default connect(mapStateToProps, matchDispatchToProps)(ModalH);

// export default ModalH;
