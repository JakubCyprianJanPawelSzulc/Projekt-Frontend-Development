import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import { editCommentAction } from '../actions/commentActions';

export default function EditCommentForm({ comment }) {
  const dispatch = useDispatch();
  const initialValues = {
    id: comment.id,
    contents: comment.contents,
    user: comment.user,
  };
  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      dispatch(editCommentAction(values));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
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
      <button className="submit-button" type="submit">
        akceptuj
      </button>
    </form>
  );
}
