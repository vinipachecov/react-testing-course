import React from 'react';
import { mount } from 'enzyme';
import App from './App';

describe('<App />', () => {
  let app = mount(<App />);
  test('renders App title', () => {
    // console.log(app.debug());
    
    expect(app.find('h2').text()).toEqual('Note to self');
  });    

  it('renders the clear button ', () => {
    // find will find all elents that match
    // at helper will help loop over the results
    expect(app.find('.btn').at(1).text()).toEqual('Clear Notes');    
  })

  describe('when rendering the form', () => {
    it('creates a Form component ', () => {
      expect(app.find("Form").exists()).toBe(true);      
    });
    
    it('renders a formControl component ', () => {
      expect(app.find('FormControl').exists()).toBe(true);      
    })

    it('renders a submit button', () => {
      expect(app.find('.btn').at(0).text()).toEqual('Submit');
    })
  })

  describe('when creating a note', () => {
    let testNote = "test note";
    // simulate a click of a button
    // before each test
    beforeEach(() => {
      app.find('FormControl').simulate('change', {
        target: { value: testNote}
      });
    })

    test('updates the text in state ', () => {
      expect((app.state().text)).toEqual(testNote);      
    })

      //  how about when the user submit a new note
    describe('and submitting the new note', () => {      
      beforeEach(() => {
        app.find('.btn').at(0).simulate('click');
      })+      

      it('adds the new note to state ', () => {
        expect(app.state().notes[0].text).toEqual(testNote);        
      })

      // how about stored cookies?
      describe('and remounting the component', () => {
        let app2;
        
        beforeEach(() => {
          app2 = mount(<App />);
        });

        it('reads stored note cookies ', () => {
          console.log('app2', app2.state());   
          expect(app2.state().notes).toEqual([{text: testNote}])                 
        })
        


      })
      

      // when the user clear the notes
      describe('and clicking the clear button', () => {
        beforeEach(() => {
          app.find('.btn').at(1).simulate('click');
        })

        it('clears the notes in state', () => {
          expect(app.state().notes).toEqual([]);          
        })
        
        
      })
      
      
    });
    
    
  })
  
})
