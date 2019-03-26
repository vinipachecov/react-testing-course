import * as actionTypes from  './actionTypes';
import * as stackActions from './StackActions';
import { stack , stacks } from '../data/fixture';

describe('Stack Actions', () => {
  it('creates an action to set the main stack', () => {
    const expectedAction = {
      type: actionTypes.SET_STACK,
      stack
    }      
    
    expect(stackActions.setStack(stack)).toEqual(expectedAction);
  })      

  it('creates an action to add a stack', () => {
    const expectedAction = {
      type: actionTypes.ADD_STACK,
      stack
    }      

    expect(stackActions.addStack(stack)).toEqual(expectedAction);
  })

  it('creates an action to load stacks', () => {
    const expectedAction = {
      type: actionTypes.LOAD_STACKS,  
      stacks
    }      
    expect(stackActions.loadStacks(stacks)).toEqual(expectedAction);
  })

  
  
  
})
