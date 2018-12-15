import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  Route,
  Switch,
  BrowserRouter ,
  
} from 'react-router-dom'

// reducers
import reducers from './reducers'

// import main style dependency file
import './index.css';

// pages

import App from './App'
import Preindex from './views/preindex'
import Page404 from './views/page404'
import HomePage from './views/homepage'

// create store
let store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={App} />
				<Route component={Page404} />
			</Switch>
		</BrowserRouter>
	</Provider>,
    document.getElementById('root')
);
