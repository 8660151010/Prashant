import {combineReducers} from 'redux';
import InitialReducer from './reducer-initial-todos';
import UserReducer from './reducer-user';

const allReducers = combineReducers({
    initial: InitialReducer,
    userInfo: UserReducer
});

export default allReducers
