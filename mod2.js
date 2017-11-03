// DO NOT ADJUST

var x = 7;
var y = 8;
var z = 9;

x = y + z; //17
z = x; // z = 17, x = 17 
x = y; // x = 8 
z = x + y; // z = 8 +8 = 16
y = z - x; // y = 16 - 8 = 8
z = y; //z = 8
x = y * z; // x = 8 * 8 = 64
z = y / z; // z = 8 / 8 = 1
x = (z - x) / (y + z); // x = (1 - 64 ) / (8 + 1 )

/////////////////

var answer = {
  finalValueOfX: (1) // CHANGE 'null' to correct answer
};
  
// console.log(x);


var x = [1, 2, 3]; 
// console.log('orig x', x);
var y = [4, 5, 6]; 
// console.log('orig y', y);
var z = x;  // var z is a POINTER to x!! so changes in z or x will produce the same outcome
// console.log('orig z',z);  // z = [1, 2, 3]

z[2] = y[0]; 
// console.log("z[2] = y[0]; now z = ", z); // z = [1, 2, 4]

z[1] = y[2]; 
// console.log('z[1] = y[2]; now z =', z); // z = [1, 6, 4]
y[1] = z[1]; 
// console.log('y[1] = z[1]; now y', y); // y = [4, 6, 6]
// console.log('x = ', x, 'y = ',  y); 
x[0] = y[0]; 
// console.log('x[0] = y[0]; now x =', x); // x (like z) = [4, 6, 4]
x[2] = 1;   
// console.log('x[2] = 1; now x =', x); // x = [4, 6, 1] , so now z = [4, 6, 1]

// console.log('x', x);
// console.log('y', y);
// console.log('z', z);

/*
JavaScript : Array assignment creates reference not copy

Consider we have an array var a = [1,2,3,4]; and we assign var b = a; 
then b not a copy of a, b is a pointer to a. So if you make any changes on
 b will have effect on a as well. Here is an example.
*/
var a = [1,2,3,4];
var b = a;
// console.log(b.pop());
// console.log(b); // [1, 2, 3]
// console.log(a); // [1, 2, 3]

/*
Write an assertEqual function from scratch.

It should compare actual and expected values with strict equality (not typecasting). Use console.log, not return statements; and pay very close attention to the desired messages provided in the examples.

Examples

SUCCESS CASE

function multiplyByTwo(n) {
  return n * 2;
}
var output = multiplyByTwo(2); // returns 4
assertEqual(output, 4, 'it doubles 2 to 4');

// console output:
// passed


FAILURE CASE

function multiplyByTwo(n) {
  return (n * 2) + 1; // an incorrect implementation
}
var output = multiplyByTwo(2); // returns 5
assertEqual(output, 4, 'it doubles 2 to 4');
// console output:
// FAILED [it doubles 2 to 4] Expected "4", but got "5"

*/

function assertEqual(actual, expected, testName) {
  if (actual === expected) {
    console.log('passed');
  } else {
    console.log('FAILED [' + testName + '] Expected "' + expected + '", but got "' + actual + '".');
  }
}

/*
Write an "assertArraysEqual" function from scratch.

Assume that the arrays in question contain only scalar values (i.e., simple values like strings or numbers).

Do not use JSON.stringify(), Array.join(), or any other "convert the array to a string so I can compare two strings" type of technique to implement this.

Examples

SUCCESS CASE

var expected = ['b', 'r', 'o', 'k', 'e', 'n'];
var actual = 'broken'.split('');
assertArraysEqual(actual, expected, 'splits string into array of characters');
// console output:
// passed

FAILURE CASE

var expected = [1, 1, 2, 3, 5, 8, 13];
var actual = generateFirstNFibonaccis(7); //just an example
assertArraysEqual(actual, expected, 'generates first 7 Fibonacci numbers');
// console output:
// FAILED [generates first 7 Fibonacci numbers] Expected "1, 1, 2, 3, 5, 8, 13", but got "2, 3, 5, 8, 13, 21, 34"

*/

function assertArraysEqual(actual, expected, testName) {
  var areEqualValues = actual.every(function(item, i){
    return item === expected[i];
  });
  
  var areEqualLengths = (actual.length === expected.length);
  
  if(areEqualValues && areEqualLengths) {
    console.log('passed');
  } else {
    console.log('FAILED [' + testName + '] Expected "' + expected + '", but got "' + actual + '"');
  }
  
}

