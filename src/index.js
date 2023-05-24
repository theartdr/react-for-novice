import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

    const clock = document.querySelector("h2#clock");

    function getClock() {
      const current = new Date();
      const dDay = new Date("Dec 25,2023,00:00:00");
      const due = dDay - current;
      const days = Math.floor(due / (1000 * 60 * 60 * 24));
      const hours = String(current.getHours()).padStart(2, "0");
      const minutes = String(current.getMinutes()).padStart(2, "0");
      const seconds = String(current.getSeconds()).padStart(2, "0");
      clock.innerText = `${days}d ${24 - hours}h ${60 - minutes}m ${60 - seconds}s`
    }
    getClock();
    setInterval(getClock, 1000);

   
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
