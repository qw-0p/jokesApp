import { combineReducers } from 'redux';

import jokes from './ducks/jokes';
import app from './ducks/app';

export default combineReducers({
    jokes,
    app
});
