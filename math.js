console.log(Math.abs(-5)); // 5 აბსოლიტური მნიშვნელობა ანუ მოდული

console.log(Math.ceil(5.9)); // 6 რიცხვის დამრგვალება მარჯვნიდან უახლოაეს მთელ რიცხვამდე მიუხედავად ათწილადისა

console.log(Math.floor(5.2)); // 5 რიცხვის დამრგვალება მარცხნიდან უახლოაეს მთელ რიცხვამდე მიუხედავად ათწილადისა

console.log(Math.round(6.7)); // 6 ჩვეულებრივი დამრგვალება

console.log(Math.PI); // 3.141592653589793

console.log(Math.max(3,78,35,1)); // მაქსიმუმი

console.log(Math.min(3,78,35,1)); // მინიმუმი

console.log(Math.pow(3,3)); // 27 ახარისხება 3^3

console.log(Math.random()); // შემთხვევითი რიცხვი [0-1] შუალედიდან

console.log(Math.sqrt(16)); // 4 ფესვი

var PI = 3.1415926;
console.log( Math.round(PI * 100) / 100 ); // 3.1415926 -> 314.15926 -> 314 -> 3.14
// 10ის იმ ხარისხზე გავამრავლოთ და გავყოთ, რომლამდეც გვინდა დამრგვალება

var PI = 3.1415926;
console.log(PI.toFixed(2)); // 3.14  (i) romlamdec gvinda damrgvaleba
console.log(typeof PI.toFixed(2)); // string

var PI = 3.1415926;
console.log(PI.toFixed(2)); // 3.14
console.log(typeof +(PI.toFixed(2))); // number

