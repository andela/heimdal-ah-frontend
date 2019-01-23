import React, { Component } from 'react';
import { FormControl } from 'react-bootstrap';

class SearchForm extends Component {
  state = {
    displayInput: false,
  }

  render() {
    const { displayInput } = this.state;
    return (
      <form className="header-form form-inline my-2 my-lg-0">
        <div className={displayInput ? '' : 'header-input'}>
          <FormControl
            className='form-control mr-sm-2'
            placeholder='Search....'
          />
        </div>
        <div
          role="searchbox"
          onKeyPress={() => this.setState({ displayInput: !displayInput })}
          onClick={() => this.setState({ displayInput: !displayInput })}
          className='search_icon'
          tabIndex="-1"
        >
          <i className="fas fa-search" />
        </div>
      </form>
    );
  }
}

export default SearchForm;
