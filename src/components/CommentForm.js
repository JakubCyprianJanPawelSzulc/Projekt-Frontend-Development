import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { addCommentAction } from '../actions/commentActions.js';

export default function CommentForm() {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      id: uuidv4(),
      contents: '',
      user: '',
    },
    onSubmit: (values) => {
      dispatch(addCommentAction(values));
      formik.resetForm({
        values: { id: uuidv4(), contents: '', user: '' },
      });
    },
  });

  return (
    <div id="comments" className="comments-form">
      <form className="comment-form-contents" onSubmit={formik.handleSubmit}>
        <input
          value={formik.values.user}
          name="user"
          placeholder="użytkownik"
          onChange={formik.handleChange}
          required
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
        />
        <textarea
          value={formik.values.contents}
          name="contents"
          placeholder="komentarz"
          onChange={formik.handleChange}
          required
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
        />
        <button className="comment-submit-button" type="submit">
          dodaj
        </button>
      </form>
    </div>
  );
}
