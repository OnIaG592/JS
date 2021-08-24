const answer = prompt("Введите слово");
const newArr = [];
let isTrue = true;
var counter = 0;

function compare() {
    for (i = 0; i < answer.length; i++) {
        for (j = i + 1; j < answer.length; j++) {
            if (answer[i] == answer[j] && isTrue) {
                console.log(answer[i]);
                isTrue = false;
                counter++;
            }
        }
    }
    if (counter == 0) { console.log(-1) }
}

compare();