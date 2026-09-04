/* -------------------------------- */
/* CODEPAD SETTINGS */
/* -------------------------------- */

// The correct code
const correctCode = "COSMO";

// The code currently entered by the player
let enteredCode = "";

// Get the five squares
const squares = document.querySelectorAll(".code-squares span");

// Get the messages
const successMessage = document.getElementById("successMessage");
const deniedMessage = document.getElementById("deniedMessage");


/* -------------------------------- */
/* PRESS A LETTER */
/* -------------------------------- */

function pressLetter(letter) {

    // Don't allow more letters than the correct code
    if (enteredCode.length >= correctCode.length) {
        return;
    }

    // Add the letter
    enteredCode += letter;

    // Update the squares
    updateSquares();
}


/* -------------------------------- */
/* BACKSPACE */
/* -------------------------------- */

function backspace() {

    // Remove the last letter
    enteredCode = enteredCode.slice(0, -1);

    // Update the squares
    updateSquares();
}


/* -------------------------------- */
/* UPDATE SQUARES */
/* -------------------------------- */

function updateSquares() {

    squares.forEach((square, index) => {

        if (index < enteredCode.length) {

            square.textContent = enteredCode[index];
            square.classList.add("filled");

        } else {

            square.textContent = "";
            square.classList.remove("filled");

        }

    });
}


/* -------------------------------- */
/* CHECK THE CODE */
/* -------------------------------- */

function checkCode() {

    // Correct code
    if (enteredCode === correctCode) {

        successMessage.style.display = "flex";

    }

    // Wrong code
    else {

        deniedMessage.style.display = "flex";


        // Make the wrong-code message disappear
        setTimeout(() => {

            deniedMessage.style.display = "none";

            // Clear the entered code
            enteredCode = "";

            // Empty the square
            updateSquares();

        }, 1000);
    }
}


function goBack() {
    // Hide the Access Granted screen
    document.getElementById("successMessage").style.display = "none";

    // Clear the entered code
    enteredCode = "";

    // Clear the five code squares
    const squares = document.querySelectorAll(".code-squares span");
    squares.forEach(square => {
        square.textContent = "";
        square.classList.remove("filled");
    });
}