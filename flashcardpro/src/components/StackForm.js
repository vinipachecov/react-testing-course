import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Form, FormGroup, FormControl, FormLabel, Button } from 'react-bootstrap';
import { StackActions } from '../actions'

export class StackForm extends Component {

  constructor() {
    super();
    this.state = {
      title: '',
      cards: []
    }
  }

  onAddCard() {
    const { cards } = this.state;
    cards.push({ id: cards.length, prompt: '', answer: '' });
    this.setState({ cards });
  }

  onTitleChange(value) {
    this.setState({ title: value });
  }

  onchangeCard(event, index, part)  {
    const { cards } = this.state;
    cards[index][part] = event.target.value;    
    this.setState({ cards });
  } 

  onAddStack() {
    console.log(this.state);
    this.props.addStack(this.state);
  }

  render() {    
    return (
      <div>
        <Link to="/" className="link-home">
        <h4>Home</h4>
        </Link>
        <h4>Create a New Stack</h4>
        <Form>
          <FormGroup>
            <FormLabel >Title: </FormLabel>
            {' '}
            <FormControl value={this.state.title} onChange={event => this.onTitleChange(event.target.value) } />
          </FormGroup>
          {
            this.state.cards.map((card,index ) => 
              <div key={card.id}>
                <br/>
                <FormGroup>
                  <FormLabel>Prompt:</FormLabel>
                  {' '}
                  <FormControl onChange={event => this.onchangeCard(event, index, 'prompt')} />
                  {' '}
                  <FormLabel>Answer:</FormLabel>
                  {' '}
                  <FormControl onChange={event => this.onchangeCard(event, index, 'answer')}/>
                </FormGroup>
              </div>
              )
          }
        </Form>
        <br/>
        <Button onClick={() => this.onAddCard()}>Add Card</Button>
        {' '}
        <Button onClick={() => this.onAddStack()}>Add Stack</Button>
      </div>
    )
  }
}

const mapDispatchToProps = {
  addStack: StackActions.addStack
}

export default connect(null, mapDispatchToProps)(StackForm);