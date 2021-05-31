var str = "მე მიყვარს ჯავასკრიპტი!"; // უნდა მოიძებნოს ამ სტრიქონში

var regexp = /მი/;
console.log( str.search(regexp) ); // 3    shows element's index


var str = "მე მიყვარს ჯავასკრიპტი!";

var substr = "მი";
console.log( str.indexOf(substr) ); // 3 shows the same thing

