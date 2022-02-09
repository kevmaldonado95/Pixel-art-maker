const colors = document.getElementsByClassName("color");
const selected = document.getElementById("selected");
selected.style.backgroundColor = "white";
for(let box of colors){
    box.style.backgroundColor = box.id;
}

function changeSelectedColor(element){
    selected.style.backgroundColor = element.id;
    
}

download_img = function(el) {
    var image = canvas.toDataURL("image/png");
    el.href = image;
  };

let columns = 22;
size = 40;
let container = document.getElementById("container");
let templateColumns = "";
for (let i = 0; i < columns; i++) { 
    templateColumns += size + "px ";
    for(let j = 0; j < columns; j++){
        let cell = document.createElement("div");
        cell.className = "cell";
        cell.id = "i"+i+"j"+j+"f";
        cell.style.width = size+"px";
        cell.style.height = size+"px";
        cell.onclick = function(){
            cell.style.backgroundColor = selected.style.backgroundColor;
            var indexI = cell.id.substring(cell.id.indexOf("i") + 1, cell.id.lastIndexOf("j"));
            var indexJ = cell.id.substring(cell.id.indexOf("j") + 1, cell.id.lastIndexOf("f"));
            drawGrid(indexI,indexJ,selected.style.backgroundColor);
        };
        container.appendChild(cell);
    }
}

container.style.gridTemplateColumns = templateColumns;


let canvas = document.querySelector("canvas");
canvas.style.display = "none";
canvas.width = (size*columns)/2;
canvas.height = (size*columns)/2;
let w = canvas.width;
let h = canvas.height;

var ctx = canvas.getContext('2d');
let step = size/2;

// the render logic should be focusing on the rendering 
var drawGrid = function(y, x, color) {
    ctx.fillStyle = color;
     ctx.fillRect(x*step, y*step, step, step);
};


