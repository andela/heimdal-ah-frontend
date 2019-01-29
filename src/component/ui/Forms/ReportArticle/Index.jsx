/* eslint-disable react/forbid-prop-types */

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';

import { setErrors, removeAnError, clearErrors } from '../../../../actions/errorActions';
import { toggleLoader } from '../../../../actions/loaderActions';
import LoadingSpinner from '../../loadingSpinners/LoadingSpinner';
import MainError from '../../errors/MainError';
import { validateReport } from '../../../../helpers/validateInputs';
import { reportArticle } from '../../../../actions/articleActions';

/**
 * @description It wraps its children with a layout style
 * @param {object} props - react props with children
 * @returns {object} the SignupFrom component
 */
class ReportArticle extends Component {
  state = {
    context: '',
    reportType: 'spam',
    errors: {},
  };

  componentWillReceiveProps(nextProps) {
    return nextProps.errors && this.setState({ errors: nextProps.errors });
  }

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });

    if (this.state.errors[event.target.name]) {
      const { actions } = this.props;
      actions.removeAnError(event.target.name);
    }
  };

  handleArticleReport = (event) => {
    event.preventDefault();
    const { actions, history } = this.props;
    actions.toggleLoader();

    const { context, reportType } = this.state;
    const reportData = { context, reportType };
    const errors = validateReport(reportData);

    if (errors) {
      actions.toggleLoader();
      return actions.setErrors(errors);
    }

    reportData.articleId = this.props.articleId;
    actions.clearErrors();
    return actions.reportArticle(reportData, history);
  };

  render() {
    const { errors = {}, isLoading } = this.props;

    // console.log('=======================');
    // console.log(this.props.isLoading);
    // console.log('=======================');
    return (
      <div className="heimdal-report-form">
        <h1 className="form-title font-cardo text-center">Report this article</h1>
        <form className="heimdal-form" onSubmit={this.handleArticleReport} noValidate>
          <div className="font-cardo ph-30">
            <div className="form-group">
              <select
                defaultValue="spam"
                onChange={this.onChange}
                name="reportType"
                className="form-control"
              >
                <option>spam</option>
                <option>plagarism</option>
                <option>others</option>
              </select>

              {errors.reportType && errors.reportType.constructor === Object && (
                <small className="text-danger h5">{errors.reportType.msg}</small>
              )}
              {errors.reportType && errors.reportType.constructor === Array && (
                <small className="text-danger h5">{errors.reportType}</small>
              )}
            </div>
            <div className="form-group">
              <textarea
                className="form-control"
                name="context"
                onChange={this.onChange}
                placeholder="Type your report message"
              />
              {errors.context && errors.context.constructor === Object && (
                <small className="text-danger h5">{errors.context.msg}</small>
              )}
              {errors.context && errors.context.constructor === Array && (
                <small className="text-danger h5">{errors.context}</small>
              )}
            </div>

            <div className="row">
              <LoadingSpinner isLoading={isLoading} />
              <MainError errors={errors} />
              <div className="col-md-12 text-right">
                <button type="submit" className="btn btn-danger ph-25">
                  Submit Report
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

ReportArticle.defaultProps = {
  context: '',
  articleId: 5,
  reportType: '',
  errors: {},
  isLoading: false,
};

ReportArticle.propTypes = {
  // articleId: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
  errors: state.errors,
  isLoading: state.loader.isLoading,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      removeAnError,
      setErrors,
      clearErrors,
      reportArticle,
      toggleLoader,
    },
    dispatch,
  ),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ReportArticle);
