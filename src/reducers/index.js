import { combineReducers } from 'redux';

import universities from './universities';
import toast from './toast';

const appReducer = combineReducers({ universities, toast });
const rootReducer = (state, action) => appReducer(state, action);

export default rootReducer;
