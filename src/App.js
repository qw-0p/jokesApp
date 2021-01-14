import React from 'react';
import {Item} from './components/Item';
import {Home} from './components/Home';
import {Error} from './components/Error';
import {Route, Switch} from 'react-router-dom';

const App = () => {
  return (
    <main>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/joke/:id' component={Item} />
        <Route component={Error} />
      </Switch>
    </main>
  )
};

export default App;