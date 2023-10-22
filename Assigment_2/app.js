// Solutions  Of Chapter 5 Questions

// Question 1

// let num1 = 3;
// let num2 = 5;
// let addNum = num1 + num2;
// document.write("Sum of 3 + 5 is:",addNum);

// Question 2

// let num1 = 3;
// let num2 = 5;
// let subtractNum = num2 - num1;
// document.write("Subtractions of 5 - 3 is: ", subtractNum);

// let num1 = 3;
// let num2 = 5;
// let multiplayNum = num2 * num1;
// document.write("Multiplay of 5 * 3 is: ", multiplayNum);

// let num1 = 3;
// let num2 = 5;
// let DivideNum = num2 / num1;
// document.write("Division  of 5 - 3 is: ", DivideNum.toFixed(2));

// Question 3

let myVariable;
// document.write(`Value
// after variable declaration is:`)

myVariable = 5;

// document.write(`Initial
// value:`,myVariable)

myVariable++;

// document.write(`Value
// after increment is:`,myVariable)

myVariable = myVariable + 7;

// document.write(`Value after addition is:`,myVariable)

--myVariable;
// document.write(`Value
// after decrement is:`,myVariable)

let finalVariableIs = myVariable % 3;

// document.write(`The remainder is:`,finalVariableIs)

// Question 4

// let ticketPrice = 600
// let numberOfTicket = 5;

// document.write(`Total cost to buy ${numberOfTicket} tickets to a movie is:${ticketPrice*numberOfTicket}PKR`)

// Question 5

// for (let i = 1; i <= 10; i++) {

//  document.write(" 2 " + " x " + [i] + " = " + 2*[i] + "<br>")

// }

// __________X________X__________Chapter 5 completed

// Solutions  Of Chapter 6 to 9 Questions

// Question 1

// let a = 10;
// document.write(`The value of number is: ${number}`)

// a++;
// document.write(`The value of a++ is: ${a} <br> Now the  value of a is: ${a}`)

// document.write(`The value of a++ is: ${a} <br>`)
// a++;
// document.write(`Now the  value of a is ${a}`)

// --a;
// document.write(`The value of --a is :${a}<br> Now the  value of a is ${a}`)
// --a;
// document.write(`The value of --a is :11 <br> Now the  value of a is ${a}`)

// Question 2

// let a =  2;
// let b = 1;

// let result = --a - --b + ++b + b--
// 1 - 0 + 1 + 0 = 2
// pre-dec - pre-dec + pre-inc + post-dec

// document.write(result)

// Question 3

// let user = prompt("Enter your name:",)
// alert("Greeting Mrs. " + user + " How are you!")

// Question 4

//   let user = +prompt("Enter your desired number of table")
//   if (user === 0) {
//    user = 5;
//   }

//   for(let i = 1; i<=10; i++) {

//    document.write(user + " x " + [i] + " = " + user*[i] + "<br>")

// }

// Question 5

//     let sub1 = +prompt("Enter your first subject marks")
//     let sub2 = +prompt("Enter your second subject marks")
//     let sub3 = +prompt("Enter your third subject marks")

// let addSub = sub1 + sub2 + sub3

// let totalMarks = 300;

// let result = ( addSub /totalMarks)*100
// alert((result.toFixed(2) + "%"))

// __________X___________X___________Chapter 6-9 completed

// Solutions  Of Chapter 9-11 Questions

// Question 1

// let citiesName = prompt("Enter your city name")
// if(citiesName==="karachi"){
//  alert(`Welcome to city of lights`)
// }
// alert("You are welcome to your " + citiesName + " city")

// Question 2

// let checkUser = prompt("Enter your gender")
// if(checkUser==="male"){
// alert("Good Morining Sir")
// }

// else{
// alert("Good Morning Ma'am")
// }

// Question 3

// let checkTrafficSignal = prompt("Enter the color of traffic signal ")

// if (checkTrafficSignal==="red") {
//  alert("Must Stop")
// }
// else if(checkTrafficSignal==="yellow"){
// alert("Ready to move")
// }
// else if(checkTrafficSignal==="green"){
// alert("Move now")
// }

// Question 4

// let checkFuel = prompt("Enetr your remaining fuel in litres")
// if (checkFuel<=0.25) {
//   alert("Please refill the fuel in your car")
// }
// else{
//   alert("Drive continue")
// }

// Question 5

// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// } // true

// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is false");
// } // false

// var c = 12;
// if (c++ === 13){
// alert("condition 1 is false");
// } // false

// if (c === 13){
//  alert("condition 2 is true");
//  } // true

//  if (++c>13){
//   alert("condition 3 is true");
//   }

//   if (c === 13){
//    alert("condition 2 is true");
//    }

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }

// if (true){
//  alert("True");
//  }
//  if (false){
//  alert("False");
//  }

// if("car" < "cat"){
//  alert("car is smaller than cat");
//  }


// let eng ,math,urdu,marksObtained,percentage ;
// eng=+prompt("Enter your english marks out of 100")
// math=+prompt("Enter your math marks out of 100")
// urdu=+prompt("Enter your urdu marks out of 100")
// document.write("total marks 300" + "<br>")
// marksObtained=eng+math+urdu
// document.write("marks obtained"+ " " + marksObtained + "<br>" + "percetage" + " " + percentage + "%" + "<br>")
// percentage = (marksObtained/300)*100

// Question 7 

// let guessNumber = +prompt("Enter the number")
// if(guessNumber>=0 && guessNumber<=10){
// alert("Bingo! Correct answer." )

// }

// else if(guessNumber===11){
// alert('Close enough to the correct answer')
//  }
// else {
// alert("number not match")
// }



// Question 8 

// let division = prompt("Enter the number")
// if(division%3==0 ){
// alert(division + " is divisible by 3 ")
// }
// else{
//   alert(division + " not divisible by 3")
// }

// let numberCheck = prompt("Enter the number")
// if (numberCheck %2==0  ) {
//   alert("number is even")
// }
// else if(m=numberCheck %3==0){
// alert("Number is odd")
// }
// Question 10 

// let temperature = +prompt("Enter the temperature")
// if(temperature>=40){
// alert("It is too hot outside.")
// }
// else if(temperature>=30){
// alert("The Weather today is Normal.")
// }

// else if(temperature>=20){
// alert("Today’s Weather is cool.")
// }

// else if (temperature>=10){
// alert("OMG! Today’s weather is so Cool.")
// }

// else{
//   alert("OMG! Today’s weather is so Cool.")
// }

// Question 11 

// let num1 = +prompt("Enter the first number");
// let num2 = +prompt("Enter the second number");
// let sign = prompt("Enter your desired operators, eg: (+, -, *, /, %,**)");

// if (sign === "+") {
//   alert(num1 + num2);

// } else if (sign === "-") {
//   alert(num1 - num2)

// } else if (sign === "*") {
//   alert(num1 * num2);

// } else if (sign === "/") {
//   alert(num1 / num2);
// }
// else if(sign==="%"){
//     alert(num1 % num2)
//   }

//   else if(sign==="**"){
//     alert(num1 ** num2)
//     }

//     else{
//       alert("please enter a number")
//     }
    