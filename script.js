// ==========================================
// ANONYMOUS FUNCTION
// ==========================================


// 1. Without Input & Without Return
// Print numbers from 1 to 15.

let printNum = function () {
  for (let i = 1; i <= 15; i++) {
    console.log(i);
  }
};

printNum();


// 2. Without Input & Without Return
// Print the multiplication table of 8.

let multiplication = function () {
  let num = 8;

  for (let i = 1; i <= 10; i++) {
    console.log(num, "X", i, "=", num * i);
  }
};

multiplication();


// 3. Without Input & Without Return
// Print all even numbers from 1 to 40.

let printEven = function () {
  for (let i = 1; i <= 40; i++) {
    if (i % 2 == 0) {
      console.log(i);
    }
  }
};

printEven();


// 4. Without Input & Without Return
// Print a right-angled star pattern with 6 rows.

let starPattern = function () {
  let output = "";

  for (let i = 1; i <= 6; i++) {

    for (let j = 1; j <= i; j++) {
      output = output + "*";
    }

    output = output + "\n";
  }

  console.log(output);
};

starPattern();


// 5. Without Input & Without Return
// Print all prime numbers from 1 to 40.

let printPrime = function () {

  for (let i = 1; i <= 40; i++) {

    let count = 0;

    for (let j = 1; j <= i; j++) {

      if (i % j == 0) {
        count += 1;
      }
    }

    if (count == 2) {
      console.log("Prime", i);
    }
  }
};

printPrime();


// ==========================================
// 2. WITH INPUT & WITHOUT RETURN
// ==========================================


// 6. Check whether a given number is Even or Odd.

let checkEvenOdd = function (num) {

  if (num % 2 == 0) {
    console.log("Even");
  } else {
    console.log("Odd");
  }
};

checkEvenOdd(15);


// 7. Print the multiplication table of a given number.

let table = function (num) {

  for (let i = 1; i <= 10; i++) {
    console.log(num, "X", i, "=", num * i);
  }
};

table(9);


// 8. Print numbers between two given numbers.

let printRange = function (start, end) {

  for (let i = start; i <= end; i++) {
    console.log(i);
  }
};

printRange(5, 15);


// 9. Print all odd numbers between two given numbers.

let printOdd = function (start, end) {

  for (let i = start; i <= end; i++) {

    if (i % 2 != 0) {
      console.log(i, "Odd");
    }
  }
};

printOdd(5, 20);


// 10. Print a number triangle pattern for N rows.

let numberPattern = function (rows) {

  for (let i = 1; i <= rows; i++) {

    let output = "";

    for (let j = 1; j <= i; j++) {
      output = output + j + " ";
    }

    console.log(output);
  }
};

numberPattern(6);


// ==========================================
// 3. WITHOUT INPUT & WITH RETURN
// ==========================================


// 11. Return the sum of numbers from 1 to 75.

let calculateSum = function () {

  let sum = 0;

  for (let i = 1; i <= 75; i++) {
    sum = sum + i;
  }

  return sum;
};

console.log(calculateSum());


// 12. Return the factorial of a fixed number.

let calculateFactorial = function () {

  let num = 6;
  let factorial = 1;

  for (let i = 1; i <= num; i++) {
    factorial = factorial * i;
  }

  return factorial;
};

console.log(calculateFactorial());


// 13. Return whether a fixed number is Prime.

let checkPrimeNumber = function () {

  let num = 17;
  let count = 0;

  for (let i = 1; i <= num; i++) {

    if (num % i == 0) {
      count += 1;
    }
  }

  if (count == 2) {
    return "Prime";
  } else {
    return "Not prime";
  }
};

console.log(checkPrimeNumber());


// 14. Return the reverse of a fixed number.

let reverseNumber = function () {

  let num = 4567;
  let reverse = 0;

  while (num != 0) {

    let lastDigit = num % 10;

    reverse = reverse * 10 + lastDigit;

    num = parseInt(num / 10);
  }

  return reverse;
};

console.log(reverseNumber());


// 15. Return the count of digits in a fixed number.

let countDigits = function () {

  let num = 45678;
  let count = 0;

  while (num != 0) {

    count += 1;

    num = parseInt(num / 10);
  }

  return count;
};

console.log(countDigits());


// ==========================================
// 4. WITH INPUT & WITH RETURN
// ==========================================


// 16. Return the largest of two numbers.

let findLargest = function (a, b) {

  if (a > b) {
    return "First number is greater";
  } else {
    return "Second number is greater";
  }
};

console.log(findLargest(12, 19));


// 17. Return whether a number is a Palindrome.

let checkPalindrome = function (num) {

  let original = num;
  let reverse = 0;

  while (num != 0) {

    let lastDigit = num % 10;

    reverse = reverse * 10 + lastDigit;

    num = parseInt(num / 10);
  }

  if (reverse == original) {
    return "Palindrome";
  } else {
    return "Not a palindrome";
  }
};

console.log(checkPalindrome(1331));


// 18. Return the factorial of N.

let factorialOfN = function (num) {

  let factorial = 1;

  for (let i = 1; i <= num; i++) {
    factorial = factorial * i;
  }

  return factorial;
};

console.log(factorialOfN(6));


// 19. Return whether a number is an Armstrong number.

let checkArmstrong = function (num) {

  let original = num;
  let sum = 0;

  while (num != 0) {

    let lastDigit = num % 10;

    sum = sum + lastDigit ** 3;

    num = parseInt(num / 10);
  }

  if (sum == original) {
    return "Armstrong number";
  } else {
    return "Not an Armstrong number";
  }
};

console.log(checkArmstrong(370));


// 20. Return the GCD of two numbers.

let findGCD = function (a, b) {

  while (b != 0) {

    let remainder = a % b;

    a = b;
    b = remainder;
  }

  return a;
};

console.log(findGCD(24, 36));