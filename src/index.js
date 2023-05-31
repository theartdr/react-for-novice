import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from 'styled-components';

const darkTheme = {
  textColor: "whitesmoke",
  backgroundColor: "#111",
};

const lightTheme = {
  textColor: "#111",
  backgroundColor: "whitesmoke",
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <App />
    </ThemeProvider>
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

  const colors = [
    "#ef5777",
    "#575fcf",
    "#4bcffa",
    "#34e7e4",
    "#0be881",
    "#f53b57",
    "#3c40c6",
    "#0fbcf9",
    "#00d8d6",
    "#05c46b",
    "#ffc048",
    "#ffdd59",
    "#ff5e57",
    "#d2dae2",
    "#485460",
    "#ffa801",
    "#ffd32a",
    "#ff3f34"
  ];
  const button = document.querySelector("button");
  
  function giveColor() {
    const color1 = colors[Math.floor(Math.random() * colors.length)];
    const color2 = colors[Math.floor(Math.random() * colors.length)];
    const bgColor = document.body.style;
    bgColor.background = `linear-gradient(${color1},${color2})`;
  }
  const bg = document.createElement("style");
  
  document.body.appendChild(bg);
  
  button.addEventListener("click", giveColor); 
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
