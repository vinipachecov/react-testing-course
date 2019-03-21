import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import stacks from '../data/stacks.json';
import { StackActions } from '../actions/index'

class StackList extends Component {
  
  render() {    
    console.log(this.props)
    return (
      <div>
        {
          stacks.map((stack,index) => (
            <Link 
              to='/stack'
              key={index}
              onClick={() => {              
              this.props.setStack(stack)}              
            }>
            <h4 key={stack.id}>{stack.title}</h4>
            </Link>          
            )
          )
        }        
      </div>
    )
  }
}

const mapStateToProps = (state ) => ({

})

const mapDispatchToProps = {
  setStack: StackActions.setStack
}
export default connect(mapStateToProps, mapDispatchToProps)(StackList);

