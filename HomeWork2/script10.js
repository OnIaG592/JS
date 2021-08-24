const start = parseInt(prompt("Введите start"))
const end = parseInt(prompt("Введите end"))
const arr=[];

function addArr(start,end){
if(start<end){
    for(i=start;i<=end;i++){
        arr.push(i);
    }
}
else if(start>end){
    for(i=start;i>=end;i--){
        arr.push(i);
    }
}
console.log(arr)
}

addArr(start,end)