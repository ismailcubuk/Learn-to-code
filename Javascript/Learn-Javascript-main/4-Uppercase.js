let name = "İsmail"
name = name.toUpperCase(); //büyük harfleri name e eşitler hepsi büyük
name = name.toLowerCase(); //küçük harfleri name e eşitler hepsi küçük

//BENİM YAPTIĞIM

var isim = prompt ("Adınız nedir?");
var ilkharf = isim.slice (0,1);
var ilkharic = isim.slice (1,isim.length);
var tümisim = ilkharf.toUpperCase() + ilkharic.toLowerCase();
alert ("Merhaba, " + tümisim + " nasılsın?")




//ÖĞRETİLEN

var isim = prompt("Adınız nedir?")

//a ilk harfi seçmek
var ilkharf = isim.slice(0,1);

//b ilkharfi büyük yapmak

var ilkharfbüyük = ilkharf.toUpperCase();

//c geri kalan harfleri seçmek

var gerikalanharfler = isim.slice(1,isim.length);
//e Geri kalan harfleri küçültme

gerikalanharfler = gerikalanharfler.toLowerCase()

//d ismi birleştirmek

var tümisim = ilkharfbüyük + gerikalanharfler;

//1 alert yazdırmak

alert ("Merhaba, " + tümisim + " nasılsın?")


