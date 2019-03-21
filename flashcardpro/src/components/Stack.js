import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Card from './Card'

class Stack extends Component {
  render() {    
    const { title, cards } = this.props.stack;    
    return (
      <div>
        <Link to='/' className='link-home'>
        <h4>Home</h4>          
        </Link>
        <h3>{title}</h3>     
        <br/>        {
          cards.map((card,index) => {
            return (
              <Card key={card.id} card={card} />              
            )
          })
        }   
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  stack: state.stackData
});

const mapDispatchToProps = {

}


export default connect(mapStateToProps, null)(Stack);