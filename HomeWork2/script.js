const arr = [2, 1, 4, 3, 5, 6];
const answer = prompt("Asc,Desc or None?");


function sorting(arr, answer) {
    if(answer=="Asc"){
        alert(arr.sort());
    }
    else if(answer=="Desc"){
        arr.sort((a, b) => b - a);
        alert(arr);
    }
    else if(answer=="None"){
        alert(arr);
    }
    else{alert("Put in Only Asc,Desc or None!")}
}

sorting(arr,answer);

