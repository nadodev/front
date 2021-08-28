import { BrowserRouter, Switch, Route } from 'react-router-dom';

import React from 'react';
import Login from '../pages/Login';
import Header from '../components/Header';
import { GlobalStyle } from '../styles/GlobalStyles';

export default function Routes() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={Login} />
        </Switch>
      </BrowserRouter>
    </>
  );
}
