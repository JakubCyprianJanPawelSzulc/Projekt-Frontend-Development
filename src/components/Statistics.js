import React, { useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';
import { CChart, CChartBar } from '@coreui/react-chartjs';
import { useSelector } from 'react-redux';
import StatisticsTable from './StatisticsTable.js';
export default function Statistics() {
  const drinks = useSelector((state) => state.drinks);
  const alcoholic = drinks.filter(
    (drink) => drink.strAlcoholic === 'Alcoholic'
  ).length;
  const nonAlcoholic = drinks.filter(
    (drink) => drink.strAlcoholic === 'Non-alcoholic'
  ).length;

  const mostRated = drinks.sort(
    (a, b) => b.strRating.length - a.strRating.length
  );
  const mostRatedLabels = mostRated.slice(0, 5).map((drink) => drink.strDrink);
  const mostRatedData = mostRated
    .slice(0, 5)
    .map((drink) => drink.strRating.length);

  const calculateMostUsedIngredients = () => {
    const ingredientsArray = [];
    const ingredientsCount = [];

    drinks.forEach((drink) => {
      drink.strIngredients.forEach((ingredient, index) => {
        if (ingredientsArray.includes(ingredient)) {
          const indexOfIngredient = ingredientsArray.indexOf(ingredient);
          ingredientsCount[indexOfIngredient] += 1;
        } else {
          ingredientsArray.push(ingredient);
          ingredientsCount.push(1);
        }
      });
    });

    const sortedIngredientsCount = [...ingredientsCount].sort((a, b) => b - a);
    const mostUsedIngredients = sortedIngredientsCount.slice(0, 5);
    const mostUsedIngredientsLabels = [];
    mostUsedIngredients.forEach((ingredientCount) => {
      const indexOfIngredient = ingredientsCount.indexOf(ingredientCount);
      mostUsedIngredientsLabels.push(ingredientsArray[indexOfIngredient]);
      ingredientsCount[indexOfIngredient] = -1;
    });

    return {
      labels: mostUsedIngredientsLabels,
      datasets: [
        {
          label: 'Liczba użyć składnika',
          backgroundColor: ['red', 'orange', 'yellow', 'green', 'blue'],
          data: mostUsedIngredients,
        },
      ],
    };
  };
  const mostUsedIngredients = calculateMostUsedIngredients();
  const mostUsedIngredientsLabels = mostUsedIngredients.labels;

  const calculateMostUsedGlasses = () => {
    const glassesArray = [];
    const glassesCount = [];

    drinks.forEach((drink) => {
      if (glassesArray.includes(drink.strGlass)) {
        const indexOfGlass = glassesArray.indexOf(drink.strGlass);
        glassesCount[indexOfGlass] += 1;
      } else {
        glassesArray.push(drink.strGlass);
        glassesCount.push(1);
      }
    });

    const sortedGlassesCount = [...glassesCount].sort((a, b) => b - a);
    const mostUsedGlasses = sortedGlassesCount.slice(0, 5);
    const mostUsedGlassesLabels = [];
    mostUsedGlasses.forEach((glassCount) => {
      const indexOfGlass = glassesCount.indexOf(glassCount);
      mostUsedGlassesLabels.push(glassesArray[indexOfGlass]);
      glassesCount[indexOfGlass] = -1;
    });

    return {
      labels: mostUsedGlassesLabels,
      datasets: [
        {
          label: 'Most used glasses',
          backgroundColor: ['red', 'orange', 'yellow', 'green', 'blue'],
          data: mostUsedGlasses,
        },
      ],
    };
  };
  const mostUsedGlasses = calculateMostUsedGlasses();
  const mostUsedGlassesLabels = mostUsedGlasses.labels;

  return (
    <div className="statistics">
      <div className="pie-chart">
        <CChart
          type="pie"
          data={{
            labels: ['Alkoholowe', 'Bezalkoholowe'],
            datasets: [
              {
                label: 'Types of drinks',
                backgroundColor: ['magenta', 'darkviolet'],
                data: [alcoholic, nonAlcoholic],
              },
            ],
          }}
          options={{
            legend: {
              position: 'top',
              labels: {
                fontSize: 14,
                boxWidth: 20,
              },
            },
            responsive: false,
            maintainAspectRatio: false,
            title: {
              display: true,
              text: 'Types of drinks',
              fontSize: 20,
            },
          }}
        />
      </div>
      <div className="bar-chart">
        <CChart
          type="bar"
          data={{
            labels: mostRatedLabels,
            datasets: [
              {
                label: 'Liczba ocen',
                backgroundColor: ['red', 'orange', 'yellow', 'green', 'blue'],
                data: mostRatedData,
              },
            ],
          }}
          options={{
            legend: {
              position: 'top',
              labels: {
                fontSize: 14,
                boxWidth: 20,
              },
            },
            responsive: false,
            maintainAspectRatio: false,
            title: {
              display: true,
              text: 'Most rated drinks',
              fontSize: 20,
            },
          }}
        />
      </div>
      <div className="bar-chart">
        <CChartBar
          type="bar"
          data={calculateMostUsedIngredients()}
          options={{
            legend: {
              display: false,
            },
            title: {
              display: true,
              text: 'Most used ingredients',
              fontSize: 20,
            },
            responsive: false,
            maintainAspectRatio: false,
          }}
        />
      </div>
      <div className="doughnut-chart">
        <CChart
          type="doughnut"
          data={{
            labels: mostUsedGlassesLabels,
            datasets: mostUsedGlasses.datasets,
          }}
          options={{
            legend: {
              position: 'top',
              labels: {
                fontSize: 14,
                boxWidth: 20,
              },
            },
            responsive: false,
            maintainAspectRatio: false,
            title: {
              display: true,
              text: 'Most used glass types',
              fontSize: 20,
            },
          }}
        />
      </div>

      <StatisticsTable
        statistics={[
          { name: 'Ilość alkoholowych drinków', value: alcoholic },
          { name: 'Ilość bezalkoholowych drinków', value: nonAlcoholic },
          {
            name: 'Najczęściej oceniane drinki',
            value: mostRatedLabels.join(', '),
          },
          {
            name: 'Najczęściej używane składniki',
            value: mostUsedIngredientsLabels.join(', '),
          },
          {
            name: 'Najczęściej używane szkło',
            value: mostUsedGlassesLabels.join(', '),
          },
        ]}
      />
    </div>
  );
}
