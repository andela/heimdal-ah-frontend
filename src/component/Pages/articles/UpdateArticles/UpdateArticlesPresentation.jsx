import React, { Fragment } from 'react';
import Editor from 'react-medium-editor';
import checkAuthentication from '../../../../utils/checkAuthentication';
import Alert from '../../../ui/Alert/Alert';
import './UpdateArticles.scss';
// eslint-disable-next-line import/no-named-as-default
import UpdateArticles from './UpdateArticles';

const UpdatePasswordPresentation = () => (
  <UpdateArticles>
    {
      data => (
        <Fragment>
          {checkAuthentication()}
          {data.updateArticlesStatus === 'SUCCESS' && <Alert type='success' title='Article Update' message='Article updated successfully' />}
          {data.updateArticlesStatus === 'ERROR' && <Alert type='warning' title='Server Error' message='An error occured while trying to update your article, please try again' />}
          <br />
          <button type='submit' className='update-articles __button' onClick={e => data.onHandleSubmit(e)}>Update Article</button>
          <div className='update-articles __title'>
            <Editor
              tag="pre"
              data-placeholder="Article Title"
              text={data.title}
              onChange={data.onHandleTitle}
              options={{ toolbar: false }}
            />
          </div>
          <div className='update-articles __text'>
            <Editor
              tag="pre"
              data-placeholder="Article Body"
              text={data.body}
              onChange={data.onHandleText}
              options={{ toolbar: { buttons: ['bold', 'italic', 'underline', 'anchor', 'h2', 'h3', 'quote', 'html', 'strikethrough', 'subscript', 'superscript'] } }}
            />
          </div>
        </Fragment>
      )
    }
  </UpdateArticles>
);

export default UpdatePasswordPresentation;
