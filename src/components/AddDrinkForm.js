import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { addDrinkAction } from '../actions/drinkActions.js';

export default function AddDrinkForm() {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      idDrink: uuidv4(),
      strDrink: '',
      strAlcoholic: '',
      strGlass: '',
      strInstructions: '',
      strDrinkThumb: '',
      strRating: [],
      strIngredients: [],
      strMeasures: [],
    },
    onSubmit: (values) => {
      dispatch(addDrinkAction(values));
      formik.resetForm({
        values: {
          idDrink: uuidv4(),
          strDrink: '',
          strAlcoholic: '',
          strGlass: '',
          strInstructions: '',
          strDrinkThumb: '',
          strRating: [],
          strIngredients: [],
          strMeasures: [],
        },
      });
    },
  });

  return (
    <div className="drinks-form">
      <form className="drinks-form-form" onSubmit={formik.handleSubmit}>
        <input
          value={formik.values.strDrink}
          name="strDrink"
          placeholder="Nazwa drinka"
          onChange={formik.handleChange}
          required
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
        />
        <input
          value={formik.values.strDrinkThumb}
          name="strDrinkThumb"
          placeholder="Zdjęcie drinka"
          onChange={formik.handleChange}
          required
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
        />
        <select
          value={formik.values.strAlcoholic}
          onChange={formik.handleChange}
          name="strAlcoholic"
          required
        >
          <option value="">wybierz</option>
          <option value="Alcoholic">Alkoholowy</option>
          <option value="Non-alcoholic">Bezalkoholowy</option>
        </select>
        <input
          value={formik.values.strGlass}
          name="strGlass"
          placeholder="Szkło"
          onChange={formik.handleChange}
          required
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
        />
        <textarea
          value={formik.values.strInstructions}
          name="strInstructions"
          placeholder="Instrukcje przygotowania (kolejne punkty podaj po kropce)"
          onChange={formik.handleChange}
          required
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          rows="3"
          cols="40"
        />
        <textarea
          value={formik.values.strIngredients}
          name="strIngredients"
          placeholder="Składniki (podaj po przecinku)"
          onChange={(e) =>
            formik.setFieldValue('strIngredients', e.target.value.split(','))
          }
          required
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          rows="3"
          cols="40"
        />
        <textarea
          value={formik.values.strMeasures}
          name="strMeasures"
          placeholder="Ilości składników (podaj po przecinku)"
          onChange={(e) =>
            formik.setFieldValue('strMeasures', e.target.value.split(','))
          }
          required
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          rows="3"
          cols="40"
        />
        <button type="submit">Dodaj drinka</button>
      </form>
    </div>
  );
}
