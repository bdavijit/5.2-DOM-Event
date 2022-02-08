function makeRed(){
    document.body.style.background = 'red';
}


//onclick by Id
const BlueButton = document.getElementById('make_blue_button');
BlueButton.onclick = makeBlue;
function makeBlue(){
 document.body.style.backgroundColor = 'blue';
} 


const greenButton = document.getElementById('make_green_button');
//JavaScript Anonymous Functions
greenButton.onclick = function(){
 document.body.style.backgroundColor = 'green';
} 

//handling by using addEventListener
const GoldButton = document.getElementById("make_gold_button");
GoldButton.addEventListener("click", makeGolden);
function makeGolden() {
  document.body.style.backgroundColor = "gold";
}

const pinkButton = document.getElementById("make_pink_button");
//JavaScript Anonymous Functions
pinkButton.addEventListener("click",  () => {
  document.body.style.backgroundColor = "#8B008B";
})

document.getElementById("make_red_button").addEventListener("click",  () => {
  document.body.style.backgroundColor = "red";
})