/*
Write an "assertObjectsEqual" function from scratch.

Assume that the objects in question contain only scalar values (i.e., simple values like strings or numbers).

It is OK to use JSON.stringify().

Note: The examples below represent different use cases for the same test. In practice, you should never have multiple tests with the same name.

Examples

SUCCESS CASE

var person = {
  firstName: 'Joe',
  lastName: 'Blow'
};
person = updateObject(person, 'firstName', 'Jack');

var expected = {
  firstName: 'Jack',
  lastName: 'Blow'
};

assertObjectsEqual(person, expected, 'updates person's existing first name field');
// console output:
// passed

FAILURE CASE

var person = {
  firstName: 'Joe',
  lastName: 'Blow'
};
person = updateObject(person, 'age', 35);

var expected = {
  firstName: 'Joe',
  lastName: 'Blow',
  age: 35
};
assertObjectsEqual(person, expected, 'adds person's non-existing age field');
// console output:
// FAILED [adds person's non-existing age field] Expected {"firstName":"Joe", "lastName":"Blow", age:35}, but got {"firstName":"Joe", "lastName":"Blow"}

*/

function assertObjectsEqual(actual, expected, testName) {
  actual = JSON.stringify(actual);
  expected = JSON.stringify(expected);
  if( actual === expected){
    console.log('passed');
  } else {
    console.log('FAILED [' +testName +'] Expected ' +expected + ', but got ' +actual);
  }
}

/*
Write an "assertWithinRange" function from scratch.

The idea here is similar to when someone says, "Give me a number between 1 and 5". 
You usually think the possible answers are "1, 2, 3, 4, or 5".  I.e., you usually don't interpret the options as being "2, 3, or 4".  

Notes:
* Assume that the "actual" and "expected" arguments are always numbers (e.g., not booleans or other types that don't make sense in the context of examining a "range".)

Examples

SUCCESS CASE IN ACTUAL USE

var blackjackScore = 20;
assertWithinRange(4, 21, blackjackScore, 'blackjack score should be between 4 and 21');
// console output:
// passed

SUCCESS CASE IN ACTUAL USE

var dieRoll = 1;
assertWithinRange(1, 6, dieRoll, 'die roll should be between 1 and 6');
// console output:
// passed

FAILURE CASE IN ACTUAL USE

var price = 101;
assertWithinRange(1, 100, price, 'price should be between 1 and 100');
// console output:
// FAIL [price should be between 1 and 100] "101" not within range 1 to 100

*/

function assertWithinRange(low, high, actual, testName) {
  if(actual < high && actual > low){
     console.log('passed');
     } else {
       console.log('FAIL [' +testName + '] "' +actual + '" not within range ' +low +' to ' +high);
     }
}


/*

Write an "assertEqual" function from scratch, from memory.

Please DO NOT simply PASTE in from before.

If you have to go back and look at your previously-implemented code once, fine, but come back here and write it from memory.

Then use your assertion function in a series of test cases to thoroughly test the code.

Use categorical reasoning to consider all the useful cases.

Debug the code under test, if necessary.

*/

// Assertion function:

function assertEqual(actual, expected, testName) {
  if(actual === expected){
    console.log('passed');
  } else {
    console.log('FAILED [' +testName +'] Expected "' +expected + '", but got "' +actual + '"');
  }
}


// Code Under Test:

function square(n) {
  return n * n;
}


// Calls to 'assertEqual':
var output = square(-5);
// assertEqual(output, 25, 'square of negative equals positive');

output = square(0);
// assertEqual(output, 0, 'square of negative equals positive');

output = square(8);
// assertEqual(output, 64, 'square of negative equals positive');


/*

Write an "assertEqual" function from scratch, from memory.

Please DO NOT simply PASTE in from before.

If you have to go back and look at your previously-implemented code once, fine, but come back here and write it from memory.

Then use your assertion function to thoroughly test the code.

Use categorical reasoning to consider all the useful cases.

Debug the code under test, if necessary.
*/

// Note: This is a simple (almost correct) implementation of the standard Array method "every()":
// https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/every


// Your assertion function:
function assertEqual(actual, expected, testName) {
  if(actual === expected){ 
  	console.log('passed');
  } else {
  	console.log('FAILED [' +testName + '] Expected "' +expected + '", but got "' +actual + '"');
  }
}

