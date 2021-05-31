var date = new Date();

console.log(date); // Thu Jan 12 2017 21:01:55 GMT+0400 (Local Standard Time)

console.log(date.toLocalString); // 1/12/2017, 9:09:18 PM  doesnt work

console.log(date.toLocaleDateString()); // 1/12/2017

console.log(date.toLocaleTimeString()); // 9:09:18 PM

console.log(date.getMonth()); // თუ ახლა არის იანვარი დააბრუნებს 0 - ს (მასივის პრინციპი)

console.log(date.getDay()); // თვის ანალოგიურად   ??????  day of week???

console.log(date.getFullYear()); // 2017

console.log(date.getYear()); // 117 ანუ წლების რაოდენობა 1900 წლიდან :)))

console.log(date.getHours()); //მიმდინარე საათი ახლა როცა ამ სტრიქონს ვწერ 21 (21:15 :)))

console.log(date.getMinutes()); // მიმდინარე წუთი ახლა როცა ამ სტრიქონს ვწერ 17 (21:17 :)))

console.log(date.getSeconds()); // მიმდინარე წამი ახლა როცა ამ სტრიქონს ვწერ 51 (21:18:51 :)))


var date = new Date();

date.setFullYear(1125);

date.setMonth(9);

date.setDate(25);

console.log(date);