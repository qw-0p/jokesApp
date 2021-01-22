import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';

import { Item, Home, Error } from './components';

interface LocationState {
    background: any
}

const App: React.FC = () => {
    const location = useLocation<LocationState>();
    const background = location.state && location.state.background;
    return (
        <main>
            <Switch location={background || location}>
                <Route exact path='/' component={Home} />
                <Route exact path='/:joke/id' component={Item} />
                <Route component={Error} />
            </Switch>
        </main>
    );
};

export default App;
