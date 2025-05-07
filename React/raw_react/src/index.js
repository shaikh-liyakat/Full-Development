import React from 'react';
import ReactDOM from 'react-dom/client';
import { App,Pic} from './App';
import "./index.css";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
    <Pic/>
  </React.StrictMode>
);


