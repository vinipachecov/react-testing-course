import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Clue from './Clue';

export class Category extends Component {

  constructor() {
    super();

    this.state = {
      clues: []
    }
  }

  async componentDidMount() {
    try {
      const response = await fetch(`http://jservice.io/api/clues?category=${this.props.category.id}`);
      const data = await response.json();       
      this.setState({ clues: data });      
    } catch (error) {
      console.log(error);
      // alert(error);      
    }    
  }
  render() {    
    return (
      <div>        
        <h2>{this.props.category.title}</h2>
        { this.state.clues.map(clue => (
          <Clue key={clue.id} clue={clue} />          
        ))}
      </div>
    )
  }
}

export class LinkedCategory extends Component {
  render() {
    return (
      <div>
         <Link className='link-home' to='/'>
          <h4>Home</h4>
        </Link>
        <Category category={this.props.category} /> 
      </div>
    )
  }
  
}

const mapStateToProps = (state) => ({
  category: state.categoriesData.categorySelected
})

export default connect(mapStateToProps, null)(LinkedCategory);