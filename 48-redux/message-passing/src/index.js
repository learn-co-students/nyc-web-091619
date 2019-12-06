import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { createStore } from 'redux'
import reducer from './reducer'
// The createStore function takes as its argument a reducer and uses this to create a store

// The store is both the thing that contains your global state AND also contains functions that manage that state

// console.log("BEFORE DISPATCH", store.getState())

// // When calling dispatch we must pass an action
// // Action is a POJO with at least 1 key: the type. Often it will also have a second key called payload which stores incoming data
// console.log("DISPATCHING")
// store.dispatch({type: "ADD_THANG", payload: "gobbledegook"})
// store.dispatch({type: "ADD_THANG", payload: "thang 1"})
// store.dispatch({type: "ADD_THANG", payload: "thang 2"})

// console.log("AFTER DISPATCH", store.getState())


const store = createStore(reducer)

ReactDOM.render(<App />, document.getElementById('root'));















