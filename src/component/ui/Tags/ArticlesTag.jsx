import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './ArticlesTag.scss';

/**
 * @description - Heimdal Authors Haven Tag Component
 * @param {props} Class - the class of the tag(bootstrap or custom)
 * @param {props} name - the title of the tag
 * @param {props} type - the type of the tag(no-border,transparent,coloured)
 * @returns {component} ArticleTag
 */
const ArticleTag = props => (
  <Fragment>
    <a href={`/search?query=${props.name}`}>
      <button type='button' className={`${props.Class} tags`}>
        {props.name}
      </button>
    </a>
  </Fragment>
);

ArticleTag.defaultProps = {
  Class: '',
  name: 'Heimdal Tag',
};

ArticleTag.propTypes = {
  Class: PropTypes.string,
  name: PropTypes.string,
};

export default ArticleTag;
