import React from 'react';
import FontAwesome from 'react-fontawesome';
import { connect } from 'react-redux';


const DeleteButton = (props) => {
  const deleteComment = (e) => {
    e.preventDefault();
    const { commentId } = props;
    props.deleteArticleComment(1, commentId);
  };
  return (
    <button className='archive_button btn btn-danger' onClick={e => deleteComment(e)} type='submit'><FontAwesome name='trash' className='' /></button>
  );
};

const mapStateToProps = state => ({
  comment: state.comment,
});

export default connect(mapStateToProps, { })(DeleteButton);
