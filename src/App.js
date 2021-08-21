import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.comp'
import ShopPage from './pages/shop/shop.comp.js'
import Header from './components/header/header.comp.js';
import SignInSignUp from './pages/sign-in-sign-up/sign-in-sign-up';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path='/sigin' component={SignInSignUp} />
      </Switch>
    </div>
  );
}

export default App;
