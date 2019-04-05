import React from 'react';
import { mount, shallow } from 'enzyme';
import { Category, LinkedCategory } from './Category';
import { categories, clues } from '../fixtures';
import { fakeServer} from 'sinon';

const props = {
  category: categories[0]
}
describe('<Category />', () => {
  let server;
  beforeEach(() => {
    server = fakeServer.create();

    server.respondWith('GET',
    `http://jservice.io/api/clues?category=${props.category.id}`,
    [
      200, 
      { 'Content-Type': 'application/json' },
      JSON.stringify(clues)
    ])  
  })
  describe('When creating a new category', () => {
    let wrapper;
    beforeEach((done) => {
      wrapper = mount(<Category {...props} />);  
      server.respond();

      setTimeout(done);
      const servedClues = JSON.parse(server.responses[0].response[2]);
      wrapper.setState({ clues: servedClues })
    })        

    it('initializes the clues in state', () => {
      expect(wrapper.state().clues).toEqual(clues);      
    });

    it('renders the category title', () => {
      expect(wrapper.find(`h2`).text()).toEqual(props.category.title)      
    });

    it('should renders the correct number of clues', () => {
      expect(wrapper.find(`Clue`).length).toEqual(clues.length)
    });
  }) 

  describe('<LinkedCategory', () => {
    const linkedCategory = shallow(<LinkedCategory/>);

    it('creates the link to navigate home', () => {
      expect(linkedCategory.find('Link h4').text()).toEqual('Home')      
    });

    it('creates a category component', () => {
      expect(linkedCategory.find('Category').exists()).toBe(true);      
    });
    
  })
    
});
