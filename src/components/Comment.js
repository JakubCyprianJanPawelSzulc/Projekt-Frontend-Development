import React, { useState } from 'react';
import { deleteCommentAction } from '../actions/commentActions.js';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import EditCommentForm from './EditCommentForm.js';

export default function Comment(props) {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const isLoggedIn = useSelector((state) => state.admin.isLoggedIn);

  function handleDeleteClick() {
    dispatch(deleteCommentAction(props.comment.id));
  }

  function handleEditClick() {
    setIsEditing(true);
  }

  function handleStopEditClick() {
    setIsEditing(false);
  }

  return (
    <div className="comment">
      <p className="comment-user">{props.comment.user}</p>
      <p className="comment-contents">{props.comment.contents}</p>
      {isLoggedIn && (
        <div className="comment-admin-panel">
          <button onClick={handleDeleteClick}>Usuń komentarz</button>
          {isEditing ? (
            <div>
              <button onClick={handleStopEditClick}>Skończ edytować</button>
              <EditCommentForm
                comment={props.comment}
                setIsEditing={setIsEditing}
              />
            </div>
          ) : (
            <button onClick={handleEditClick}>Edytuj komentarz</button>
          )}
        </div>
      )}
    </div>
  );
}
