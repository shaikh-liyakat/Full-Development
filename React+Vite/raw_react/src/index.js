import React from 'react';
import { createRoot } from 'react-dom/client';
import ReactDOM from 'react-dom/client';
import Card from "./props.js"
import PassGenerator from './hooks.js';
import "./index.css";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<PassGenerator/>
// {/* <Card root={root}/>  */}

)