// Code under test:
function every(array, callbackFunction) {
  var doesEveryElementMatch = true;
  array.forEach(function(element) {
    doesEveryElementMatch === doesEveryElementMatch && callbackFunction(element);
    
  });
  // console.log(doesEveryElementMatch);
  return doesEveryElementMatch;
}


// NOTE - every makes use of a callbackFunction. In order to test it properly, you will need to write one. 

function square(n) {
	return n * n;	
}
// Calls to 'assertEqual':

//cases:
array1 = [2, 4, 6];

// assertEqual(every(array1, square),true, 'simple squares');

array2 = [0, -1, -3]
// assertEqual(every(array2, square), true,'zero and negatives');


// console.log(0.1 + 0.2);
// console.log(0.1 + 0.2 === 0.3);

/*

Write an "assertArraysEqual" function from scratch, from memory.

Please DO NOT simply PASTE in from before.

If you have to go back and look at your previously-implemented code once, fine, but come back here and write it from memory.

Then use your assertion function to thoroughly test BOTH the functions in the provided code.

Use categorical reasoning to consider all the useful cases.

Debug the code under test, if necessary.
*/

// Your assertion function:
function assertArraysEqual(actual, expected, testName) {
  var areEqualValues = actual.every(function(item, i){
    return item === expected[i];
  });
  var areEqualLengths = (actual.length === expected.length);
  if(areEqualValues && areEqualLengths) {
    console.log('passed');
  } else {
    console.log('FAILED [' +testName+ '] Expected "' +expected +'", but got "' +actual +'"');
  }
}


// Your code under test:
function map(array, callbackFunction) {
  var newArray = [];
  var pushItems = array.forEach(function(element) {
    return newArray.push(callbackFunction(element));
  });
  // for(var i = 0; i < array.length; i++) {
  // 	newArray.push(callbackFunction(array[i]));
  // }
  return newArray;
}


function cubeAll(n) {
  return n * n * n;
}

// Your calls to 'assertArraysEqual':
var input1 = [0, 1, 2];
var output1 = [0, 1, 8];
var input2 = [-1, -3];
var output2 = [-1, -27];

// console.log(assertArraysEqual(map(input1, cubeAll), output1, 'regular cubes including zero'));

// console.log(assertArraysEqual(map(input2, cubeAll), output2, 'cubesof negatives'));



/*
010 applyAssertObjectsEqual.js 


Write an "assertObjectsEqual" function from scratch, from memory.

Please DO NOT simply PASTE in from before.

If you have to go back and look at your previously-implemented code once, fine, but come back here and write it from memory.

Then use your assertion function to thoroughly test the function provided.

Use categorical reasoning to consider all the useful cases.

Debug the code under test, if necessary.
*/


// Your assertion function:
function assertObjectsEqual(actual, expected, testName) {
	actual = JSON.stringify(actual);
	expected = JSON.stringify(expected);
	if(actual === expected) {
		console.log('passed [' + testName + ']');
	} else {
		console.log('FAILED [' + testName + '] Expected "' +expected+ '", but got "' +actual+ '"');
	}
}

// Your code under test:
function addFullNameProp(obj) {
  var firstName = obj.firstName;
  var lastName = obj.lastName;
  if (firstName && lastName) {
    obj['fullName'] = firstName + ' ' + lastName;
  }

  return obj;
}


// Your calls to 'assertObjectsEqual':

var obj1 = {
	firstName: "Jon", lastName: "Snow"
}

var obj1_out = {
	firstName: "Jon", lastName: "Snow", fullName: "Jon Snow"
}

var obj2 = {
	firstName: "Ned", lastName: "Stark"
}
// var firstName = obj1.firstName;
// var lastName = obj1.lastName;
// obj1['fullName'] = firstName + ' ' + lastName;
// obj1['fullName'] = obj1['firstName'] + ' ' + obj1['lastName'];

// console.log(obj1);


// console.log(assertObjectsEqual(addFullNameProp(obj1), obj1_out, 'simple adding test' ));



/*
----------------------------- 
011 Average Integers
-----------------------------

Use the skeleton provided to write a working implementation.

Notes: 
* Do not leave any functions in the skeleton unused.
* Test that your implementation works.

Specifically -- your code reviewer should be able to just press the [Run] button and see convincing evidence that your code works, because of:
a) the categorical reasoning displayed by your tests
b) the line(s) of output in the console log saying "passed" coming from those tests

*/

