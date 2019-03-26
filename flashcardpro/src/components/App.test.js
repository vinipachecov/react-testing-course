import React from 'react';
import { shallow } from 'enzyme';
import App from './App';


describe('<App />', () => {
  const app = shallow(<App />)
  it('Renders the title `Flashcard Pro` title', () => {    
    expect(app.find('h2').text()).toEqual('Flashcard Pro')    
  })

  it('renders the stackList ', () => {
    // console.log(app.debug());
    expect(app.find('Connect(StackList)').exists()).toBe(true)
  })

  it('renders a link to create new stack ', () => {
    expect(app.find('Link h4').text()).toEqual('Create a New Stack')    ;
  })
  
})
