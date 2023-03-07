var tweet = prompt ("tweet yaz:");
var tweetSayacı= tweet.length;
alert ("Tweet'te " + tweetSayacı + " karakter yazıldı, " + (140-tweetSayacı) + " karakter kaldı.")

VEYA

var tweet = prompt ("tweet yaz:");
alert ("Tweet'te " + tweet.length + " karakter yazıldı, " + (140-tweet.length) + " karakter kaldı.")