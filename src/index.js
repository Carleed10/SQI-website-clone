import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import First from './First';
import reportWebVitals from './reportWebVitals';
import Nav from './Nav';
import Component2 from './Component2';
import Component3 from './Component3';
import Page4 from './Page4';
import Component5 from './Component5';
import Component6 from './Component6';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Nav />
    <First/>
    <Component2 />
    <Component3 />
    <Page4 />
    <Component5 />
    <Component6 />

    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
