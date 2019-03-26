import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import stacks from '../data/stacks.json';
import { StackActions } from '../actions/index'

export class StackList extends Component {

  componentDidMount() {
    // prevent reloading the stack everytime the page is visited
    if (this.props.stacks.length === 0) {
      this.props.loadStacks(stacks);
    }    
  }  
  
  render() {    
    console.log(this.props)
    return (
      <div>
        {
          this.props.stacks.map((stack,index) => (
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
  stacks: state.stackData.stacks
})

const mapDispatchToProps = {
  setStack: StackActions.setStack,
  loadStacks: StackActions.loadStacks
}
export default connect(mapStateToProps, mapDispatchToProps)(StackList);