// Skeleton
function average(numbers) {
  // process array of numbers
  if(numbers.length > 0){
	  var sum = numbers[0];
	  for (var i = 1; i < numbers.length; i++) {
	  	sum = sum + numbers[i];
	  }
	  return sum / numbers.length;
	}else {
		return 0;
	}
}


function sum(numbers) {
  // process array of numbers
  if(numbers.length > 0){
	  var sum = numbers[0];
	  for (var i = 1; i < numbers.length; i++) {
	  	sum = sum + numbers[i];
	  }
	  return sum;
	} else {
		return 0;
	}
}

function assertArrayCalc(actual, expected, testName){
	if(actual === expected) {
		console.log('passed [' +testName + ']');
	} else {
		console.log('FAILED [' +testName + '] Expected "' +expected + '", but got "' +actual+ '"');
	}
}

var array =   [23,  67,  8,  90,  45,  567,  2,  -56, -2,  0];
var sumArray = 23 + 67 + 8 + 90 + 45 + 567 + 2 - 56   -2 + 0;
// console.log('sumArray', sumArray);
// console.log('array length', array.length);
// console.log('array avg', sumArray/array.length);

// console.log(assertArrayCalc( sum(array), 744,  'testing simple sum with negative numbers' ));
// console.log(assertArrayCalc( average(array), 744/10,  'testing simple average with negative numbers and zero' ));
// console.log(assertArrayCalc( sum(array), average(array) * array.length,  'testing sum = avg * len' ));

// var arrayE = [];
// console.log(assertArrayCalc( sum(arrayE), 0,  'testing sum for empty array' ));
// console.log(assertArrayCalc( average(arrayE), 0,  'testing average for empty array' ));



/*
==================================
012 decorateStudentListWithAges.js
==================================

Convert from a flat class list of names to an object literal decorated with an age for each student.

The ages should be randomly generated for each student, either age 10 or age 11.

Example:
var classList = ["Joe", "Jack", "John", "Fred", "Frank", "Barry", "Larry", "Mary",
"Harry", "Farrell", "Susan", "Monica", "Keira", "Caroline", "Harriet", "Erica",
"Luann", "Cheryl", "Beth", "Rupa", "Linda", "Allison", "Nancy", "Dora"];

var classListWithAges = [{"name":"Joe","age":11},{"name":"Jack","age":10},
{"name":"John","age":11},{"name":"Fred","age":11},{"name":"Frank","age":11},
{"name":"Barry","age":11},{"name":"Larry","age":11},{"name":"Mary","age":11},
{"name":"Harry","age":11},{"name":"Farrell","age":10},{"name":"Susan","age":10},
{"name":"Monica","age":11},{"name":"Keira","age":10},{"name":"Caroline","age":10},
{"name":"Harriet","age":11},{"name":"Erica","age":11},{"name":"Luann","age":10},
{"name":"Cheryl","age":11},{"name":"Beth","age":10},{"name":"Rupa","age":11},
{"name":"Linda","age":10},{"name":"Allison","age":10},{"name":"Nancy","age":10},
{"name":"Dora","age":10}]

Hint: Given that the age for each student is random upon each run, we suggest that your tests check for age values of EITHER 10 or 11.

*/

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function decorateClassListWithAges(classList) {
  return classList.map(function(name){
  	var nameObj = { name: name};
  	nameObj['age'] = getRandomIntInclusive(10,11);
  	return nameObj;
  }); 
}

function assertEqual(actual, expected, testName) {
  if(actual === expected) {
  	console.log('passed [' +testName + ']');
  } else {
  	console.log('FAILED [' +testName+ '] Expected "' +expected + '", but got "' +actual+ '"');
  }
}


function assertWithinRange(low, high, actual, testName){
	var inRange = low <= actual && actual <= high;
	if(inRange){
		console.log('passed [' +testName+ ']');
	} else {
		console.log('FAILED [' +testName+ '] "' +actual + '" not within range ' +low+ ' to ' +high);
	}
}


var classList1 = ["Joe", "Jack", "John", "Fred", "Frank", "Barry", "Larry", "Mary",
"Harry", "Farrell", "Susan", "Monica", "Keira", "Caroline", "Harriet", "Erica",
"Luann", "Cheryl", "Beth", "Rupa", "Linda", "Allison", "Nancy", "Dora"];

var output = decorateClassListWithAges(classList1);

// assertEqual(Array.isArray(output), true, 'returns an array');

// output.forEach(function(student) {
//   assertWithinRange(10, 11, student.age, 'renders all ages either 10 or 11');
// })

