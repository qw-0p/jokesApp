import { combineReducers } from 'redux';

import jokes from './ducks/jokes';
import app from './ducks/app';

const rootReducer =  combineReducers({
    jokes,
    app
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
