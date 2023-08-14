
/*document.querySelector(".start").addEventListener('click',()=>{

})
document.querySelector('.main').addEventListener('click',()=>{
    let position= Math.floor(Math.random()*100);
    let position2= Math.floor(Math.random()*100);
document.querySelector('.food').style.transform = "translate(" + (position) + "px," + (position2) + "px)";
});*/
let direction={x:0,y:0};

const snakeboard = document.getElementById("gameCanvas");
const snakeboard_ctx = gameCanvas.getContext("2d");
    let score=document.querySelectorAll("p")[0];
    let= highScore= document.querySelectorAll("p")[0];
    let start=document.querySelector(".start");
    let reset=document.querySelectorAll(".stop");
    let score1 = 0;
let speed = 0.8;
let intervalTime = 0;
let interval = 0;