/* 
013 - isIsogram.js - An isogram is a word that has no repeating letters, consecutive or non-consecutive. 
Write and test a function that determines whether a string is an isogram. 

Notes:
* Assume your input is only letters.
* Assume the empty string is an isogram. 
* Ignore case.
* Follow the pseudocode exactly!

*/

function isIsogram(text) {
  // add each char to a set
  	text = text.toUpperCase();
 	var charSet = new Set();
 	for (var i = 0; i < text.length; i++ ){
 		charSet.add(text.charAt(i));
 	}

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
  // note: a set drops dup values
  // thus, to see if all the chars were unique,
  // check length of text and the size of the set 
  if(charSet.size === text.length ){
  	return true;
  } else {
  	return false;
  }
}

function assertEqual(actual, expected, testName){
	if(actual === expected) {
		console.log('passed [' +testName +']');
	} else {
		console.log('FAILED [' +testName+ '] Expected "' +expected +'", but got "' +actual+ '"');
	}
}



// assertEqual(isIsogram('abcdefghijklmnopqrstuvwxyz'), true, 'should be an isogram');
// assertEqual(isIsogram('abcdefghijklmnopqrstuvwxyzz'), false, 'should NOT be an isogram');
// assertEqual(isIsogram(''), true, 'should return true for an empty string');
// assertEqual(isIsogram('caCAtcHh'), false, 'should ignore case');


/* 014 findFirstWordWithMostRepeatedChars.js
Flesh out the implementation and test it.

Implementation of WHAT, you say? What's the problem statement???

Well, you should be able to tell what this code is intended to do just from reading the starter "skeleton".

Assuming you find the above statement to be true upon reading the outline, well, then that illustrates the power of good outlining. You don't need a bunch of comments explaining the code. The code is effectively SELF-EXPLANATORY, even at this early, not-fully-implemented stage. This is the level of clarity that you should aim for in your own coding too.

===
*Some notes about the skeleton*

When you create such "skeletons" for your own programs, this is a good full-fledged sample to bear in mind.

Note the mixture of real "stub" code and pseudocode.

The stubs are just a few function names and a few key variable names, not whole for-loops and whatnot.

The pseudocode style we want for this purpose is at the level of precise English. 
It also is not describing for-loops and whatnot. It also is only inside functions. 
Don't pseudocode functions, just write the functions as empty stubs. 
That saves you precious time later, with less rewriting.

*/
// console.log(('word').split(""));


function findMaxRepeatCountInWord(word) {
  // Break up individual words into individual letters.
  	word = word.toUpperCase();
  	var arr = word.split("");
	// Count the instances of each letter
  	if(arr.length === 0){ // empty array
  		return 0;
  	}
  	var obj = new Object();
  	for (var i = 0; i < arr.length; i++){
  		if(obj[arr[i]]=== undefined){ // char appeared for the first time
  			obj[arr[i]] = 1;
  		} else {
  			obj[arr[i]] += 1;
  		}
  	}
  	var maxCount = 0;
  	// Iterate all the counts and find the highest
  	for (var word in obj){
  		if(obj[word] > maxCount){
  			maxCount = obj[word];
  		}
  	}
  	// Return this word's max repeat count
  	return maxCount;
}

// console.log("3",findMaxRepeatCountInWord("aabcdefff"));




function findFirstWordWithMostRepeatedChars(text) {
  var maxRepeatCountOverall = 0;
  var wordWithMaxRepeatCount = '';
  // Break up input text into words (space-delimited).
  var textArr = text.split(" ");
  // For each word...
  textArr.forEach(function(word){
      var repeatCountForWord = findMaxRepeatCountInWord(word);
      //  If that max repeat count is higher than the overall max repeat count, then
      if(repeatCountForWord > maxRepeatCountOverall){
      	//    update maxRepeatCountOverall
      	maxRepeatCountOverall = repeatCountForWord; 
      	//    update wordWithMaxRepeatCount
      	wordWithMaxRepeatCount = word;
      }
  });
  return wordWithMaxRepeatCount;
}

// console.log("3", findFirstWordWithMostRepeatedChars('aa bb cc ddd'));

function assertEqual(actual, expected, testName){
	if(actual === expected){
		console.log('passed [' +testName+']');
	} else {
		console.log('FAILED [' +testName+ '] Expected "' +expected+ '", but got "' +actual+ '"');
	}
}

