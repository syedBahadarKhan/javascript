/*
// 1. TABLE PRINT KARE
// DESCRIPTION: user se koi number le and uska table 10 tk print kare*/

let num= +prompt("please enter a number");
for(let i=1; i<=10; i++){
    console.log(`${num} * ${i}= ${num *i}`);
}

/*// 2. ARRAY ELEMENTS KA SUM PRINT KARE
// DESCRIPTION:
// 1. user se 5 numbers le and unko aik aik kar k array me rakhe
// 2. phr array elements ka sum find kar k print kare*/


/*function takeUserInput() {
    let numbers = []; 
    for (let i = 0; i < 5; i++) {
        let userInput = prompt(`Enter number ${i + 1}:`);
        numbers.push(parseFloat(userInput));
    }
    return numbers;
}
function calculateSum(numbers) {
    let sum = 0;
    for (let number of numbers) {
        sum += number;
    }
    return sum;
}
let numbersArray = takeUserInput();
let sum = calculateSum(numbersArray); 
console.log(`Sum of the numbers entered: ${sum}`);


// 3. ARRAY KA SUB SE BARA NUMBER PRINT KARE
// DESCRIPTION:
// 1. user se 5 numbers le and unko aik aik kar k array me rakhe
// 2. phr array elements me SUB SE BARA NUMBER find kar k print kare


function takeUserInput() {
    let numbers = [];
    for (let i = 0; i < 5; i++) {
        let userInput = prompt(`Enter number ${i + 1}:`);
        numbers.push(parseFloat(userInput)); // parseFloat() to handle decimal inputs
    }
    return numbers; 
}
function findLargestNumber(numbers) {
    let largest = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > largest) {
            largest = numbers[i];
        }
    }
    return largest;
}
let numbersArray = takeUserInput();
let largestNumber = findLargestNumber(numbersArray);
console.log(`The largest number entered is: ${largestNumber}`);*/

/* 4. USER SE STRING LE AND USKO ULTA PRINT KARE
 DESCRIPTION:
 1. user se koi b string input le
2. usko reverse me print karde e.g: mehtab -> bathem*/

function takeUserInput() {
    let userInput = prompt("Enter a string:");
    return userInput;
}

function reverseString(inputString) {
    let reversedString = inputString.split('').reverse().join('');
    return reversedString;
}

let inputString = takeUserInput();
let reversedString = reverseString(inputString);
console.log(`Reversed string: ${reversedString}`);

/*5. FACTORIAL
DESCRIPTION:
1. user se koi b NUMBER input le
2. us number ka factorial find kr k print kare
3. factorial def:
the product of an integer and all the integers below it; e.g. factorial four ( 4! ) is equal to 24.
 4 * 3 * 2 * 1 = 24*/
function takeUserInput() {
    let userInput = prompt("Enter a number:");
    return parseInt(userInput); 
}
function calculateFactorial(number) {
    if (number === 0 || number === 1) {
        return 1; 
    }
    let factorial = 1;
    for (let i = 2; i <= number; i++) {
        factorial *= i;
    }
    return factorial;
}
let userNumber = takeUserInput();
let factorialResult = calculateFactorial(userNumber);
console.log(`Factorial of ${userNumber} is: ${factorialResult}`);

