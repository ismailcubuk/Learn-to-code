function getMilk(){
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("buyMilk");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");
}

getMilk();


// 1. FUNCTİON
function main(){
    move();
    move();
    move();
    move();
    turnLeft();
    move();
    move();
    move();
    move();
  }

// 2. FUNCTİON
function main(){
    moveFourTimes();
    turnLeft();
   moveFourTimes();
  }
  
  function moveFourTimes(){
    move();
    move();
    move();
    move();
  }

  // FUNCTİON İNSİDE
  function getMilk(Money) {   
    console.log("leaveHouse");
    console.log("moveRight");
    var numberOfBottles = Math.floor(Money / 1.5);
    console.log("buy " + numberOfBottles + " bottles of milk")
    console.log("moveLeft");
    console.log("enterHouse");
    return Money % 1.5; // kalan para
  }
  getMilk(5);


  // LİFE İN WEEKS
function lifeInWeeks(age){
  var yearsRemaining = 90 - age;
  var days = yearsRemaining * 365;
  var weeks = yearsRemaining * 52;
  var months = yearsRemaining * 12;

  console.log("You have " + days + "days, " + weeks + "weeks, and " + months +" months left.");
}
lifeInWeeks(26)


// FUNCTİON RETURN

let küpDegeri = cube(2);
karesi(küpDegeri);

function cube(sayi) {
    let sonuc = sayi*sayi*sayi;
    return sonuc
    // console.log(sonuc)
}

function karesi(sayi){
  let sonuc = sayi*sayi;
    console.log(sonuc)
}

küpDegeri // = 8


//BMİ İNDEX
//BEN 
var bmi = bmiCalculator(65, 1.8);
console.log(bmi)

function bmiCalculator(weight, height) {
    height = height*height
    return bmi
 }




//HOCA
var bmi = bmiCalculator(65, 1.8);
console.log (bmi);

function bmiCalculator(weight, height){
    var bmi = weight/ Math.pow(height,2);
    return bmi;
}