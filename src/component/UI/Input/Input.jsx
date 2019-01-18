/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ formDetails }) => {
  const renderTemplate = () => {
    let formTemplate = null;
    const { element } = formDetails;
    switch (element) {
      case 'input':
        formTemplate = (
          <div className='form-group'>
            <input
              className={`form-control ${formDetails.className}`}
              {...formDetails.config}
              value={formDetails.value}
              onChange={() => {}}
            />
          </div>
        );
        break;

      default:
        formTemplate = null;
        break;
    }
    return formTemplate;
  };
  return (
    <div>
      {renderTemplate()}
    </div>
  );
};

Input.propTypes = {
  formDetails: PropTypes.object.isRequired,
};

export default Input;
