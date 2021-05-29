var string = "hello world, this is a world";
console.log(string.replace("world","tbilisi")); // hello tbilisi, this is a world   only first one


var string = "hello world, this is a world";
console.log(string.replace(/world/g,"tbilisi")); // hello tbilisi, this is a tbilisi. every one

var string = "hello World , world, this is a world";
console.log(string.replace(/world/gi,"tbilisi")); // hello tbilisi, tbilisi, this is a tbilisi. 
//works on capital ones too.

var str = "Mr Blue has a blue house and a blue car"; 
var res = str.replace(/blue|house|car/gi, function myFunction(x){return x.toUpperCase();}); 
console.log(res)
// Mr BLUE has a BLUE HOUSE and a BLUE CAR.


console.log( "hello".toUpperCase() ); // HELLO
console.log( "HELLO".toLowerCase() ); // hello