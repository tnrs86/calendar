import '../styles/style.scss';
import '../fonts/font.scss';
import myCalendar from './app1';
window.onload = function() {
  let rootElement = document.getElementById('root');
  myCalendar(rootElement, 'selectDay', 35, new Date);
}
// import ReactDOM from 'react-dom';
// import React from 'react';
// import App from './app';
// App();


// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );