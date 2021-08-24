const x1 = prompt("Введите x1");
const x2 = prompt("Введите x2");
const y1 = prompt("Введите y1");
const y2 = prompt("Введите y2");


function distance (x1, x2, y1, y2) {
    const distance = Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
    console.log(distance)
}

distance(x1, x2, y1, y2);

