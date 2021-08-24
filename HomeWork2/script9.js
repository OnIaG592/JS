const num1 = prompt("Введите число")
const num2 = prompt("Введите длину ")
const arr = [];

function divider (num1,num2,arr){
    for(i=1;i<=num2;i++){
        arr.push(num1*i)
    }
    console.log(arr)
}

divider(num1,num2,arr)