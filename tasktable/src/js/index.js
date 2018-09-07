import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { save, load } from "redux-localstorage-simple"
import '../css/index.css';
import App from './App';
import reducer from './reducers';

const createStoreWithMiddleware = applyMiddleware(
    save() // Saving to localStorage
)(createStore);

const store = createStoreWithMiddleware(
    reducer, 
    load() // loading from localStorage
);

ReactDOM.render(
    <Provider store={store}>    
        <App />
    </Provider>, 
document.getElementById('root'));
