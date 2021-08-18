const binnarArray=[1,2,3,4,5,6,7,8,9,10];
const item = 5;

const binnarSearch = function(array,item){
    let low = 0;
    let high = binnarArray.length-1;

    while(low<=high){
        let middle = (high+low)/2;
        let value = binnarArray[middle];

        if (value===item){
            return value;
        }

        if(value>item){
            high=middle-1;
        } else{
            low=middle+1;
        }
    }
    return item;
}
console.log(binnarSearch(binnarArray,2));