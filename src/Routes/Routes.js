import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {
  CSSTransition,
  TransitionGroup
} from 'react-transition-group';

import DefaultLayout from '../components/Header'
import HomePage from '../pages/HomePage'

const Routes = () => (
  <Route render={({ location }) => (
    <TransitionGroup>
      <CSSTransition
        key={location.key}
        timeout={2000}
        classNames="fade"
      >
        <Switch>
          <DefaultLayout path="/" exact component={HomePage} />
          {/* <DefaultLayout
            to="/not_found"
            component={}
            hideFooter
            hideHeader
            hideBrands
            hideShippingInfo
          /> */}
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  )}
  />
);

export default Routes;
