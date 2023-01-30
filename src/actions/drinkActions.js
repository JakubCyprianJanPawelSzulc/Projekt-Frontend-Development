export const DELETE_DRINK = 'DELETE_DRINK';
export const ADD_DRINK = 'ADD_DRINK';
export const EDIT_DRINK = 'EDIT_DRINK';

export const deleteDrinkAction = (payload) => {
  return {
    type: DELETE_DRINK,
    payload,
  };
};

export const addDrinkAction = (payload) => ({
  type: ADD_DRINK,
  payload,
});

export const editDrinkAction = (payload) => ({
  type: EDIT_DRINK,
  payload,
});
