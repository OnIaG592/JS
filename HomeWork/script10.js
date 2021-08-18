let number = prompt("Введите чсило");
let counter = 0;
function analise() {
    for (i = 1; i <= number; i++) {
        if (number % i == 0) {
            counter++;
        }
    }
    if (counter == 2) {
        alert("Это число простое")
    }
    else {
        alert("Это число сложное")
    }
}
analise();