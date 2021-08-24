const answer =Number( prompt("Введите число"));
const arr = [20,30,40,50,60,70];
function factory(arr,answer){
    for(i=0;i<arr.length;i++){
        arr[i]=(arr[i]/answer);
    }
    console.log(arr)
}
factory(arr,answer)
