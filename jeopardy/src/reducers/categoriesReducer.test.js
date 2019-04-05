import rootReducer from './index';
import * as actionTypes from '../actions/actionTypes';
import { categories } from '../fixtures';

describe('CategoriesReducer', () => {
  const category = categories[0];
  it('returns the initial state', () => {
    const { categoriesData } = rootReducer({},{});
    expect(categoriesData).toEqual({
      categories: [],
      categorySelected: null
    })    
  });

  it('sets categories', () => {
    const setCategories = {
      type: actionTypes.SET_CATEGORIES,
      categories
    }
    const { categoriesData } = rootReducer({},setCategories);
    expect(categoriesData).toEqual({
      categories,
      categorySelected: null
    })    
  });

  it('pciks a category', () => {
    const pickCategory = {
      type: actionTypes.PICK_CATEGORY,
      category
    }
    const { categoriesData } = rootReducer({},pickCategory);    
    expect(categoriesData).toEqual({
      categories: [],
      categorySelected: category
    })
  });
})

