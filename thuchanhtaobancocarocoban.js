let b = document.getElementById("carogame");
let board = [];
let data = "";
for (let i = 0; i < 10; i++) {
    if (i<1) {
    board[i] = [i, i+1, i+2, i+3, i+4,5,6,7,8,9];}
    else {
    board[i]= [i,0,0,0,0,0,0,0,0,0,0,0,0];}
}

for (let i = 0; i < 10; i++) {
    data += "<br/>";
    for (let j = 0; j < 10; j++) {
        data += board[i][j] + "&nbsp;&nbsp;";
    }
}
document.getElementById("carogame").innerHTML = data;


function changeValue() {
    let positionX = prompt("X: ");
    let positionY = prompt("Y: ");
    data = "";
    board[positionX][positionY] = "X";
    for (let i = 0; i < 10; i++) {
        data += "<br/>";
        for (let j = 0; j < 10; j++) {
            data += board[i][j] + "&nbsp;&nbsp;&nbsp;&nbsp;";
        }
    }
    data += "<br/><br/><input type='button' value='Change Value' onclick='changeValue()'>";
    b.innerHTML = "<hr/>" + data;
}