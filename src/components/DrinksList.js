import { useSelector, useDispatch } from 'react-redux';
import React, { useState, useEffect } from 'react';
import Drink from './Drink';
import { addDrinkAction } from '../actions/drinkActions';
import AddDrinkForm from './AddDrinkForm.js';

export default function DrinksList() {
  const dispatch = useDispatch();
  const drinks = useSelector((state) => state.drinks);
  const isLoggedIn = useSelector((state) => state.admin.isLoggedIn);
  const [searchTerm, setSearchTerm] = useState('');
  const filteredDrinks =
    searchTerm !== ''
      ? drinks
          .filter((el) =>
            el.strDrink.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((drink) => <Drink key={drink.idDrink} drink={drink} />)
      : drinks
          .sort((a, b) => a.idDrink - b.idDrink)
          .map((drink) => <Drink key={drink.idDrink} drink={drink} />);

  return (
    <div className="drinks-list">
      <input
        className="search-bar"
        type="text"
        placeholder="🔍 wyszukaj"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
      />
      {isLoggedIn && <AddDrinkForm />}
      <div className="der-liste">{filteredDrinks}</div>
    </div>
  );
}
