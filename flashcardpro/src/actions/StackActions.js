import * as actionTypes from "./actionTypes";

export const setStack = (stack) => ({
  type: actionTypes.SET_STACK,
  stack
})


export const loadStacks = (stacks) => ({
  type: actionTypes.LOAD_STACKS,
  stacks
})

export const addStack = (stack) => ({
  type: actionTypes.ADD_STACK,
  stack
})
