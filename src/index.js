import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore } from 'redux';
import items from './reducers/index.js';
import App from './Components/App';

// Redux Store
const store = createStore(items);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>
);