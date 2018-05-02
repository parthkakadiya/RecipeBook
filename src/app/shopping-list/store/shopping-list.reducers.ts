import * as ShoppingListAction from './shopping-list.action';
import {Ingredient} from '../../shared/ingredient.model';

export interface AppState {
  shoppingList: State;
}

export interface State {
  ingredients: Ingredient[];
  editedIngredient: Ingredient;
  editedIngredientIndex: number;
}
const initialState: State = {
  ingredients: [
    new Ingredient('Apple', 6),
    new Ingredient('tomato', 10)],
  editedIngredient: null,
  editedIngredientIndex: -1
};

export function shoppingListReducers(state = initialState, action: ShoppingListAction.ShoppingListAction) {
   switch (action.type) {
     case ShoppingListAction.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: [...state.ingredients, action.payload]
      };
     case ShoppingListAction.ADD_INGREDIENTS:
       return{
         ...state,
         ingredients: [...state.ingredients, ...action.payload]
       }
     case ShoppingListAction.UPDATE_INGREDIENT:
       const ingredient = state.ingredients[state.editedIngredientIndex];
       const updateIngredient = {
         ...ingredient,
         ...action.payload.ingredient
       };
       const ingredients = [...state.ingredients];
       ingredients[state.editedIngredientIndex] = updateIngredient;
       return {
         ...state,
         ingredients: ingredients,
         editedIngredient: null,
         editedIngredientIndex: -1
       };
     case ShoppingListAction.DELETE_INGREDIENT:
       const OldIngredients = [...state.ingredients];
       OldIngredients.splice(state.editedIngredientIndex, 1);
       return{
         ...state,
         ingredients: OldIngredients,
         editedIngredient: null,
         editedIngredientIndex: -1
       };
     case ShoppingListAction.START_EDIT:
       const editedIngredient = {...state.ingredients[action.payload]};
       return {
         ...state,
         editedIngredient: editedIngredient,
         editedIngredientIndex: action.payload
       }
     case ShoppingListAction.STOP_EDIT:
       return {
         ...state,
         editedIngredient: null,
         editedIngredientIndex: -1
       }
    default:
      return state;
  }
}
