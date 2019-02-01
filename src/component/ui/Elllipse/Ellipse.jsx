/* eslint-disable react/jsx-no-bind */
/* eslint-disable require-jsdoc */
import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import { Dropdown, DropdownToggle, DropdownMenu } from 'reactstrap';
import ModalButton from '../Modal/Index';
import CommentEditHistory from '../CommentEditHistory/CommentEditHistory';

class Ellipse extends Component {
  state = {
    dropDown: false,
  };

  toggle = () => {
    this.setState(prevState => ({
      dropDown: !prevState.dropDown,
    }));
  };

  render() {
    const { dropDown } = this.state;
    const { articleId, commentId } = this.props;

    return (
      <Dropdown isOpen={dropDown} toggle={this.toggle} tag='span'>
        <DropdownToggle
          tag='span'
          onClick={this.toggle}
          data-toggle='dropdown'
          aria-expanded={dropDown}
          className='small_text ellipse'
        >
          <FontAwesome
            name='menu'
            className='fas fa-ellipsis-v'
            onClick={this.toggle}
          />
        </DropdownToggle>
        <DropdownMenu>
          <ModalButton type='signup' label='view history' title='Edit History'>
            <CommentEditHistory articleId={articleId} commentId={commentId} />
          </ModalButton>
        </DropdownMenu>
      </Dropdown>
    );
  }
}

export default Ellipse;
