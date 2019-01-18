/* eslint-disable no-undef */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Input from '../../ui/Input/Input';

const SearchForm = ({ formData }) => {
  const [displayInput, setDisplay] = useState(false);
  return (
    <form className="header-form form-inline my-2 my-lg-0">
      <div className={displayInput ? '' : 'header-input'}>
        <Input
          className='form-control mr-sm-2'
          formDetails={formData.search}
        />
      </div>
      <div
        role="searchbox"
        onKeyPress={() => setDisplay(!displayInput)}
        onClick={() => setDisplay(!displayInput)}
        className='search_icon'
        tabIndex="-1"
      >
        <i className="fas fa-search" />
      </div>
    </form>

  );
};

SearchForm.propTypes = {
  formData: PropTypes.InstanceOf(object).isRequired,
};

export default SearchForm;
