import { Stars } from './Stars.js';
import { useDispatch } from 'react-redux';
import { deleteDrinkAction } from '../actions/drinkActions.js';
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Drink({ drink }) {
  const isLoggedIn = useSelector((state) => state.admin.isLoggedIn);
  const dispatch = useDispatch();
  function handleDeleteClick() {
    dispatch(deleteDrinkAction(drink.idDrink));
  }

  return (
    <div key={drink.idDrink} className="drink">
      {isLoggedIn && (
        <button onClick={() => handleDeleteClick(drink.idDrink)}>Usuń</button>
      )}
      <img src={drink.strDrinkThumb} className="drink-image" />
      <div className="drink-info">
        <div>{drink.strDrink}</div>
        <div>{drink.strAlcoholic}</div>
        <div className="gwiazdki">
          <Stars rating={drink.strRating} />
        </div>
      </div>
      <button className="drink-details-button">
        <Link to={`${drink.idDrink}`}>Szczegóły</Link>
      </button>
    </div>
  );
}
