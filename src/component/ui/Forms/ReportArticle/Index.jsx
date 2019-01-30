/* eslint-disable react/forbid-prop-types */
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { setErrors, removeAnError, clearErrors } from '../../../../actions/errorActions';
import { toggleLoader } from '../../../../actions/loaderActions';
import LoadingSpinner from '../../loadingSpinners/LoadingSpinner';
import MainError from '../../errors/MainError';
import { validateReport } from '../../../../helpers/validateInputs';
import { reportArticle } from '../../../../actions/articleActions';
import ToasterAlert from '../../Alert/Alert';

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
    showAlert: false,
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

  flashMessage = () => {
    this.setState({ showAlert: true });

    setTimeout(() => {
      this.setState({ showAlert: false });
    }, 100);
  };

  handleArticleReport = (event) => {
    event.preventDefault();
    const { actions, toggle } = this.props;
    actions.toggleLoader();

    const { context, reportType } = this.state;
    const reportData = { context, reportType };
    const errors = validateReport(reportData);

    if (errors) {
      actions.toggleLoader();
      return actions.setErrors(errors);
    }

    reportData.articleId = this.props.articleId || 5;
    actions.clearErrors();
    return actions.reportArticle(reportData, toggle, this.flashMessage);
  };

  render() {
    const { errors = {}, isLoading } = this.props;

    return (
      <div className="heimdal-report-form">
        {this.state.showAlert && (
          <ToasterAlert
            type="success"
            title="Article Reported"
            message="Your report has been sent successfully"
          />
        )}
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
  errors: {},
  isLoading: false,
};

ReportArticle.propTypes = {
  articleId: PropTypes.number.isRequired,
  isLoading: PropTypes.bool,
  errors: PropTypes.object,
  toggle: PropTypes.func.isRequired,
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
