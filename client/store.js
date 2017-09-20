import { createStore } from 'redux';
import actionController from './action'

let store
const createStore = () => {
    store = createStore(actionController);
}

exports = module.exports = store;