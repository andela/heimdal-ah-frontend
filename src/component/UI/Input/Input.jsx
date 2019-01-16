import React from 'react';

const Input = ({formDetails}) => {
  const renderTemplate = () => {
    let formTemplate = null;
    switch (formDetails.element) {
      case 'input':
        formTemplate = (
          <div className='form-group'>
            <input
              className="form-control"
              {...formDetails.config}
              value={formDetails.value}
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

export default Input;
