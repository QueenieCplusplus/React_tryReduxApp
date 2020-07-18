import React from 'react';
import ReactDOM from 'react-dom';
import RRR from './RRR';
//import * as serviceWorker from './serviceWorker';
//import Kclass from './K';
//import {BrowserRouter as Router, Route} from 'react-router-dom';

// ReactDOM.render(
//   <React.StrictMode>
//     <RRR/>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

let container;
container = document.createElement('div');
document.body.appendChild(container);
ReactDOM.render(<RRR/>, container);

// document.body.removeChild(container);
// container=null;

// root see html file
//serviceWorker.unregister();
