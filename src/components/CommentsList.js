import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteCommentAction } from '../actions/commentActions.js';
import Comment from './Comment.js';

export default function CommentsList() {
  const commentsList = useSelector((state) => state.comments);
  const dispatch = useDispatch();
  return (
    <div className="comments-list">
      {commentsList.map((el) => (
        <Comment key={el.id} id={el.id} comment={el} />
      ))}
    </div>
  );
}
