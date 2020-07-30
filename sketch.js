var canvas, backgroundImage;
var ground;
var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var runner1,runner2,runner3,runner4,hurdle;
function preload(){
  
  runner1Image=loadImage("images/runner1.png");
  runner2Image=loadImage("images/runner2.jpg");
  runner4Image=loadImage("images/runner4.png");
  runner3Image=loadImage("images/runner3.jpg");
  groundImage=loadImage("images/ground.png");
  hurdele1Image=loadImage("images/hurdle1.jpg")
  hurdele2Image=loadImage("images/hurdle1.jpg")
  hurdele3Image=loadImage("images/hurdle1.jpg")
  hurdele4Image=loadImage("images/hurdle1.jpg")
}


function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  };
}
