import React, { useState } from 'react';
import Main from './components/Main.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Navbar from './components/Navbar.jsx';
import History from './components/History.jsx';
import uuid from 'uuid/dist/v4';
import { MenData, WomenData } from './components/DataSet.jsx';
import { Switch, Route, Redirect, useHistory } from 'react-router-dom';

const App = () => {
    const history = useHistory();
    const [ID, setID] = useState(0);
    const [cartBnt, setCartBtn] = useState(true);
    const [count, setCount] = useState(0);
    const [data, setData] = useState([{ name: '', price: '',id:'' }]);

    const handleClick = (e) => {
        setCartBtn(true)
        setID(e.currentTarget.id)
        history.push('/about')
    }

    const handleCart = () => {
        setCartBtn(false)
        setCount(count+1)
        setData([...data, { name: NAME, price: PRICE,id:uuid() }])
    }

    var INDEX, NAME, IMGSRC, PRICE;

    if (ID < 8) {
        INDEX = MenData.findIndex(i => i.key === parseInt(ID))
        if (INDEX !== -1) {
            IMGSRC = MenData[INDEX].imgsrc;
            NAME = MenData[INDEX].name;
            PRICE = MenData[INDEX].price;
        }
    }
    else if (ID > 7 && ID < 13) {
        INDEX = WomenData.findIndex(i => i.key === parseInt(ID))
        if (INDEX !== -1) {
            IMGSRC = WomenData[INDEX].imgsrc;
            NAME = WomenData[INDEX].name;
            PRICE = WomenData[INDEX].price;
        }
    }
    return(
    <>
        <Navbar count={count}/>
        <Switch>
            <Route exact path='/home' render={() => <Home />}/>
            <Route exact path='/men' render={() => <Main handleClick={handleClick} />}/>
            <Route exact path='/women' render={() => <Main handleClick={handleClick} />}/>
            <Route exact path='/about' render={() => <About IMGSRC={IMGSRC} NAME={NAME} PRICE={PRICE} handleCart={handleCart} cartBnt={cartBnt} />}/>
            <Route exact path='/history' render={() => <History data={data} count={count}/>}/>
            <Redirect from='/men/*' to='/men' />
            <Redirect from='/women/*' to='/women' />
            <Redirect from='/' to='/home' />
        </Switch>
    </>
    )
}
export default App;
