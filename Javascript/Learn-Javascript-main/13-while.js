var output = [];
var count = 1;

function fizzBuzz() {
while(count <= 100){ // while döngüsü 100 e kadar yazar
    

    
    if (count % 15 ===0){
        output.push("fizzBuzz")
    }
    
    else if (count % 3 === 0) {
        output.push("fizz");
    }
    else if (count % 5 ===0){
        output.push("Buzz")
    }
    else {
        output.push(count);
    }
    
    count++;
    }
    console.log (output)
}

//tchr
var numberOfBottles = 99
while (numberOfBottles >= 0) {
    var bottleWord = "bottle";
    if (numberOfBottles === 1) {
        bottleWord = "bottles";
    } 
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
    console.log(numberOfBottles + " " + bottleWord + " of beer,");
    console.log("Take one down, pass it around,");
	numberOfBottles--;
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.");
}



//my
var bottles = 100;
function beer() {
 while(bottles > 1) {
   console.log(bottles + " bottles of beer on the wall, " + bottles + " bottles of beer")
   bottles --;
 }};

 var a = 0;
 while(a>10){
  console.log(a);
 }