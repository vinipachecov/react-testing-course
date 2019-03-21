import React from 'react';
import ReactDOM from 'react-dom';
import { createStore   } from 'redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux'
import App from './components/App';
import Stack from './components/Stack';
import StackForm from './components/StackForm';
import reducers from './reducers';
import './index.css';

const store = createStore(reducers);
store.subscribe(() => console.log('store', store.getState()))
ReactDOM.render(
  <Provider store={store} >
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={App}/>
        <Route path='/stack' component={Stack} />
        <Route path='/stack-form' component={StackForm} />
      </Switch>
    </BrowserRouter>
  </Provider>, document.getElementById('root'));