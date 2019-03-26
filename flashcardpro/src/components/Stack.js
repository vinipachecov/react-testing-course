import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Card from './Card'

export const Stack = (props) => {  
    const { title, cards } = props.stack;    
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



export default Stack;