export const ADD_COMMENT = 'ADD_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';

export const addCommentAction = (payload) => ({
  type: ADD_COMMENT,
  payload,
});

export const deleteCommentAction = (payload) => ({
  type: DELETE_COMMENT,
  payload,
});

export const editCommentAction = (payload) => ({
  type: EDIT_COMMENT,
  payload,
});
