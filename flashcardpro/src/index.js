import React from 'react';
import ReactDOM from 'react-dom';
import { createStore   } from 'redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux'
import App from './components/App';
import Stack from './components/Stack';
import reducers from './reducers';

const store = createStore(reducers);
store.subscribe(() => console.log('store', store.getState()))
ReactDOM.render(
  <Provider store={store} >
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={App}/>
        <Route path='/stack' component={Stack} />
      </Switch>
    </BrowserRouter>
  </Provider>, document.getElementById('root'));