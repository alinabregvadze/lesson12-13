console.log(15/0)  //infinity

if (NaN == NaN) console.log( "==" ); // არცერთი გამოძახება
if (NaN === NaN) console.log( "===" ); // არ იმუშავებს

var n = 0 / 0;
console.log( isNaN(n) ); // true
console.log( isNaN("12") ); // false, სტრიქონი "12" გარდაიქმნა ჩვეულებრივ რიცხად 12

console.log( NaN + 1 ); // NaN

// (პირდაპირი მნიშვნელობით "არის სასრული ?") ფუნქცია isFinite(n) გარდაქმნის არგუმენტს რიცხვად და აბრუნებს true, თუ შედეგი არ არის NaN/Infinity/-Infinity ამათგან ერთ-ერთი.
console.log( isFinite(1) ); // true
console.log( isFinite(Infinity) ); // false
console.log( isFinite(NaN) ); // false
console.log( isFinite("გჰფგჰფგფგჰ") ); // false

