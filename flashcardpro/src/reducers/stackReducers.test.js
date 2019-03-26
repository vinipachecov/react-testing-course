import rootReducer from './index';
import * as actionTypes from '../actions/actionTypes';
import { stack, stacks } from '../data/fixture';
import { root } from 'postcss';

// remember that reducers takes actions and
//  returns something different depending on the action given.

describe('StackReducer', () => {
    it('returns the initial state', () => {
      expect(rootReducer({}, {})).toEqual({
        stackData: {
          cards: [],
          id: null,
          stacks: [],
          title: ''
        }
      })            
    })

    it('sets the main stack ', () => {
      console.log(rootReducer({}, {
        type: actionTypes.SET_STACK,
        stack
      }));
      expect(rootReducer({}, {
        type: actionTypes.SET_STACK,
        stack
      })).toEqual({
        stackData: {
          ...stack, stacks: []
        }        
      })      
    })

    it('loads stacks', () => {
      expect(rootReducer({}, {
        type:actionTypes.LOAD_STACKS,
        stacks
      })).toEqual({        
        stackData: {
          stacks,
          cards: [],
          id: null,
          title: ''
        }
      })      
    })

    it('adds a stack', () => {
      const testStack = { title: 'test title', cards: [] };

      expect(rootReducer({}, {
        type: actionTypes.ADD_STACK,
        stack: testStack
      })).toEqual({ 
        stackData: {          
          stacks: [{ ...testStack, id: 0}],
          cards: [],
          id: null,
          title: ''
        }         
      });
    })
    
    
    
})
