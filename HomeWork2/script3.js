var isTrue=true;
var answer="";
do{
    answer = prompt("Input Rock,Paper or Scissors");
    if(answer=="Rock"){
        isTrue=false;
    }
    else if(answer=="Paper"){
        isTrue=false;
    }
    else if(answer=="Scissors"){
        isTrue=false;
    }
    else{alert("Please select correct items")}
}while(isTrue==true);


const select = Math.floor(Math.random() * 3);
var cpuSelect = "";
if (select == 0) {
    cpuSelect = "Rock";
}
else if (select == 1) {
    cpuSelect = "Paper";
}
else if (select == 2) {
    cpuSelect = "Scissors";
}

playGame(answer,cpuSelect);

function playGame(answer, cpuSelect) {
    switch (answer) {
        case "Rock":
            if (cpuSelect == "Rock") {
                alert("Player and CPU both selected Rock. Friendship won");
            }
            else if (cpuSelect == "Paper") {
                alert("Player selected Rock. CPU selected Paper. Cpu won");
            }
            else if (cpuSelect == "Scissors") {
                alert("Player selected Rock. CPU selected Scissors. Player won");
            }
            break;
        case "Paper":
            if (cpuSelect == "Rock") {
                alert("Player selected Paper. CPU selected Rock. Player won")
            }
            else if (cpuSelect == "Paper") {
                alert("Player and CPU both selected Paper. Friendship won");
            }
            else if (cpuSelect == "Scissors") {
                alert("Player selected Paper. CPU selected Scissors. Cpu won")
            }
            break;
        case "Scissors":
            if (cpuSelect == "Rock") {
                alert("Player selected Scissors. CPU selected Rock. Cpu won")
            }
            else if (cpuSelect == "Paper") {
                alert("Player selected Scissors. CPU selected Paper. Player won");
            }
            else if (cpuSelect == "Scissors") {
                alert("Player selected Scissors. CPU selected Scissors. Friendship won")
            }
            break;
    }
}