import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import HomePage from './views/homepage'
import Page404 from './views/page404'

import './App.css';

export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render() {

    return ( 
      <div className="app-wrapper">
        <BrowserRouter basename='/'>
          <Switch>
              <Route exact path="/" component={HomePage} />
              <Route component={Page404} />     
          </Switch>
        </BrowserRouter>
      </div>
    );

  }
}
