// main.js
import { convertToUpperCase } from './convertToUpperCase.js';

const convertButton = document.querySelector("#convert-btn");
const inputField = document.querySelector("input");
const resultDisplay = document.querySelector("#result-text");

const convertHandeler = () => {
    const inputText = inputField.value;
    const upperCaseText = convertToUpperCase(inputText);
    console.log(upperCaseText);

    // Display the result in the DOM
    resultDisplay.textContent = upperCaseText;
    inputField.value = '';
};

// Event listener for button click
convertButton.addEventListener('click', convertHandeler);
