import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Home from './pages/Home';
import Comics from './pages/Comics';
import Characters from './pages/Characters';
import DetailedCom from './pages/DetailedCom';
import DetailedChar from './pages/DetailedChar';
import FavComics from './pages/FavComics';
import FavCharacters from './pages/FavCharacters';
import NotFound from './pages/NotFound';

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route path="/login" component={ Login } />
        <Route path="/register" component={ Register } />
        <Route path="/home" component={ Home } />
        <Route path="/profile/fav-comics" component={ FavComics } />
        <Route path="/profile/fav-characters" component={ FavCharacters } />
        <Route path="/profile" component={ Profile } />
        <Route path="/comics/:id" component={ DetailedCom } />
        <Route path="/comics" component={ Comics } />
        <Route path="/characters/:id" component={ DetailedChar } />
        <Route path="/characters" component={ Characters } />
        <Route path='/404' component={NotFound} />
        <Redirect from='*' to='/404' />
      </Switch>
    </Router>
  );
}

export default Routes;
