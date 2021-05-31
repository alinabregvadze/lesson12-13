function showMessage(from, text) { // პარამეტრები from, text
    from = "** " + from + " **";
    console.log(from + ': ' + text);
 }
 showMessage('Zoro', 'Hello !');
 showMessage('Zoro', 'How are you ?');

 function myfoo()
{
  var array = arguments;
  for (i=0;i<array.length;i++)
 {
  console.log(array[i]);
  }
}
myfoo("hello","how","are","you"); // arguments[0] = hello, arguments[1] = how

function fartobi(a,b)
{
c = a*b;
return c;
}
console.log(fartobi(2,5));

