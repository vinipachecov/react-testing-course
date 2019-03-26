import React from 'react';
import { shallow } from 'enzyme';
import { StackList } from './StackList';
import { stacks } from '../data/fixture';

const props = { stacks };

describe('<StackList />', () => {
  const stackList = shallow(<StackList {...props} />);
  it('renders the correct ', () => {
    expect(stackList.find('Link').length).toEqual(props.stacks.length);    
  })  
})