// assertEqual(findFirstWordWithMostRepeatedChars(""), '', 'empty string');
// assertEqual(findFirstWordWithMostRepeatedChars("aa bb cc ddd eee"), 'ddd', 'picks first largest rep');
// assertEqual(findFirstWordWithMostRepeatedChars("a bb ccc dddd fffff gggggggggg"), 'gggggggggg', 'only one largest');
// assertEqual(findMaxRepeatCountInWord('ooopeiaelskf'), 3, 'finds max repeated letters');
// assertEqual(findFirstWordWithMostRepeatedChars('Limit your space'), 'Limit', 'finds max repeats word when no other word has repeats');
// assertEqual(findFirstWordWithMostRepeatedChars('Limit your spaaace'), 'spaaace', 'finds max repeats word when other words have repeats');
// assertEqual(findFirstWordWithMostRepeatedChars('Limit your spaces'), 'Limit', 'finds 1st word with max repeats when there are ties');



/*
Problem statement

Accept an array of numbers that represent a phone number.
E.g., [6, 5, 0, 8, 3, 5, 9, 1, 7, 2]
Return as a string in this format: '(650) 835-9172'.

A poor implementation

function renderPhoneNumber(numbers){
  return '(' + numbers[0] + numbers[1] + numbers[2] + ') '
    + numbers[3] + numbers[4] + numbers[5] + '-' 
    + numbers[6] + numbers[7] + numbers[8] + numbers[9];
}

What you should do instead

Read the object-oriented skeleton. 

After you understand the flow of processing that it sketches out, fill in the implementation.

Notes:
* Do not leave any methods unused.

*/

function PhoneNumberFormatter(numbers) {
  this.numbers = numbers;
}

PhoneNumberFormatter.prototype.render = function() {
  var string = '';
  // your code here
  string += this.parenthesize(this.getAreaCode());
  string += ' ';
  string += this.getExchangeCode();
  string += '-';
  string += this.getLineNumber();
  return string;
};

PhoneNumberFormatter.prototype.getAreaCode = function() {
  // your code here
  return '' + this.slice(0, 3);

};

PhoneNumberFormatter.prototype.getExchangeCode = function() {
  // your code here
  return '' + this.slice(3, 6);
};

PhoneNumberFormatter.prototype.getLineNumber = function() {
  // your code here
  return '' + this.slice(6, 10);
};

PhoneNumberFormatter.prototype.parenthesize = function(string) {
  return '(' + string + ')';
};

PhoneNumberFormatter.prototype.slice = function(start, end) {
  return this.numbers.slice(start, end).join('');
};


function assertEqual(actual, expected, testName){
	if(actual === expected){
		console.log('passed [' +testName+ ']');
	} else {
		console.log('FAILED [' +testName+ '] Expected "' +expected+ '", but got "' +actual+ '"');
	}
}


// var formatter = new PhoneNumberFormatter([6, 5, 0, 8, 3, 5, 9, 1, 7, 2]);
// assertEqual(formatter.render(), '(650) 835-9172', 'test render method');



/* 
Find the longest single-word palindrome within a phrase.
The phrase will only contain letters (no symbols, punctuation, or numbers).
Your palindrome detection should be case-insensitive.
If there are multiple longest palindromes of equal length, return the last one.
*/ 
function findLongestPalindrome(sentence) {
  
  // split sentence into words
  var wordsArray = new Array();
  wordsArray = sentence.split(" ");

  // iterate words and collect the palindromes
  var palinArray = wordsArray.filter(function(word){
  	  	return isPalindrome(word) === true;
  });
  

  // sort the list of palindromes by word length
  palinArray = palinArray.sort(sortAscendingByLength);
  
  // return the largest item in the sorted list
  
  return palinArray[palinArray.length - 1];
  }


function reverseString(string) {
	var splitStr = string.split("");
	var reverseArr = splitStr.reverse();
	var joinArr = reverseArr.join('');
	return joinArr;
}

function isPalindrome(word) {
  // hint: you can detect palindromes by comparing a string to its reverse
  word = word.toLowerCase();
  if(word === reverseString(word)){
  	return true;
  } else {
  	return false;
  }
}

function sortAscendingByLength(a, b) { //compare function within the sort method
  if (a.length > b.length) {
    return 1; // greater than zero: sort 'b' to a lower index than 'a'
  } else if (a.length < b.length) {
    return -1; // less than zero: sort 'a to an index lower tha 'b'
  }
  return 0; // leave a and b unchanged
}

