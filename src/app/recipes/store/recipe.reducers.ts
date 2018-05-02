import {Ingredient} from '../../shared/ingredient.model';
import {Recipe} from '../recipes.mode';
import * as RecipeActions from './recipe.actions';
import * as fromApp from '../../store/app.reducer';

export interface FeatureState extends fromApp.AppState {
  recipes: State;
}
export interface State {
  recipes: Recipe[];
}

const initialState: State = {
   recipes: [
    new Recipe(
      'Burger',
      'Country Burger',
      'http://www.vegane-produkte.net/wp-content/uploads/2014/02/country-burger-burger-king-e1392745652870.jpg',
      [
        new Ingredient('potato', 1),
        new Ingredient('chilichess sause', 2),
        new Ingredient('tomato', 1),
        new Ingredient('pommes', 20)
      ]),
    new Recipe(
      'PavBhaji',
      'this is simply delicious storm of vegetables',
      'https://www.vegrecipesofindia.com/wp-content/uploads/2010/02/pav-bhaji-recipe-1.jpg',
      [
        new Ingredient('angli pav', 24),
        new Ingredient('all vegitables', 1)
      ])
  ]
};

export function recipeReducer(state = initialState, action: RecipeActions.RecipeActions) {
  switch (action.type) {
    case (RecipeActions.SET_RECIPES):
      return {
        ...state,
        recipes: [...action.payload]
      };
    case (RecipeActions.ADD_RECIPES) :
      return {
        ...state,
        recipes: [...state.recipes, action.payload]
      };
    case (RecipeActions.UPDATE_RECIPES) :
      console.log(action.payload.updatedRecipe);
      const recipe = state.recipes[action.payload.index];
      const updatedRecipe = {
        ...recipe,
        ...action.payload.updatedRecipe
      };
      const recipes = [...state.recipes];
      recipe[action.payload.index] = updatedRecipe;
      return {
        ...state,
        recipes: recipes
      };
    case (RecipeActions.DELETE_RECIPES) :
      const oldRecipes = [...state.recipes];
      oldRecipes.splice(action.payload, 1);
      return {
        ...state,
        recipes: oldRecipes
      };
    default :  return state;
  }
}
