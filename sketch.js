//Create variables here
var pet, pet2;
var database;
var foodStock, food;
var foodS;
var feedTime, lastFed;
var Feed, addFood;


function preload()
{
  //load images here
  dogImg = loadImage("Dog.png");
  dog2Img = loadImage("happydog.png");
}

function setup() {
  createCanvas(500,500);
  pet = createSprite(370,300,20,20);
  pet.addImage(dogImg);
  pet.scale = 0.3;
  database = firebase.database();
 foodStock =  database.ref('Food');
  foodStock.on("value",readStock);
 // dog = new Dog(300,200,20,20);
  Feed = createButton("Feed the Dog");
  Feed.position(700,95);
  Feed.mousePressed(feedDog);
  food = new Food();
  addFood = createButton("Add Food");
  addFood.position(800,95);
  addFood.mousePressed(addFoodS);

}

function draw() {  
  background(46,139,87);
  food.display();
  database.ref('feedTime').on("value",function(data){
    lastFed = data.val()
  })
  textSize(15);
  if(lastFed>=12){
    text("Last Feed : " + lastFed%12+"pm",350,30);
  }
  else if(lastFed==0){
    text("Last Feed : 12 am ",350,30);
      }
    else{
      text("Last Feed : " + lastFed+"am",350,30);
      }
  drawSprites();
  
}
function readStock(data){
  foodS = data.val();
  food.updateFoodStock(foodS);
}
function feedDog(){
  pet.addImage(dog2Img);
  if(food.getFoodStock()<=0){
    food.updateFoodStock(food.getFoodStock()*0);
  }
  else{
    food.updateFoodStock(food.getFoodStock()-1);
  }
  database.ref('/').update({
    Food : food.getFoodStock(),
    feedTime : hour()
  })
}
function addFoodS(){
  foodS++;
  database.ref('/').update({
    Food : foodS
  })
}

