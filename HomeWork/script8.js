const answer = prompt("Введите число которое хотите возвести в куб")
let cube = function(){
    return answer*answer*answer
}
alert(`Куб числа ${answer} равен ${cube()}`);