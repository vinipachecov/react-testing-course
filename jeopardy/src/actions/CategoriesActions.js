import * as ActionTypes from './actionTypes'

export const setCategories = (categories) => ({
  type: ActionTypes.SET_CATEGORIES,
  categories
})

export const pickCategory = (category) => ({
  type: ActionTypes.PICK_CATEGORY,
  category
})

