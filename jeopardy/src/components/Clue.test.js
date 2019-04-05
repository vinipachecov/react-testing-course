import React from 'react';
import { shallow } from 'enzyme';
import Clue from './Clue';
import { clue } from '../fixtures';

describe('<Clue />', () => {
  const props = {
    clue
  }
  let wrapper = shallow(<Clue {...props} />)  
  it('It renders the clue value', () => {
    expect(wrapper.find('h4').text()).toEqual(props.clue.value.toString())    
  });

  it('rendesr the clue question', () => {
    expect(wrapper.find('h5').at(0).text()).toEqual(props.clue.question)    
  });

  it('rendesr the clue answer', () => {
    expect(wrapper.find('h5').at(1).text()).toEqual(props.clue.answer)    
  });

  it('sets the answet with the text-hidden class', () => {
    expect(wrapper.find('h5').at(1).hasClass('text-hidden')).toBe(true)    
  });

  it('initializes the reveal state to be false', () => {
    expect(wrapper.state().reveal).toBe(false)    
  });

  describe('When rendering a clue with no value', () => {
    beforeEach(() => {
      props.clue.value = undefined;
      wrapper = shallow(<Clue {...props}/>)
    })
    it('displays the value as unkown', () => {
      expect(wrapper.find('h4').text()).toEqual('unkown');          
    });
  })

  describe('when clicking on the clue', () => {
    beforeEach(() => {
      wrapper.simulate('click');
    })    

    it('Sets the reveal state to be true', () => {
      expect(wrapper.state().reveal).toBe(true);            
    });

    it('sets the answer with the text-revealed class', () => {
      expect(wrapper.find('h5').at(1).hasClass('text-revealed')).toBe(true);      
    });
  }) 
  
})
