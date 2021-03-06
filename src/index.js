import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/*REDUX*/
import {Provider} from 'react-redux';
import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import dataReducer from "./store/reducers/dataReducer";

const reduxStore = createStore(
    dataReducer,
    compose(applyMiddleware(thunk))
)

ReactDOM.render(
    <React.StrictMode>
        <Provider store={reduxStore}>
            <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
