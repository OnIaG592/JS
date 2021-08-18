const firstArray = [];
const secondArray = [];
const number = prompt("Input number till 1000");
function firstFunction() {
    for (i = 1; i <= number / i; i++) {
        if (number % i == 0) {
            firstArray.push(i);
            secondArray.unshift(number / i);
        }
    }
    let thirdArray = firstArray.concat(secondArray)
    for (i = 0; i < thirdArray.length; i++) {
        console.log(thirdArray[i]);
    }
}
firstFunction(number);