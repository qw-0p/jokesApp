import React from 'react';
import { Item } from './components/Item';
import { Home } from './components/Home';
import { Error } from './components/Error';
import { Route, Switch, useLocation } from 'react-router-dom';

const App = () => {
    const location = useLocation();
    const background = location.state && location.state.background;
    return (
        <main>
            <Switch location={background || location}>
                <Route exact path='/' component={Home} />
                <Route exact path='/joke/:id' component={Item} />
                <Route component={Error} />
            </Switch>
            {background && <Route path='/joke/:id' children={<Item />} />}
        </main>
    );
};

export default App;
