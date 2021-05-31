let str = "+995alksjd571-17- \n 33-11";
let reg = /\d/g;  //  \d any  number
console.log( str.match(reg) ); // ყველა დამთხვევის მასივი: 9,9,5,5,7,1,1,7,3,3,1,1
let reg1 = /\w/g;  //ლათინური ანბანის ასო ან ციფრი ან ქვედა ტირე '_'. არალათინური ასოები არ შედის \w კლასში.
console.log( str.match(reg1) )
let reg2 = /\s/g; //spaces, tab, new line
console.log(str.match(reg2))
console.log(str)

// without flag g shows first one ->> [ '9', index: 1, input: '+995alksjd571-17-33-11', groups: undefined ]

// \d (ინგლისური სიტყვის «digit >>numbers 
//\s (ინგლისური სიტყვის «space» >> spaces, symbols
//\w (ინგლისური სიტყვის «word»  >> first letter