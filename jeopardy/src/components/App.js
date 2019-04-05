import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { CategoriesActions } from '../actions';

export class App extends Component {

  async componentDidMount() {
    if (this.props.categories.length === 0) {
      const response = await fetch('http://jservice.io/api/categories?count=20');
      const data = await response.json();
      this.props.setCategories(data);    
    }    
  }
  render() {    
    return (
      <div>
        <h2>Jeopardy</h2>
        {
          this.props.categories.map((category) => (
            <div key={category.id}>
              <Link 
                to='/category'
                onClick={() => this.props.pickCategory(category)}
              >
                <h4>{category.title}</h4>
              </Link>
            </div>
          ))
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  categories: state.categoriesData.categories
})

const mapDispatchToProps = {
  setCategories: CategoriesActions.setCategories,
  pickCategory: CategoriesActions.pickCategory
}

export default connect(mapStateToProps, mapDispatchToProps)(App);