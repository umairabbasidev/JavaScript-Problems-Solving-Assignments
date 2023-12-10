// Task 3 : Find even and odd Number

let numberArray = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];
let evenNumbers = [];
let odnumbers = [];
for (let i = 0; i < numberArray.length; i++) {
  if (numberArray[i] % 2 === 0) {
    evenNumbers.push(numberArray[i]);
  } else {
    odnumbers.push(numberArray[i]);
  }
}

c = document.write("Original Array " + numberArray + "<br>");
c = document.write("Even Numbers: " + evenNumbers + "<br>");
c = document.write("Odd Numbers: " + odnumbers);
