const isQuess = true;
do {
    const answer = prompt("Write a number from 1 to 10");
    const randomNumber = Math.floor(Math.random() * 10);

    if (answer < 0 || answer > 10 || isNaN(answer / 2) == true) {
        alert("Write ONLY numbers between 1 and 10")
    }
    else if (answer == randomNumber) {
        alert("You guessed it right!");
        isQuess = false;
    }
    else if (answer !== randomNumber) {
        alert("Sorry. You lost Loooooooooser :(");
    }
    let isContinue = confirm("Do you want to continue?");
    if (isContinue == true) { }
    else { isQuess = false; }
}
while (isQuess == true);