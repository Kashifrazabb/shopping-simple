import React from 'react';
import Main from './components/Main';
import Home from './components/Home';
import { Switch, Route, Redirect } from 'react-router-dom';

const App = () =>
    <Switch>
        <Route path='/home' render={() => <Home />}></Route>
        <Route path='/men' render={() => <Main />}></Route>
        <Route path='/women' render={() => <Main />}></Route>
        <Redirect from='/' to='/home' />
    </Switch>

export default App;
