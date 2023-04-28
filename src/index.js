// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root'),
// );

// =====================================

// ----------------my coding -------------

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// // --- part 01 =================
// const element = React.createElement('div', {
//   a: 5,
//   b: 10,
//   children: ['Hello world !', 'Hi Ivan'],
// });

// console.log(element);
// // ReactDOM.createRoot(document.querySelector('#root')).render(element);

// // --- part 02
// const elem1 = React.createElement('span', { children: 'Hello world !' });
// const elem2 = React.createElement('span', { children: 'Hi Ivan' });

// const elem3 = React.createElement('div', {
//   a: 55,
//   b: 1010,
//   children: [elem1, elem2],
// });

// // ReactDOM.createRoot(document.getElementById('root')).render(elem3);
// // ======================================================

// --- part 03 ---JSX----------

// const elem1 = <span>'Hello world !'</span>;
// const elem2 = <span>'Hi Ivan'</span>;
// const jsxElem = (
//   <div>
//     {elem1}
//     {elem2}
//   </div>
// );
// console.log(jsxElem);

// --- part 04 ---Painting/PaintingList/Section/App----------

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
