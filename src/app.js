/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const values = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  const symbols = ["♠", "♣", "♦", "♥"];
  const colors = ["red", "black"];

  const cardSymbolHeader = document.getElementById("card-symbol-header");
  const cardValue = document.getElementById("card-value");
  const cardSymbolFooter = document.getElementById("card-symbol-footer");

  const randomValueIndex = Math.floor(Math.random() * values.length);
  const randomSymbolIndex = Math.floor(Math.random() * symbols.length);

  const color =
    symbols[randomSymbolIndex] == "♦" || symbols[randomSymbolIndex] == "♥"
      ? colors[0]
      : colors[1];
  cardSymbolHeader.innerHTML = `<p style="color:${color}">${symbols[randomSymbolIndex]}</p>`;
  cardValue.innerHTML = `<p>${values[randomValueIndex]}</p>`;
  cardSymbolFooter.innerHTML = `<p style="color:${color}">${symbols[randomSymbolIndex]}</p>`;
};
