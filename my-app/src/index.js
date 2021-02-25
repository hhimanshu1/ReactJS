import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Hooks from './hooks'
import Hooks1 from './hooks1'
import Comp from './Comp'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <Comp />
    {/* <Hooks />
    <Hooks1 /> */}
    
  </React.StrictMode>,
  document.getElementById('root')
);

 
reportWebVitals();
