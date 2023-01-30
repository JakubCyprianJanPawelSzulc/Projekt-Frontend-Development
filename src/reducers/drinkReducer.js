import {
  DELETE_DRINK,
  ADD_DRINK,
  EDIT_DRINK,
} from '../actions/drinkActions.js';

import data from '../data.json';

export default function drinkReducer(state = data.drinks, action) {
  switch (action.type) {
    case DELETE_DRINK:
      return state.reduce((accumulator, currentValue) => {
        if (currentValue.idDrink !== action.payload) {
          return [...accumulator, currentValue];
        }
        return accumulator;
      }, []);
    case ADD_DRINK:
      return [...state, action.payload];

    case EDIT_DRINK:
      return [
        ...state.map((drink) => {
          if (drink.idDrink === action.payload.idDrink) {
            if (typeof action.payload.strDrink !== undefined)
              drink.strDrink = action.payload.strDrink;
            if (typeof action.payload.strAlcoholic !== undefined)
              drink.strAlcoholic = action.payload.strAlcoholic;
            if (typeof action.payload.strGlass !== undefined)
              drink.strGlass = action.payload.strGlass;
            if (typeof action.payload.strInstructions !== undefined)
              drink.strInstructions = action.payload.strInstructions;
            if (typeof action.payload.strDrinkThumb !== undefined)
              drink.strDrinkThumb = action.payload.strDrinkThumb;
            if (typeof action.payload.strIngredients !== [])
              drink.strIngredients = action.payload.strIngredients;
            if (typeof action.payload.strMeasures !== [])
              drink.strMeasures = action.payload.strMeasures;
            return drink;
          } else return drink;
        }),
      ];

    default:
      return state;
  }
}
