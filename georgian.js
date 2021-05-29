// ქართული ანბანი + უნიკოდი
str = "აჰ";
var first = str.charCodeAt(0); //4304
var last = str.charCodeAt(1); //4336
for(var i=first;i<=last;i++){
    console.log(String.fromCharCode(i) + " - " + i);
}