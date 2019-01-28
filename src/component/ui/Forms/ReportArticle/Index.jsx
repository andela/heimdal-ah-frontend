/* eslint-disable react/forbid-prop-types */

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';

import { setErrors, removeAnError, clearErrors } from '../../../../actions/errorActions';
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
    isLoading: false,
  };

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
    // alert(event.target.name);

    if (this.state.errors[event.target.name]) {
      // alert(this.state.errors[event.target.name]);
      const { actions } = this.props;
      actions.removeAnError(event.target.name);
    }
  };

  handleArticleReport = (event) => {
    event.preventDefault();
    this.setState({ isLoading: true });

    const { context, reportType } = this.state;

    const reportData = { context, reportType };
    // console.log(reportData);

    const errors = validateReport(reportData);
    const { actions, history } = this.props;

    if (errors) {
      // this.setState({ isLoading: false });
      // console.log(errors);

      return actions.setErrors(errors);
    }
    // submit reportData here.
    reportData.articleId = 5;
    actions.clearErrors();
    return actions.reportArticle(reportData, history);
    // this.setState({ isLoading: false });
  };

  render() {
    const { errors = {} } = this.props;
    const { isLoading } = this.state;

    // console.log(this.props);
    // console.log(errors);
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
                  Report
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

// ReportArticle.defaultProps = {
//   context: '',
//   reportType: '',
//   errors: {},
//   isLoading: false,
// };

// ReportArticle.propTypes = {
//   context: PropTypes.string,
//   reportType: PropTypes.string,
// };

const mapStateToProps = state => ({
  errors: state.errors,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      removeAnError,
      setErrors,
      clearErrors,
      reportArticle,
    },
    dispatch,
  ),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ReportArticle);
