import React from 'react';
import { shallow } from 'enzyme';
import { StackForm } from './StackForm';

const changeTitle = 'change title';
const changePrompt = 'change prompt';
const changeAnswer =  'change answer'

describe('<StackForm />', () => {
  let stackform = shallow(<StackForm />);
  
  it('renders the form title', () => {
    expect(stackform.find('h4').at(1).text()).toEqual('Create a New Stack');    
  })
  
  it('renders a link home', () => {
    expect(stackform.find('h4').first().text()).toEqual('Home')    
  })

  // form document gets rendered as forwardRef element
  it('renders a form component', () => {    
    expect(stackform.find('ForwardRef(Bootstrap(Form))').exists()).toBe(true);    
  })

  it('renders a button to add a new card', () => {
    // console.log(stackform.debug())
    expect(stackform.find("ForwardRef(Bootstrap(Button))").at(0).props().children).toEqual('Add Card');
  })

  it('renders a button to submit the form', () => {
    expect(stackform.find('ForwardRef(Bootstrap(Button))').at(1).props().children).toEqual('Add Stack')    
  })

  describe('and updating the title', () => {
    beforeEach(() => {
      // console.log(stackform.find('ForwardRef(ContextTransform)').length)
      stackform.find('ForwardRef(ContextTransform)').at(1).simulate('change',  { target : { value :changeTitle}})      
    })

    it('updates the title in the state', () => {
      // console.log(stackform.state());      
      expect(stackform.state().title).toEqual(changeTitle)
    });
    
  })

  describe('when adding a new card', () => {
    beforeEach(() => {
      stackform.find("ForwardRef(Bootstrap(Button))").at(0).simulate('click');
    })    

    afterEach(() => {
      stackform.setState({ cards: [] });
    })

    it('adds a new card to the state', () => {
      expect(stackform.state().cards.length).toEqual(1);      
    });

    it('renders the prompt section', () => {      
      expect(stackform.find('ForwardRef(ContextTransform)').at(2).props().children).toEqual('Prompt:')      
    });

    it('renders the answer section', () => {      
      expect(stackform.find('ForwardRef(ContextTransform)').at(4).props().children).toEqual('Answer:')      
    });

    describe('and updating the card prompt', () => {
      beforeEach(() => {        
        stackform.find('ForwardRef(ContextTransform)').at(3).simulate('change', {target: { value: changePrompt}});
      })

      it('updates the prompt in the state', () => {  
        // console.log(stackform.state());      
        expect(stackform.state().cards[0].prompt).toEqual(changePrompt)
      })
      
    })
    
    describe('and updating the card answer', () => {
      beforeEach(() => {
        stackform.find('ForwardRef(ContextTransform)').at(5).simulate('change', {target: { value: changeAnswer}})
      })      

      it('updates the answer in the state', () => {
        console.log(stackform.state().cards);
        expect(stackform.state().cards[0].answer).toEqual(changeAnswer);
      })    
    })    
    
  })
})
