//PUSH değer eklemek
var output = [];
output.push(1);
output.push(2);


//FİZZ BUZZ
var output = [];
var count = 1;

function fizzBuzz() {
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
    console.log (output)
}

