import { createStore } from "redux";

import reducer from './src/reducers/universities';

const store = createStore(reducer);

export default store;