function assertEqual(actual, expected, testName){
  if(actual === expected) {
    console.log('passed [' +testName + ']');
  } else {
  	console.log('FAILED [' +testName+ '] Expected "' +expected+ '", but got "' +actual+ '"'); 
  }
}



// assertEqual(findLongestPalindrome("A sentence to test redivider noon level radar"), "redivider", 'simple test: returns largest palindrome');
// assertEqual(findLongestPalindrome("A sentence to test noon level radar"), "radar", 'should return largest with tie');
// assertEqual(findLongestPalindrome("A sentence to test Noon Level rAdar"), "rAdar", 'is case-insensitive');




// var x =[1, 3, 5, 8, 2, -5, -8];
// x[0] = x[6];
// x[6] = x[0];
// console.log(x);

// for (var i = 20; i!=10; i--){console.log(i);}

// function a(b,c){
// 	return b+c;
// }
// // console.log(a(1,1));

// for(var i = 9;i<=20; i++){
// 	if (i== 10) {
// 		break;
// 	}else{
// 		console.log('hello');
// 	}
// 	console.log(i);
// }

// var x = 'coding';
// var y = 'dojo';
// for (var i = 0; i <=5;i++){
// 	for (var x = 0; x <=6; x++){
			
// 		}
// if (i!= 4) {
// 	console.log('c')
// }
// }

		
// var num = "";
// var x = 5;
// while(x < 10){
// 	console.log(x, num);
// 	num += x;
// 	x++;
// }	

// console.log(num);

// var count = 1;
// while(count<5){
// 	console.log('dojo');
// 	count ++;
// }

// var x = 1;
// var y = 48;
// while(x<100){
// 	if(x == y){
// 		break;
// 	}
// 	x++
// }
// console.log(x);

// var x = 7;
// var mess = 'boom';
// while(x>mess.length){
// 	console.log(mess+x);
// 	x--;
// }


/*
You have a fashion catalog, an inventory of items from various high-fashion designers. 
Each designer has a lineup of shoes. Each shoe has a name and a price.

It looks like this:
var currentInventory = [
  {
    name: 'Brunello Cucinelli',
    shoes: [
      {name: 'tasselled black low-top lace-up', price: 1000},
      {name: 'tasselled green low-top lace-up', price: 1100},
      {name: 'plain beige suede moccasin', price: 950},
      {name: 'plain olive suede moccasin', price: 1050}
    ]
  },
  {
    name: 'Gucci',
    shoes: [
      {name: 'red leather laced sneakers', price: 800},
      {name: 'black leather laced sneakers', price: 900}
    ]
  }
];

Look up all the shoes across all the designers and list them out in a flat list:{designer name} - {shoe name} - {price}{designer name} - {shoe name} - {price}
E.g.,
Brunello Cucinelli, tasselled black low-top lace-up, 1000
Brunello Cucinelli, tasselled green low-top lace-up, 1100
...

// ^ this implies that the return value is a string, with each new line separated by a newline symbol ('\n')

Write your own unit tests.
*/ 

function flatList(arr){
	arr.forEach(function(element){
      element = JSON.stringify(element);
      console.log(element);
	});

}




var currentInventory = [
  {
    name: 'Brunello Cucinelli',
    shoes: [
      {name: 'tasselled black low-top lace-up', price: 1000},
      {name: 'tasselled green low-top lace-up', price: 1100},
      {name: 'plain beige suede moccasin', price: 950},
      {name: 'plain olive suede moccasin', price: 1050}
    ]
  },
  {
    name: 'Gucci',
    shoes: [
      {name: 'red leather laced sneakers', price: 800},
      {name: 'black leather laced sneakers', price: 900}
    ]
  }
];

flatList(currentInventory);

// console.log(typeof currentInventory);


// for (var designer in currentInventory){
// 	// console.log(currentInventory[designer]);
// 	for (var prop in currentInventory[designer]) {
// 		console.log(currentInventory.values);
// 	}
// }

// for ( let designer of Object.values(currentInventory)) {
// 	console.log(designer);
// }

// for (let [key,value] of Object.entries(currentInventory)) {
// 	console.log(key + ':' + value);
// }

// console.log(Object.values(currentInventory));

// for (var designer in Object.values(currentInventory)){
// 	designer = JSON.stringify(designer);
// 	console.log(designer);
// }



