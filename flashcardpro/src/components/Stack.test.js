import React from 'react';
import { shallow } from 'enzyme';
import { Stack } from './Stack';
import { stack } from '../data/fixture';

const props = { stack }

describe('<Stack />', () => {    
  let stack = shallow(<Stack {...props} />);  

  it('should renders the title', () => {    
    // console.log(stack.debug())
    expect(stack.find('h3').text()).toEqual(props.stack.title);    
  })

  it('renders the link home', () => {
    expect(stack.find('Link h4').text()).toEqual('Home');
  });

  it('renders the correct number of cards', () => {
    expect(stack.find('Card').length).toEqual(props.stack.cards.length)    
  });
}) 
