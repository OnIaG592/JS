const answer = prompt("Введите число");
var i = answer.length;
const newArr = [];

if (i == 3) {
    while (i > 0) {
        if (i == 3) {
            if (answer[i - 1] == 1) { newArr.unshift("один"); i--; }
            else if (answer[i - 1] == 2) { newArr.unshift("два"); i--; }
            else if (answer[i - 1] == 3) { newArr.unshift("три"); i--; }
            else if (answer[i - 1] == 4) { newArr.unshift("четыре"); i--; }
            else if (answer[i - 1] == 5) { newArr.unshift("пять"); i--; }
            else if (answer[i - 1] == 6) { newArr.unshift("шесть"); i--; }
            else if (answer[i - 1] == 7) { newArr.unshift("семь"); i--; }
            else if (answer[i - 1] == 8) { newArr.unshift("восемь"); i--; }
            else if (answer[i - 1] == 9) { newArr.unshift("девять"); i--; }
            else if (answer[i - 1] == 0) { newArr.unshift(""); i--; }


        }
        else if (i == 2) {
            if (answer[i - 1] == 1) { newArr.unshift("десять"); i--; }
            else if (answer[i - 1] == 2) { newArr.unshift("двадцать"); i--; }
            else if (answer[i - 1] == 3) { newArr.unshift("тридцать"); i--; }
            else if (answer[i - 1] == 4) { newArr.unshift("сорок"); i--; }
            else if (answer[i - 1] == 5) { newArr.unshift("пятьдесят"); i--; }
            else if (answer[i - 1] == 6) { newArr.unshift("шесдесят"); i--; }
            else if (answer[i - 1] == 7) { newArr.unshift("семьдесят"); i--; }
            else if (answer[i - 1] == 8) { newArr.unshift("восмьдесят"); i--; }
            else if (answer[i - 1] == 9) { newArr.unshift("девяносто"); i--; }
            else if (answer[i - 1] == 0) { newArr.unshift(""); i--; }

        }
        else if (i == 1) {
            if (answer[i - 1] == 1) { newArr.unshift("сто"); i--; }
            else if (answer[i - 1] == 2) { newArr.unshift("двести"); i--; }
            else if (answer[i - 1] == 3) { newArr.unshift("триста"); i--; }
            else if (answer[i - 1] == 4) { newArr.unshift("четыреста"); i--; }
            else if (answer[i - 1] == 5) { newArr.unshift("пятьсот"); i--; }
            else if (answer[i - 1] == 6) { newArr.unshift("шестьсот"); i--; }
            else if (answer[i - 1] == 7) { newArr.unshift("семьсот"); i--; }
            else if (answer[i - 1] == 8) { newArr.unshift("восмьсот"); i--; }
            else if (answer[i - 1] == 9) { newArr.unshift("девятьсот"); i--; }
            else if (answer[i - 1] == 0) { newArr.unshift(""); i--; }
        }
    }
}

if (i == 2) {
    while (i > 0) {
        if (i == 2) {
            if (answer == 11) { newArr.unshift("одинадцать"); break; }
            else if (answer == 12) { newArr.unshift("двенадцать"); break; }
            else if (answer == 13) { newArr.unshift("тринадцать"); break; }
            else if (answer == 14) { newArr.unshift("четырнадцать"); break; }
            else if (answer == 15) { newArr.unshift("пятнадцать"); break; }
            else if (answer == 16) { newArr.unshift("шестнадцать"); break; }
            else if (answer == 17) { newArr.unshift("семьнадцать"); break; }
            else if (answer == 18) { newArr.unshift("восемнадцать"); break; }
            else if (answer == 19) { newArr.unshift("девятнадцать"); break; }
            if (answer[i - 1] == 1) { newArr.unshift("один"); i--; }
            else if (answer[i - 1] == 2) { newArr.unshift("два"); i--; }
            else if (answer[i - 1] == 3) { newArr.unshift("три"); i--; }
            else if (answer[i - 1] == 4) { newArr.unshift("четыре"); i--; }
            else if (answer[i - 1] == 5) { newArr.unshift("пять"); i--; }
            else if (answer[i - 1] == 6) { newArr.unshift("шесть"); i--; }
            else if (answer[i - 1] == 7) { newArr.unshift("семь"); i--; }
            else if (answer[i - 1] == 8) { newArr.unshift("восемь"); i--; }
            else if (answer[i - 1] == 9) { newArr.unshift("девять"); i--; }
            else if (answer[i - 1] == 0) { newArr.unshift(""); i--; }
        }
        else if (i == 1) {
            if (answer[i - 1] == 2) { newArr.unshift("двадцать"); i--; }
            else if (answer[i - 1] == 3) { newArr.unshift("тридцать"); i--; }
            else if (answer[i - 1] == 4) { newArr.unshift("сорок"); i--; }
            else if (answer[i - 1] == 5) { newArr.unshift("пятьдесят"); i--; }
            else if (answer[i - 1] == 6) { newArr.unshift("шесдесят"); i--; }
            else if (answer[i - 1] == 7) { newArr.unshift("семьдесят"); i--; }
            else if (answer[i - 1] == 8) { newArr.unshift("восмьдесят"); i--; }
            else if (answer[i - 1] == 9) { newArr.unshift("девяносто"); i--; }
            else if (answer[i - 1] == 0) { newArr.unshift(""); i--; }

        }
    }
}
if (i == 1) {
    while (i > 0) {
        if (answer[i - 1] == 1) { newArr.unshift("один"); i--; }
        else if (answer[i - 1] == 2) { newArr.unshift("два"); i--; }
        else if (answer[i - 1] == 3) { newArr.unshift("три"); i--; }
        else if (answer[i - 1] == 4) { newArr.unshift("четыре"); i--; }
        else if (answer[i - 1] == 5) { newArr.unshift("пять"); i--; }
        else if (answer[i - 1] == 6) { newArr.unshift("шесть"); i--; }
        else if (answer[i - 1] == 7) { newArr.unshift("семь"); i--; }
        else if (answer[i - 1] == 8) { newArr.unshift("восемь"); i--; }
        else if (answer[i - 1] == 9) { newArr.unshift("девять"); i--; }
        else if (answer[i - 1] == 0) { newArr.unshift(""); i--; }
    }
}    
console.log(newArr)