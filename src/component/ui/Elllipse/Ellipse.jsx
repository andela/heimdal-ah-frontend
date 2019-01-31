/* eslint-disable react/jsx-no-bind */
/* eslint-disable require-jsdoc */
import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import { bindActionCreators } from 'redux';
import {
  Dropdown, DropdownToggle, DropdownMenu, D
} from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ModalButton from '../Modal/Index';
import CommentEditHistory from '../CommentEditHistory/CommentEditHistory';
import fetchCommentEditHistory from '../../../actions/CommentEditHistory/CommentEditHistory';


class Ellipse extends Component {
    state = {
      dropDown: false,
    };

    // componentDidMount() {
    //   this.fetchCommentEditHistory();
    // }

  toggle = () => {
    this.setState(prevState => ({
      dropDown: !prevState.dropDown,
    }));
  };

  fetchCommentHistory = () => {
    const { actions, articleId, commentId } = this.props;
    actions.fetchCommentEditHistory(articleId, commentId);
  };

  render() {
    const { dropDown } = this.state;
    const { history } = this.props;
    // console.log('=====', history);

    return (
      <Dropdown isOpen={dropDown} toggle={this.toggle} tag="span">
        <DropdownToggle
          tag="span"
          onClick={this.toggle}
          data-toggle="dropdown"
          aria-expanded={dropDown}
          className='small_text ellipse'
        >
          <FontAwesome name='menu' className='fas fa-ellipsis-v' onClick={this.toggle} />
        </DropdownToggle>
        <DropdownMenu>
          <a href='/#'>
            <ModalButton size='lg' type='signup' label='Edit history'><CommentEditHistory /></ModalButton>
          </a>
        </DropdownMenu>
      </Dropdown>

    );
  }
}


const mapStateToProps = state => ({
  history: state.history,
});

const matchDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      fetchCommentEditHistory,
    },
    dispatch,
  ),
});

export default connect(mapStateToProps, matchDispatchToProps)(Ellipse);
