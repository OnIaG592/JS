const firstNumber = Number(prompt("Input first number"));
const secondNumber = Number(prompt("Input second number"));

if(firstNumber>secondNumber){
    alert(`First Number: ${firstNumber} is biger`);
}
else if(secondNumber>firstNumber){
    alert(`Second Number: ${secondNumber} is biger`);
}
else if(secondNumber==firstNumber){
    alert(`They are equals`);
}
else{alert("Write correct numbers");}