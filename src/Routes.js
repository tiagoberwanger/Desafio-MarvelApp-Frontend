import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';
import Home from './components/Home';
import Comics from './components/Comics';
import Characters from './components/Characters';
import DetailedCom from './components/DetailedCom';
import DetailedChar from './components/DetailedChar';
import FavComics from './components/FavComics';
import FavCharacters from './components/FavCharacters';

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={ Login } />
        <Route path="/register" component={ Register } />
        <Route path="/profile/fav-comics" component={ FavComics } />
        <Route path="/profile/fav-characters" component={ FavCharacters } />
        <Route path="/profile" component={ Profile } />
        <Route path="/home" component={ Home } />
        <Route path="/comics/:id" component={ DetailedCom } />
        <Route path="/comics" component={ Comics } />
        <Route path="/characters/:id" component={ DetailedChar } />
        <Route path="/characters" component={ Characters } />
        <Redirect from="/" to="/login" />
      </Switch>
    </Router>
  );
}

export default Routes;
