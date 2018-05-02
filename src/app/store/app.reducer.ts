import * as fromShoppingList from '../shopping-list/store/shopping-list.reducers';
import * as fromAuth from '../auth/store/auth.reducer';
import {ActionReducerMap} from '@ngrx/store';

export interface AppState {
  shoppingList: fromShoppingList.State,
  auth: fromAuth.State
}
export const reducer: ActionReducerMap<AppState> = {
  shoppingList: fromShoppingList.shoppingListReducers,
  auth: fromAuth.authReducer
};
