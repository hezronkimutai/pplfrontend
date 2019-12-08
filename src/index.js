import React from "react";
import { render } from "react-dom";
import App from "./App";
import { createStore } from 'redux'
//import store from "./Store";
import reducers from './reducers'

const store = createStore(reducers);
const rootElement = document.getElementById("react-app");
console.log('njkbkbkjbnkjb',store.getState());

render(
  
    <App 
    value={store.getState()}
    onLoggedIn={() => store.dispatch({ type: 'NAV_LOGGED_IN' })}
    onNotLoggedIn={() => store.dispatch({ type: 'NAV_NOT_LOGGED_IN' })}
    />,
  rootElement
);




// import React from 'react'
// import ReactDOM from 'react-dom'
// import { createStore } from 'redux'
// import Counter from './components/Counter'
// import counter from './reducers'

// const store = createStore(counter)
// const rootEl = document.getElementById('react-app')

// const render = () => ReactDOM.render(
//   <Counter
//     value={store.getState()}
//     onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
//     onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
//   />,
//   rootEl
// )

render()
store.subscribe(render)