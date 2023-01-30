import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Whoops404 from './Whoops404.js';
import DownloadButton from './DownloadButton.js';
import EditDrinkForm from './EditDrinkForm.js';

export default function DrinkDetails() {
  const isLoggedIn = useSelector((state) => state.admin.isLoggedIn);
  const { id } = useParams();
  const drinks = useSelector((state) => state.drinks);
  const drink = drinks.find((el) => el.idDrink === id);
  // const CalculateRate =
  //   drink.strRating.length > 0
  //     ? parseFloat(
  //         drink.strRating.reduce((a, b) => a + b, 0) / drink.strRating.length
  //       ).toFixed(1)
  //     : 0;
  return drink ? (
    <div className="drink-details">
      <h1>{drink.strDrink}</h1>
      <DownloadButton data={drink} typeOfData="ten przepis" />
      <img src={drink.strDrinkThumb} className="drink-details-image" />
      <div className="drink-details-info">
        <p>id: {drink.idDrink}</p>
        <p>
          ocena:{' '}
          {drink.strRating.length > 0
            ? parseFloat(
                drink.strRating.reduce((a, b) => a + b, 0) /
                  drink.strRating.length
              ).toFixed(1)
            : 0}
        </p>
        <p>czy alkoholowe: {drink.strAlcoholic}</p>
        <p>szkło: {drink.strGlass}</p>
        <ul>
          {' '}
          składniki:
          {drink.strIngredients.map((ingredient, index) => (
            <li key={ingredient}>
              {ingredient}: {drink.strMeasures[index]}
            </li>
          ))}
        </ul>
        <ul>
          przepis:
          {drink.strInstructions
            .split('.')
            .map((instruction) =>
              instruction !== '' ? (
                <li key={instruction}>{instruction}</li>
              ) : null
            )}
        </ul>
      </div>
      {isLoggedIn && <EditDrinkForm drink={drink} />}
    </div>
  ) : (
    <Whoops404 />
  );
}
