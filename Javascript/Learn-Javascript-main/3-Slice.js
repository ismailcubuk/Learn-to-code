var tweet = prompt ("tweet yaz:");
var tweetUnder140 = tweet.slice (0,140);
alert(tweetUnder140);

VEYA

var tweet = prompt ("tweet yaz:");
alert(tweet.slice (0,140));

VEYA

alert(prompt ("tweet yaz:").slice (0,140));