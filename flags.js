let str = "I Love JavaScript!";

console.log( str.search( /LO/ ) ); // -1   დამთხვევა არ დაფიქსირდა (-1)
console.log( str.search( /LO/i ) ); // 2    capitalise doesnt matter

var str1 = "ეს ჯავასკრიპტია, ეს კარგი ენაა";
console.log( str1.search( /ეს/i ) ); // 0