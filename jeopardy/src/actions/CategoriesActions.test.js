import * as ActionTypes from './actionTypes';
import * as categoryActions from './CategoriesActions';
import { categories } from '../fixtures';

describe('CategoryActions', () => {
  it('creates an action to set categories', () => {
        const expectedAction = {
          type: ActionTypes.SET_CATEGORIES,
          categories
        }
        expect(categoryActions.setCategories(categories)).toEqual(expectedAction);
  });   
  
  it('creates an action to pick a category', () => {
    const category = categories[0];
    
    const expectAction = {
      type: ActionTypes.PICK_CATEGORY,
      category
    }

    expect(categoryActions.pickCategory(category)).toEqual(expectAction)
  });
})

