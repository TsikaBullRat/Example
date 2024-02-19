let blocks = document.getElementsByClassName("block");
let player = true;
let points = [null, null, null, null, null, null, null, null, null, null];

function Select(index){
    
    if(!points[index]){
        if(player){
            blocks[index].innerHTML = "<img src='./src/close.png' alt='X'>"
            player = false
            points[index] = 1
        }else{
            blocks[index].innerHTML = "<img src='./src/circle-ring.png' alt='O'>" 
            player = true
            points[index] = 2
        }
    }
    
}