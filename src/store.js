import { createStore } from "redux";

import reducer from './reducers/universities';

const store = createStore(reducer);

export default store;
