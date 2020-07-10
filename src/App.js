import React from 'react';
import Data from './components/Data';
import Home from './components/Home';
import {Switch,Route,Redirect} from 'react-router-dom';

const App = () => {
    return (
        <Switch>
            <Route path='/home' render={()=><Home/>}></Route>
            <Route path='/men' render={()=><Data/>}></Route>
            <Route path='/women' render={()=><Data/>}></Route>
            <Redirect from='/' to='/home' />
        </Switch>
    )
}

export default App;
