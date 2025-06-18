console.log('---------------------------------------------')
const maxOfTwoNumbers = (x, y) => {
  if (x >= y) {
    return x;
  } else {
    return y;
  }
}
console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 9));
console.log('---------------------------------------------')
function isAdult (age) {
if (age < 18){
return "Minor";
}
else{
return "Adult";    
}
}
console.log('Exercise 2 Result:', isAdult(21));
console.log('---------------------------------------------')
function isCharAVowel(vowel){
    if (vowel === 'a')
        return "True";
    else if (vowel === 'e' )
        return "True";
    else if (vowel === 'i' )
        return "True";
    else if (vowel === 'o' )
        return "True";
    else if (vowel === 'u' )
        return "True";
    else
    return "False";
}
console.log('Exercise 3 Result:', isCharAVowel("a"));
console.log('---------------------------------------------')
function generateEmail(name , domain){
    return name + domain;
}
console.log('Exercise 4 Result:', generateEmail("johnsmith", "@example.com"));
console.log('---------------------------------------------')
const user= "Sam"

function greetUser(name, tod) {
    if (tod === "morning") {
        return "Good morning, " + name + "!";
    } else if (tod === "afternoon") {
        return "Good afternoon, " + name + "!";
    } else if (tod === "evening") {
        return "Good evening, " + name + "!";
    } else {
        return "Hello, " + name + "!";
    }
}
console.log('Exercise 5 Result:', greetUser("Sam", "morning"));
console.log('---------------------------------------------')
function maxOfThree (num1, num2 ,num3){
return Math.max(num1, num2, num3);
}
console.log('Exercise 6 Result:', maxOfThree(5, 10, 8));
console.log('---------------------------------------------')
function calculateTip (bill, tip){
    return bill * tip / 100;
}
console.log('Exercise 7 Result:', calculateTip(50, 20));
console.log('---------------------------------------------')
function convertTemperature(temp, scale) {
  if (scale === "C") {
    return temp * 9/5 + 32; 
  } else if (scale === "F") {
    return (temp - 32) * 5/9;
  }
}
console.log('Exercise 8 Result:', convertTemperature(32, "C"));
console.log('---------------------------------------------')
function basicCalculator(num1, num2, math) {
  if (math === 'add') {
    return num1 + num2;
  } else if (math === 'subtract') {
    return num1 - num2;
  } else if (math === 'multiply') {
    return num1 * num2;
  } else if (math === 'divide') {
    return num1 / num2;
  }
}
console.log('Exercise 9 Result:', basicCalculator(10, 5, "subtract"));
console.log('---------------------------------------------')
function calculateGrade(grade){
    if (grade >= 90) {
        return 'A';
    }
    else if (grade >= 80) {
        return 'B';
    }
    else if (grade >= 70) {
        return 'C';
    }
    else if (grade >= 60) {
        return 'D';
    }
    else {
        return 'F';
    }
}
console.log('Exercise 10 Result:', calculateGrade(85));
console.log('---------------------------------------------')