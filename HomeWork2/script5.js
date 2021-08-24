const arr1 = [1,2,3,4,6,8,9,20];
const arr2 = [5,7,10,11,2,6,8,1,3];
const arr3=[];

function comparison(arr1,arr2){
    for(i=0;i<arr1.length;i++){
        for(j=0;j<arr2.length;j++){
            if(arr1[i]==arr2[j]){
                arr3.push(arr1[i]);
            }
        }
    }
    console.log(arr3)
}

comparison(arr1,arr2)