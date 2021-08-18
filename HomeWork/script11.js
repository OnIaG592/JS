const numberArray=[1,1,2,3,4,4,5,5,6,6,7,7,8];
const unique = [new Set(numberArray)];
console.log(unique)

//Второй вариант
const secondArray=[];
for (i = 0; i < numberArray.length; i++) {
      if(numberArray[i] !== numberArray[i+1]){
        secondArray[i]=numberArray[i];
        console.log(secondArray[i])
    }
  }

