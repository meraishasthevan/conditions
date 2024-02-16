/*find output*/
  var a=10;
  var b=5;
  var c=a+b;
  a-=c;
  console.log(a,c);

/*find output*/
  let w=34;
  let x=34;
  w+=x;
  x%=w;
  console.log(w,x);

/*check given day is weekend or not*/

  var day=prompt("enter the day");
  if(day=="sunday"){
  console.log("that is weekend");
 }
  else if(day=="saturday"){
  console.log("that is weekend");
 }
  else{
  console.log("not a weekend");
 }

/*get a mark*/
  var mark=prompt("enter the number");

  if(mark>=90){
  console.log("A grade");
 }
  else if(mark>=75){
  console.log("B grade");
 }
  else if(mark>=60){
  console.log("C grade");
 }
  else if(mark>=50){
  console.log("D grade");
 }
  else if(mark>=40){
  console.log("E grade");
 }
  else{
  console.log("F grade");
 }

/*leap year or not*/

  var year=prompt('enter the year');
  if(year%4==0 && year%100!=0 || year%400==0){
  console.log("leap year");
 }
  else{
  console.log("not a leap year");
 }




















