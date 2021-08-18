let number = prompt("Введите число для факториала");
let faktorial = function () {
    let summ = 1;
    if (isNaN(number / 2) == true) {
        alert("Не правильное число")
    }
    else {
        for (i = number; i > 0; i--) {
            summ = summ * i;
        }
        alert(summ)
    }
}
faktorial()