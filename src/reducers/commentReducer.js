import { ADD_COMMENT } from '../actions/commentActions';
import { DELETE_COMMENT } from '../actions/commentActions';
import { EDIT_COMMENT } from '../actions/commentActions';

export default function commentReducer(state = [], action) {
  switch (action.type) {
    case ADD_COMMENT:
      return [...state, action.payload];
    case DELETE_COMMENT:
      return [...state.filter((comment) => comment.id !== action.payload)];
    case EDIT_COMMENT:
      return [
        ...state.map((comment) => {
          if (comment.id === action.payload.id) {
            if (typeof action.payload.contents !== undefined)
              comment.contents = action.payload.contents;
            if (typeof action.payload.user !== undefined)
              comment.user = action.payload.user;
            return comment;
          } else return comment;
        }),
      ];
    default:
      return state;
  }
}
