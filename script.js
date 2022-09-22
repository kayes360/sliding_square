document.addEventListener('keydown', function(event) {
    if (event.key == "ArrowUp") {
        alert('Up was pressed'); 
    }
    else if (event.key == "ArrowDown") {
        alert('Down was pressed');
    }
    else if (event.key == "ArrowLeft") {
        alert('Left was pressed');
    }
    else if (event.key == "ArrowRight") {
        alert('Right was pressed');
    }
    else if (event.key == "ArrowRight") {
        alert('Right was pressed');
    }
    else if (event.key == "ArrowRight") {
        alert('Right was pressed');
    }
    else if (event.key == "ArrowRight") {
        alert('Right was pressed');
    }
    else if (event.key == "1") {
        // checkSelection();

    }
    else if (event.key == "2") { 
        console.log(box_two);
        console.log(checkSelection_id);  
         var x =   box_main.querySelector("#"+checkSelection_id+"" ).classList.remove("selection_border");  

    }
    else if (event.key == "3") {
        checkSelection();

         console.log(box_three);
    }
    else if (event.key == "4") {
        console.log(box_four);

    }
    else if (event.key == "5") {
        console.log(box_five); 
    }
    else if (event.key == "6") {
        console.log(box_six);

    }
    else if (event.key == "7") {
        console.log(box_seven);
    }
    else if (event.key == "8") {
        console.log(box_eight);
    }
    else if (event.key == "9") {
        console.log(box_nine);
    }
}, true);

const box_main = document.querySelector('.box_main');
const box_one = document.querySelector('.box_one');
const box_two = document.querySelector('.box_two');
const box_three = document.querySelector('.box_three');
const box_four = document.querySelector('.box_four');
const box_five = document.querySelector('.box_five');
const box_six = document.querySelector('.box_six');
const box_seven = document.querySelector('.box_seven');
const box_eight = document.querySelector('.box_eight');
const box_nine = document.querySelector('.box_nine');

box_two.classList.add("selection_border");
// console.log(box_main); 

// check which box is selected
function checkSelection() {
    if(box_main.querySelector('.selection_border').length !== 0){  
        return box_main.querySelector('.selection_border').id;  
    }else{    
        console.log("no selection_border"); 
    }
} 
const checkSelection_id = checkSelection(); 
// add selection_border
// function add_selection_border(box) {
//     box_one.classList.add("selection_border"); 
// }


 