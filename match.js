// var str = "GE-Ge-ge";

// var result = str.match( /ge/ ); //i case insensitive

// console.log( result[0] ); // ge (დამთხვევა) მთლიანი დამთხვევა resultში განსაზღვრულის.
// console.log( result.index ); // 0 (პოზიცია)  რომელ პოზიციაზეა
// console.log( result.input ); // GE-Ge-ge (მთლიანი სტრიქონი) სად ხდება ძებნა


var str1 = "javascript - წარმატებისათვის";

var result1 = str1.match( /წარმატებისა(თვის)/i );

console.log( result1[0] ); // javascript (მთლიანი დამთხვევა)
console.log( result1[1] ); // script (დამთხვევის ფრჩხილებში მოთავსებული ნაწილი)
console.log( result1.index ); // 0
console.log( result1.input ); // javascript - წარმატებისათვის

let str2 = "GE-Ge-ge-gE-ge-GE";
let result2 = str2.match( /ge/g ); //g global search,  i case insensitive
console.log( result2 ); // GE-Ge-ge // with flag g -> index doesnt work
