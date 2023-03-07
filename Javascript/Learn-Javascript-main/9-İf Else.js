// LOVE SCORE APP

prompt("What is your name?");
prompt("What is their name?");

var loveScore = Math.random();
loveScore = Math.floor(loveScore*100)+1;

if (loveScore > 70){
    alert("Your love score is " + loveScore + "%" + " iyisin ha!");
}
else{
    alert("Your love score is " + loveScore + "%" + " sıçtın");
}

// LOVE SCORE APP 2

prompt("What is your name?");
prompt("What is their name?");

var loveScore = Math.random();
loveScore = Math.floor(loveScore*100)+1;

if (loveScore > 70){
    alert("Your love score is " + loveScore + "%" + " iyisin ha!");
}
if (loveScore > 30 && loveScore <=70) {
alert("Your love score is " + loveScore + "%" + " olur gibi");
}
if (loveScore <=30) {
alert("Your love score is " + loveScore + "%" + " sıçtın");
}