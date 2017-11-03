

// First, declare a variable named myArray and assign it to an empty array.
var myArray = new Array();
// console.log("empty array", myArray);

// Great! Now populate myArray with two strings. Put your full name in the first string, and your Skype handle in the second.

myArray.push("Marilene Soares da Costa", "lene626dac");
// console.log(myArray);

// Next, declare a function named cutName. It should expect a parameter name.
// cutName should return an array by breaking up the input string into individual words.
// Example: cutName("Douglas Crockford") should return ["Douglas", "Crockford"]
// Example: cutName("John B. Smith") should return ["John", "B.", "Smith"]

function cutName(name){
	return splitName = name.split(" ");
	}

// console.log(cutName("John B. Smith"));


// Declare a new variable named myInfo and assign it to an empty object literal.
// Add the following three key-value pairs to myInfo:
// Key: fullName
// Value: The result of calling cutName on the name string within myArray.
// Key: skype
// Value: The Skype handle within myArray.
// Key: github
// Value: If you have a github handle, enter it here as a string. If not, set this to null instead.

var myInfo = new Object();

myInfo = {
	"fullName": cutName(myArray[0]),
	"skype": myArray[1],
	"github": "github.com/MarileneSoaresDaCosta"
};

// console.log( myInfo.fullName + " " + myInfo.skype + " " +myInfo.github);

function isOldEnoughToDrink(age) {
  // your code here
  /* START SOLUTION */
  if(age >= 21){
    return true;
  } else{
    return false;
  }
}
// console.log("23", isOldEnoughToDrink(23));
// console.log("16", isOldEnoughToDrink(16));

function checkAge(name, age) {
  // your code here
  var goHome = "Go home, ";
  var welcome = "Welcome, ";
  var excl = "!";
  if (age >= 21){
    return welcome.concat(name, excl); 
      } else {
        return goHome.concat(name, excl);
      }
}

var output = checkAge('Adrian', 22);
// console.log(output); // --> 'Welcome, Adrian!'


var str1 = "lala";
var str2 = "bobo";
var res12= str1.concat(str2);
// console.log(typeof(res12), res12);

/*
Write a function called "isEven".
Given a number, "isEven" returns whether it is even.
var output = isEven(11);
console.log(output); // --> false
*/

function isEven(num) {
  // your code here
  if( !isNaN(num) && num%2 == 0){
     return true;
     } else {
       return false;
     }
}
var output = isEven(11);
// console.log(output); // --> false


/*
Write a function called "areBothOdd".
Given 2 numbers, "areBothOdd" returns whether or not both of the given numbers are odd.
var output = areBothOdd(1, 3);
console.log(output); // --> true
*/

function areBothOdd(num1, num2) {
  // your code here
  if(!isNaN(num1) && num1%2 != 0){
    if(!isNaN(num2) && num2%2 != 0){return true;} 
      else {return false;}
  } else { return false;}
}

var output = areBothOdd(1, 3);
// console.log(output); // --> true

/*
Write a function called "isEitherEven".
Given two numbers, "isEitherEven" returns whether or not either one of the given numbers is even.
var output = isEitherEven(1, 4);
console.log(output); // --> true
*/

function isEitherEven(num1, num2) {
  // your code here
  if(!isNaN(num1) && num1%2 == 0) {
    return true;
  } else{
    if (!isNaN(num2) && num2%2 == 0) {
    return true;
    } 
  } return false;
  }


/*
Write a function called "addFullNameProperty".
Given an object that has a "firstName" property and a "lastName" property, "addFullNameProperty" returns a "fullName" property whose value is a string with the first name and last name separated by a space.
var person = {
  firstName: 'Jade',
  lastName: 'Smith'
};
addFullNameProperty(person);
console.log(person.fullName); // --> 'Jade Smith'
*/

function addFullNameProperty(obj) {
  // your code here
  //var spc = " ";
  obj['fullName'] = obj[firstName].concat(" ", obj[lastName]);
  return obj;
}


/*
Write a function called "addFullNameProperty".
Given an object that has a "firstName" property and a "lastName" property, "addFullNameProperty" returns a "fullName" property whose value is a string with the first name and last name separated by a space.
var person = {
  firstName: 'Jade',
  lastName: 'Smith'
};
addFullNameProperty(person);
console.log(person.fullName); // --> 'Jade Smith'
*/

function addFullNameProperty(obj) {
  // your code here
  return obj["fullName"] = obj["firstName"].concat(" ", obj["lastName"]);
}



function computeTripledAreaOfARectangle(length, width) {
  // your code here
  if(!isNaN(length) && !isNaN(width)){
    return ((length * width) / 2);
  }
}

var output = computeTripledAreaOfARectangle(2, 4);
// console.log(output); // --> 24





/*
Write a function called "computePower".
Given a number and an exponent, "computePower" returns the given number, raised to the given exponent. 
var output = computePower(2, 3);
console.log(output); // --> 8

var res = 1
      for (i = 1; i <= exponent; i++){
        res = res * num;
        console.log (res);
        i++;


*/

function computePower(num, exponent) {
  // your code here
  if(!isNaN(num) && !isNaN(exponent)){
 	var result = 1;
 	for(var i = 0; i < exponent; i++){
 		result *= num;
 	}   
 	return result;
  }
}


var output = computePower(2, 3);
// console.log("power", output); // --> 8


/*
Write a function called "computeSquareRoot".
Given a number, "computeSquareRoot" returns its square root.
var output = computeSquareRoot(9);
console.log(output); // --> 3

Do not use Math.sqrt(); for this problem. Instead, use this iterative way of solving the problem:

https://www.deltacollege.edu/dept/basicmath/Babylonian.htm
*/
function computeSquareRoot(num) {
  // your code here
  var guess = num/2;
  // var error = 0.001;
  while(guess*guess != num){
    guess = (guess + num / guess) / 2;
  }
  return guess;
}


function countCharacter(str, char) {
  // your code here
  var counter = 0;
  for(i=0; i<str.length; i++) {
    if(str.charAt(i) == char){
      counter += 1;}
  }
    return counter;
}


var output = countCharacter('I am a hacker', 'a');
// console.log(output); // --> 3


var output = countCharacter('xxx', 'a');
// console.log(output); // --> 3




function getAllLetters(str) {
  // your code here
  return str.split("");
}
var output = getAllLetters('Radagast');
// console.log("getAllLetters", output); // --> ['R', 'a', 'd', 'a', 'g', 'a', 's', 't']



/*
Write a function called "countWords".

Given a string, "countWords" returns an object where each key is a word in the given string, with its value being how many times that word appeared in th given  string. 

Notes:
* If given an empty string, it should return an empty object.

var output = countWords('ask a bunch get a bunch'); 
console.log(output); // --> {ask: 1, a: 2, bunch: 2, get: 1}
*/

function countWords(str) {
  // your code here
    var arr = str.split(" ");
    // console.log("split array", arr);
    var obj = new Object();
    if(str.length == 0){return obj;}
    for (var i=0; i<arr.length; i++){
    	if(obj[arr[i]] === undefined) {
    		obj[arr[i]] = 1;
    	} else {
    		obj[arr[i]] += 1;
    	}
    } 
    return obj;
}



var output = countWords('ask a bunch get a bunch'); 
// console.log(output); // --> {ask: 1, a: 2, bunch: 2, get: 1}


str = "hello hello hello this is a list of different words that it is";
var arrt = str.split(" "),
    obj = {};

for (var x=0; x<arrt.length; x++){
  if(obj[arrt[x]]===undefined){
    obj[arrt[x]]=1;
  }else{
    obj[arrt[x]]++;
  }
}
// console.log('test', obj);



/*
Write a function called "extend".

Given two objects, "extend" adds properties from the 2nd object to the 1st object.

Notes:
* Add any keys that are not in the 1st object.
* If the 1st object already has a given key, ignore it (do not overwrite the property value).
* Do not modify the 2nd object at all.

var obj1 = {
  a: 1,
  b: 2
};
var obj2 = {
  b: 4,
  c: 3
};

extend(obj1, obj2);

console.log(obj1); // --> {a: 1, b: 2, c: 3}
console.log(obj2); // --> {b: 4, c: 3}

for ( var prop in obj2 ) {
    if( !(prop in obj1) ){
      obj1[prop] = obj2[prop];
    }  
  }
  return obj1;
*/

var obj1 = {
  a: 1,
  b: 2
};
var obj2 = {
  b: 4,
  c: 3
};


function extend(obj1, obj2) {
  // your code here
  for ( var prop in obj2 ) {
    if( !(prop in obj1) ){
      obj1[prop] = obj2[prop];
    }  
  }
  return obj1;
}

extend(obj1, obj2);

// console.log("obj1", obj1); // --> {a: 1, b: 2, c: 3}
// console.log("obj2", obj2); // --> {b: 4, c: 3}

/*
Write a function called "removeArrayValues".

Given an object, "removeArrayValues" removes any properties whose values are arrays.
*/

var obj = {
  a: [1, 3, 4],
  b: 2,
  c: ['hi', 'there']
}
// console.log("array before function ", obj);
removeArrayValues(obj);
// console.log(obj); // --> { b: 2 }


function removeArrayValues(obj) {
  // your code here
  for( var prop in obj) {
    if ( Array.isArray(obj[prop]) ) {
      delete obj[prop];
    }
  }
  return obj;
}


/*
Write a function called "removeStringValues".

Given an object, "removeStringValues" removes any properties on the given object whose values are strings.

*/

function removeStringValues(obj) {
  // your code here
  for ( var prop in obj) {
    if ( typeof obj[prop] == 'string') {
      delete obj[prop];
    }
  }
  return obj;
}

var obj = {
  name: 'Sam',
  age: 20
}
// console.log('obj before fn', obj);
removeStringValues(obj);
// console.log(obj); // { age: 20 }
// console.log(typeof obj['name']);

// console.log(typeof obj['name'] == 'string' );


/*
Write a function called "convertDoubleSpaceToSingle".

Given a string, "convertDoubleSpaceToSingle" returns the passed in string, with all the double spaces converted to single spaces.

var output = convertDoubleSpaceToSingle("string  with  double  spaces");
console.log(output); // --> "string with double spaces"

Notes:
* In order to do this problem, you should be familiar with "String.split", and "Array.join".
*/

function convertDoubleSpaceToSingle(str) {
  // your code here
  var arr = new Array();
  var out;
  arr = str.split("  ");
  // console.log(arr);
  out = arr.join(" ");
  return out;
  // console.log(out, typeof out);
}




var output = convertDoubleSpaceToSingle("string  with  double  spaces");
// console.log(output); // --> "string with double spaces"


/*
Write a function called "addToFrontOfNew".

Given an array and an element, "addToFrontOfNew" returns a new array containing all the elements of the given array, with the given element added to the front.

Important: It should be a NEW array instance, not the original array instance.

var input = [1, 2];
var output = addToFrontOfNew(input, 3);
console.log(output); // --> [3, 1, 2];
console.log(input); --> [1, 2]
*/

function addToFrontOfNew(arr, element) {
  // your code here

  var new_arr = arr.slice(0);

  new_arr.unshift(element);
  return new_arr;
}
var input = [1, 2];
var output = addToFrontOfNew(input, 3);
// console.log(output); // --> [3, 1, 2];
// console.log(input); //--> [1, 2]


/*
Write a function called "getAllElementsButNth".

Given an array and an index, "getAllElementsButNth" returns an array with all the elements but the nth.

var output = getAllElementsButNth(['a', 'b', 'c'], 1);
console.log(output); // --> ['a', 'c']
*/

function getAllElementsButNth(array, n) {
  // your code here
  array.splice(n, 1);
  return array;

}


/*
Write a function called "getIndexOf".

Given a character and a string, "getIndexOf" returns the first position of the given character in the given string.

Notes:
* Strings are zero indexed, meaning the first character in a string is at position 0.
* When a string contains more than one occurrence of a character, it should return the index of its first occurrence.
* If the character does not exist in the string, it should return -1.
* Do not use the native indexOf function in your implementation.

var output = getIndexOf('a', 'I am a hacker');
console.log(output); // --> 2
*/

function getIndexOf(char, str) {
  // your code here
  for ( var i = 0 ; i < str.length; i++) {
    if (char == str.charAt(i) ) {
        return i;
        }    
  }
  return -1;
}



/*
Write a function called "findMinLengthOfThreeWords".

Given 3 words, "findMinLengthOfThreeWords" returns the length of the shortest word.

var output = findMinLengthOfThreeWords('a', 'be', 'see');
console.log(output); // --> 1
*/

function findMinLengthOfThreeWords(word1, word2, word3) {
  // your code here
  var arr = [word1.length, word2.length, word3.length];
  return Math.min.apply(null,arr);
  
}



/*
Write a function called "getElementsThatEqual10AtProperty".

Given an object and a key, "getElementsThatEqual10AtProperty" returns an array containing all the elements of the array located at the given key that are equal to ten.

Notes:
* If the array is empty, it should return an empty array.
* If the array contains no elements are equal to 10, it should return an empty array.
* If the property at the given key is not an array, it should return an empty array.
* If there is no property at the key, it should return an empty array.

var obj = {
  key: [1000, 10, 50, 10]
};
var output = getElementsThatEqual10AtProperty(obj, 'key');
console.log(output); // --> [10, 10]
*/


function getElementsThatEqual10AtProperty(obj, key) {
  // your code here
  var res = new Array();
  // console.log(res);
  if( Array.isArray(obj[key] ) ) {
  	for (var i = 0; i < obj[key].length; i++) {
    if( obj[key][i] == 10){
      res.push(10);
       }
  }

  }
  
  return res;
  
}
var obj = {
  	key: [1000, 10, 50, 10]
	};


var output = getElementsThatEqual10AtProperty(obj, 'key');
// console.log(output); // --> [10, 10]



/*

Write a function called "select".

Given an array and an object, "select" returns a new object whose properties are those in the given object AND whose keys are present in the given array. 

Notes:
* If keys are present in the given array, but are not in the given object, it should ignore them. 
* It does not modify the passed in object.


*/

function select(arr, obj) {
  // your code here
  var new_obj = {};
  // console.log(new_obj);
  for (var prop in obj) {
  	// console.log("prop in loop: ", prop);
    if ( arr.includes(prop) ){
    	// console.log("prop ", prop, " ", "obj[prop] ", obj[prop] );
        new_obj[prop] = obj[prop];
        // console.log(new_obj);
        }
  }
  // console.log("just bef end",new_obj);
  return new_obj;
  
}



var arr = ['a', 'c', 'e'];
var obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
};
var output = select(arr, obj);

// console.log("after");
// console.log("fn select", output); // --> { a: 1, c: 3 }



/*
Write a function called "getElementsLessThan100AtProperty".

Given an object and a key, "getElementsLessThan100AtProperty" returns an array containing all the elements of the array located at the given key that are less than 100.

Notes:
* If the array is empty, it should return an empty array.
* If the array contains no elements less than 100, it should return an empty array.
* If the property at the given key is not an array, it should return an empty array.
* If there is no property at the key, it should return an empty array.

var obj = {
  key: [1000, 20, 50, 500]
};
var output = getElementsLessThan100AtProperty(obj, 'key');
console.log(output); // --> [20, 50]

*/
function getElementsLessThan100AtProperty(obj, key) {
  // your code here
  var res = new Array();
  if(Array.isArray(obj[key] ) ){
  	for ( var i = 0; i < obj[key].length; i++ ){
  		if (obj[key][i] < 100) {
  			res.push(obj[key][i]);
  		}
  	}
  }
  return res;
}


var obj = {
  key: [1000, 20, 50, 500]
};
var output = getElementsLessThan100AtProperty(obj, 'key');
// console.log(output); // --> [20, 50]


/*
Write a function called "countAllCharacters".

Given a string, "countAllCharacters" returns an object where each key is a character in the given string. The value of each key should be how many times each character appeared in the given string.

Notes:
* If given an empty string, countAllCharacters should return an empty object.

var output = countAllCharacters('banana');
console.log(output); // --> {b: 1, a: 3, n: 2}
*/


function countAllCharacters(str) {
  // your code here
  var obj = {};

  if (str.length == 0) {
  	return obj;
  }
  for ( var i = 0; i < str.length; i++){
  	if( obj[str.charAt(i)] === undefined) {
  		obj[str.charAt(i)] = 1;
  	} else {
  		obj[str.charAt(i)] += 1;
  	}
  }

  return obj;
}

var output = countAllCharacters('banana');
// console.log(output); // --> {b: 1, a: 3, n: 2}


function removeElement(array, discarder) {
  // your code here
  var newArr = new Array();
  if (array.length == 0) {return array;}

  for ( var i = 0; i < array.length; i++) {
    if ( array[i] != discarder) {
      newArr.push(array[i]);
      // console.log(newArr);
        }
  }
  return newArr;
}

var output = removeElement([1, 2, 3, 2, 1], 2);
// console.log(output); // --> [1, 3, 1]


var output = removeElement([2, 2, 2, 2, 2], 2);
// console.log(output); // --> [1, 3, 1]

/*
Write a function called "getFirstElementOfProperty".

Given an object and a key, "getFirstElementOfProperty" returns the first element of the array located at the given key. 

Notes:
* If the array is empty, it should return undefined.
* If the property at the given key is not an array, it should return undefined.
* If there is no property at the key, it should return undefined.

*/


function getFirstElementOfProperty(obj, key) {
  // your code here
  if( !Array.isArray(obj[key])){return undefined;}
  else { return obj[key][0];}
}


var obj = {
  key: [1, 2, 4]
};
var output = getFirstElementOfProperty(obj, 'key');
// console.log(output); // --> 1



/*
Write a function called "getNthElementOfProperty".

Given an object and a key, "getNthElementOfProperty" returns the nth element of an array located at the given key.

Notes:
* If the array is empty, it should return undefined.
* If n is out of range, it should return undefined.
* If the property at the given key is not an array, it should return undefined.
* If there is no property at the key, it should return undefined.

var obj = {
  key: [1, 2, 6]
};
var output = getNthElementOfProperty(obj, 'key', 1);
console.log(output); // --> 2
*/

function getNthElementOfProperty(obj, key, n) {
  // your code here
  // if n > array's length
  if( Array.isArray( obj[key]) 
      && obj[key].length > 0 
      && n < obj[key].length ){
        return obj[key][n];   
  } else {
    return undefined;
  }

}


var obj = {
  key: [1, 2, 6]
};
var output = getNthElementOfProperty(obj, 'key', 1);
// console.log(output); // --> 2

var myArray = [1, 2, 3]
// console.log(myArray.slice(-1));


/*
Write a function called "computeAverageOfNumbers".

Given an array of numbers, "computeAverageOfNumbers" returns their average. 

Notes:
* If given an empty array, it should return 0.

var input = [1,2,3,4,5];
var output = computeAverageOfNumbers(input);
console.log(output); // --> 3
*/

function computeAverageOfNumbers(nums) {
  // your code here
	if(nums.length == 0){return 0;} 

    if (nums.length == 1) {return nums[0];}
    

    else {
    	var sum = nums[0]
      for (var i = 1; i < nums.length; i++){
        var sum = sum + nums[i];
        // console.log("i", i, "sum", sum);
      	
      }
      // console.log(sum);
      return sum / nums.length;
    }
}


var input = [1,2,3,4,5];
var output = computeAverageOfNumbers(input);
// console.log(output); // --> 3

/*
Write a function called "getSquaredElementsAtProperty".

Given an object and a key, "getSquaredElementsAtProperty" returns an array containing all the squared elements of the array located at the given key. 

Notes:
* If the array is empty, it should return an empty array.
* If the property at the given key is not an array, it should return an empty array.
* If there is no property at the key, it should return an empty array.

var obj = {
  key: [2, 1, 5]
};
var output = getSquaredElementsAtProperty(obj, 'key');
console.log(output); // --> [4, 1, 25]
*/

function getSquaredElementsAtProperty(obj, key) {
  // your code here
  var arr = new Array();
  if( Array.isArray(obj[key]) && obj[key].length > 0) {
    for ( var i = 0; i < obj[key].length; i++) {
            var t = Math.pow(obj[key][i], 2);
            arr.push(t);            
            }      
    }
  return arr;
}


var obj = {
  key: [2, 1, 5]
};
var output = getSquaredElementsAtProperty(obj, 'key');
// console.log(output); // --> [4, 1, 25]


/*
Write a function called "getOddElementsAtProperty".

Given an object and a key, "getOddElementsAtProperty" returns an array containing all the odd elements of the array located at the given key. 

Notes:
* If the array is empty, it should return an empty array.
* If it contains no odd elements, it should return an empty array.
* If the property at the given key is not an array, it should return an empty array.
* If there is no property at the key, it should return an empty array.

var obj = {
  key: [1, 2, 3, 4, 5]
};
var output = getOddElementsAtProperty(obj, 'key');
console.log(output); // --> [1, 3, 5]
*/

function getOddElementsAtProperty(obj, key) {
  // your code here
  var arr = new Array();
  if ( Array.isArray(obj[key]) && obj[key].length > 0) {
    for (var i = 0; i < obj[key].length; i++ ) {
      if( obj[key][i] % 2 != 0 ) {
         arr.push(obj[key][i]);
         }
    }
  }
  return arr;
}


var obj = {
  key: [1, 2, 3, 4, 5]
};
var output = getOddElementsAtProperty(obj, 'key');
// console.log(output); // --> [1, 3, 5]


var objT = {
  empty: [],
  str: "string",
};

var output = getOddElementsAtProperty(objT, 'empty');
// console.log("empty", output); // --> []


var output = getOddElementsAtProperty(obj, 'str');
// console.log("str",output); // --> []


var output = getOddElementsAtProperty(obj, 'no one');
// console.log("no one",output); // --> []


/*
Write a function called "getSmallestElementAtProperty".

Given an object and a key, "getSmallestElementAtProperty" returns the smallest element in the array located at the given key. 

Notes:
* If the array is empty, it should return undefined.
* If the property at the given key is not an array, it should return undefined. 
* If there is no property at the key, it should return undefined.

var obj = {
  key: [2, 1, 5]
};
var output = getSmallestElementAtProperty(obj, 'key');
console.log(output); // --> 1
*/

function getSmallestElementAtProperty(obj, key) {
  // your code here
  if( !Array.isArray(obj[key]) || obj[key].length == 0 ){
     return undefined;
     } 
  var smallestElem = obj[key][0];
  for (var i = 1; i < obj[key].length; i++) {
    if(obj[key][i] < smallestElem) {
       smallestElem = obj[key][i];
       }
  }
  return smallestElem;
}

/*
Write a function called "getAllButLastElementOfProperty".

Given an object and a key, "getAllButLastElementOfProperty" returns an array containing all but the last element of the array located at the given key.

Notes:
* If the array is empty, it should return an empty array.
* If the property at the given key is not an array, it return an empty array.
* If there is no property at the key, it should return an empty array. 

*/

function getAllButLastElementOfProperty(obj, key) {
  // your code here
  var arr = new Array();
  if( Array.isArray(obj[key]) && obj[key].length > 1) {
    obj[key].splice(obj[key].length - 1, 1);
    return obj[key];
     }
  else {return arr;}
}

var obj = {
  key: [1, 2, 3]
};
var output = getAllButLastElementOfProperty(obj, 'key');
// console.log(output); // --> [1,2]


/*
Write a function called "squareElements".

Given a array of numbers, "squareElements" should return a new array where each element is the square of the element of the given array.

var output = squareElements([1, 2, 3]);
console.log(output); // --> [1, 4, 9]
*/

function squareElements(arr) {
  // your code here
  var res_arr = new Array();
  if(arr.length == 0){
     return res_arr;
     } else {
       for ( var i = 0; i < arr.length; i++) {
         res_arr.push(Math.pow(arr[i], 2));

         
       }
       return res_arr;
     }
}

var output = squareElements([1, 2, 3]);
// console.log(output); // --> [1, 4, 9]

/*
Write a function called "getStringLength".

Given a string, "getStringLength" returns the length of the given string.

Notes:
* Do NOT use any native 'length' methods.
* You might consider using 'substring' or 'slice' as alternatives.

*/



function getStringLength(string) {
  // your code here
  var counter = 0;
  while (string.substring(counter, counter+1) != ""  ){
    counter = counter + 1;
  }
  return counter;
}


// testing for joining array of arrays into flattened array

// var output = getStringLength('hello');
// console.log(output); // --> 5
// testing to see what is returned when substring goes beyond the end of a string
// var str = "hi";
// console.log(typeof str.substring(0, 1));
// console.log(typeof str.substring(1, 2));
// console.log(typeof str.substring(2, 3));

var ini = ([[1, 4], [true, false], ['x', 'y']]);
var res = [].concat(ini);
// console.log(res);

// console.log("second concat", out.concat(ini[1]));
// console.log("third concat", out.concat(ini[2]));
var res2 = new Array();
for (var i = 0; i < ini.length; i++) {
  if (Array.isArray(ini[i]) ) {
    for ( var j = 0; j < ini[i].length; j++) {
      res2.push(ini[i][j]);
    }
  }
}
// console.log(res2);

/*
Write a function called "joinArrayOfArrays".

Given an array of arrays, "joinArrayOfArrays" returns a single array containing the elements of the nested arrays.

var output = joinArrayOfArrays([[1, 4], [true, false], ['x', 'y']]);
console.log(output); // --> [1, 4, true, false, 'x', 'y']

You should be familiar with the "concat" method for this problem.
*/

function joinArrayOfArrays(arr) {
  // your code here
  var res2 = new Array();

  for (var i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i]) ) {
      for ( var j = 0; j < arr[i].length; j++) {
        res2.push(arr[i][j]);
      }
    }
    else { // elem is not an array
      res2.push(arr[i]);
    }
  }
 return res2;
}

  
var output = joinArrayOfArrays([ 'a', [1, 4], [true, false], ['x', 'y']]);
// console.log("a", output); // --> ['a', 1, 4, true, false, 'x', 'y']


/*
Write a function called "sumDigits".

Given a number, "sumDigits" returns the sum of all its digits.

var output = sumDigits(1148);
console.log(output); // --> 14

If the number is negative, the first digit should count as negative.


Notes:
* In order to use some of the methods that will be most helpful to you, you will most likely want to do some string to number conversion and vice versa.
* Be sure to familiarize yourself with the "toString" method, as well as the "Number" function.

*/

function sumDigits(num) {
  // your code here
  // console.log(num.toString());

  return 1;
}


var output = sumDigits(-316);
// console.log(output); // --> 4

// testing for loop
var i = 2;
// for (i; i< 5; i++) {console.log(i);}

var n = -316;
// console.log("n",n);

var str = n.toString();
// console.log("n to str", str);

var back = parseInt(str);
// console.log("back", back);
// console.log(back + 1);


var s2 = "23";

var n2 = Number(s2);
// console.log(n2 + 2);




/*
Write a function called "sumDigits".

Given a number, "sumDigits" returns the sum of all its digits.

var output = sumDigits(1148);
console.log(output); // --> 14

If the number is negative, the first digit should count as negative.

var output = sumDigits(-316);
console.log(output); // --> 4

Notes:
* In order to use some of the methods that will be most helpful to you, you will most likely want to do some string to number conversion and vice versa.
* Be sure to familiarize yourself with the "toString" method, as well as the "Number" function.

*/

function sumDigits(num) {
  var str = num.toString();
  if(str.charAt(0) == "-" ) {
    var sum = (-1) * Number(str.charAt(1));
    var i = 2;
  } else {
    var sum = Number(str.charAt(0));
    var i = 1;
  }
  for( i; i < str.length; i++){
    sum = sum + Number(str.charAt(i));
  }
  return sum;
}


/*
Write a function called "findShortestWordAmongMixedElements".

Given an array, "findShortestWordAmongMixedElements" returns the shortest string within the given array.

Notes:
* If there are ties, it should return the first element to appear in the given array.
* Expect the given array to have values other than strings.
* If the given array is empty, it should return an empty string.
* If the given array contains no strings, it should return an empty string.
*/

function findShortestWordAmongMixedElements(arr) {
  // your code here
  var shortest = "";
  if(arr.length == 0) {return shortest;};
  var strArr = new Array();
  for (var i = 0; i < arr.length; i++) {
    // console.log("arr[i] ",arr[i], "typeof ", typeof arr[i]);
    if( typeof arr[i] == 'string') { 
      strArr.push(arr[i]);
      }
    }
  if( strArr.length == 0) {return shortest; }
  shortest = strArr[0];
  if (strArr.length == 1) {return strArr[0];}
  for (var j = 1; j < strArr.length; j++) {
    if (strArr[j].length < shortest.length) {
        shortest = strArr[j];
    }
  }
  // console.log(typeof shortest);
  return shortest;
}

var output = findShortestWordAmongMixedElements([4, 'two', 2, 'three']);
// console.log(output); // --> 'two'

var output = findShortestWordAmongMixedElements([4, 2]);
// console.log("no strings: ", output); // --> ''

var output = findShortestWordAmongMixedElements([]);
// console.log("empty arr: ", output); // --> ''


var output = findShortestWordAmongMixedElements([1, 2, 'up', 'down', 'be']);
// console.log("tie:", output); // --> 'up'

var x = 2;
// console.log(typeof x);


/*
Write a function called "computeSummationToN".

Given a number, "computeSummationToN" returns the sum of sequential numbers leading up to the given number, beginning at 0.

Notes:
* If n = 4, it should calculate the sum of 1 + 2 + 3 + 4, and return 10.
*/

function computeSummationToN(n) {
  // your code here

  var sum = n;
  for (var i = (n - 1); i > 0; i--){
    sum = sum + i;
  }
  return sum;
}

var output = computeSummationToN(6);
// console.log(output); // --> 21


/*
Write a function called "computeFactorialOfN".

Given a natural number (a whole number greater than 0), "computeFactorialOfN" returns its factorial.

var output = computeFactorialOfN(3);
console.log(output); // --> 6
*/

function computeFactorialOfN(n) {
  // your code here
  if(n == 1){ return 1;}
  else{return n * computeFactorialOfN(n-1);}

}

var output = computeFactorialOfN(4);
// console.log(output); // --> 24



/*
Write a function called "repeatString".

Given a string and a number, "repeatString" returns the given string repeated the given number of times.
*/




function repeatString(string, num) {
  // your code here
  var strOut = "";

  for (var i = 1; i <= num; i++){
    strOut = strOut.concat(string);
    // console.log(strOut);
  }
  return strOut;
}

var output = repeatString('code', 3);
// console.log(output); // --> 'codecodecode'

// console.log(-3%2);



/*
Write a function called "modulo".

Given 2 numbers, "modulo" returns the remainder after dividing num1 by num2.

It should behave as described in the canonical documentation (MDN) for the JavaScript remainder operator:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Remainder_()

Notes:
* Do NOT use the actual built-in modulo (aka "remainder") operator (%) in your implementation.
* 0 % ANYNUMBER = 0.
* ANYNUMBER % 0 = NaN.
* If either operand is NaN, then the result is NaN.
* Modulo always returns the sign of the first number.

*/

function modulo(num1, num2) {
  // your code here
  var remainder = 0;
  if( num1 == 0 && num2 !=0) {return remainder;}
  if( num2 == 0 || num1 == NaN || num2 == NaN ) {return NaN;}

  var d = num1/num2;
  var floor_d = Math.floor(Math.abs(d));
  
  if( d < 0 ) {
    floor_d = -1 * floor_d;
  }


  console.log("d:", d, "floor of d: ", floor_d);
  
  if(floor_d == d) {return remainder;}
  else {
    remainder = num1 - (floor_d * num2);
  }
  return remainder;
}

// var output = modulo(25, 4);
// console.log("25, 4", output); // --> 1


// var output = modulo(-25, 4);
// console.log("num1 neg:", -25%4);
// console.log("num1 neg:", output); 

// var output = modulo(-25, -4);
// console.log("both neg:", -25%-4);
// console.log("both neg:", output); 


/*
Write a function called "multiply".

Given 2 numbers, "multiply" returns their product.

Notes:
* It should not use the multiply operator (*).\

var output = multiply(4, 7);
console.log(output); // --> 28
*/

function multiply(num1, num2) {
  // your code here
  var p = num2;
  // console.log(p);
  // add num2  'num1 times'
  for ( var i = 1; i < num1; i++ ){
    // console.log("i", i);
    p = p + num2;
    // console.log("p", p);
  }
  return p;
}


// var output = multiply(4, 7);
// console.log(output); // --> 28

/*
Write a function called "isOddWithoutModulo".

Given a number, "isOddWithoutModulo" returns whether the passed in number is odd.

Note:
* It does so without using the modulo operator (%). 
* It should work for negative numbers and zero.

var output = isOddWithoutModulo(17);
console.log(output); // --> true
*/

function isOddWithoutModulo(num) {
  // your code here
  var d = num / 2;
  var d_floor = Math.floor(Math.abs(d));

  // console.log("d, d_floor: ", d, d_floor);
  // console.log(Math.abs(d));
  if (Math.abs(d) == d_floor){
    // console.log('t');
    return false;}
  else {return true;}
}


var output = isOddWithoutModulo(17);
// console.log(output); // --> true



/*
Write a function called "multiplyBetween".

Given 2 integers, "multiplyBetween" returns the product between the two given integers, beginning at num1, and excluding num2.

Notes:
* The product between 1 and 4 is 1 * 2 * 3 = 6.
* If num2 is not greater than num1, it should return 0.

var output = multiplyBetween(2, 5);
console.log(output); // --> 24
*/

function multiplyBetween(num1, num2) {
  // your code here
  if(num2 <= num1){return 0;}
  var p = 1;
  for ( var i = num1; i < num2; i++) {
    p = p * i;
  }
  return p;
}


var output = multiplyBetween(2, 5);
// console.log(output); // --> 24

/*
Write a function called "computeSumBetween".

Given 2 integers, "computeSumBetween" returns the sum between the two given integers, beinning at num1, and excluding num2.

Notes:
* The sum between 1 and 4 is 1 + 2 + 3 = 6.
* If num2 is not greater than num1, it should return 0.

var output = computeSumBetween(2, 5);
console.log(output); // --> 9
*/

function computeSumBetween(num1, num2) {
  // your code here
  if(num2 <= num1){return 0;}
  var sum = num1;
  for( var i = num1 + 1; i < num2; i++) {
    sum = sum + i;
  }
  return sum;
}



function transformEmployeeData(array) {
  // your code here
  var newformat = new Array();
  for (var i = 0; i < array.length; i++) { 
    newformat[i] = new Object(); // as many objs as employees 
    var newkey;
    var newvalue;

    for (var j = 0; j < array[i].length; j++) { //iterate through j key/value pairs
      newkey = array[i][j][0];
      newvalue =  array[i][j][1];
      // console.log("newkey, newvalue ",newkey, newvalue);
      newformat[i][newkey] = newvalue; 
    }
  }
    return newformat;
}

var employees = [
    [
        ['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']
    ],
    [
        ['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']
    ]
];


var output = transformEmployeeData(employees);
// console.log(output);  
/*
expected output:
[
    {firstName: 'Joe', lastName: 'Blow', age: 42, role: 'clerk'},
    {firstName: 'Mary', lastName: 'Jenkins', age: 36, role: 'manager'}
]
*/

/*
Write  a function called "convertObjectToList" which converts an object literal into an array of arrays, like this:
Argument:
{
  name: 'Holly',
  age: 35,
  role: 'producer'
}
Return value:
[['name', 'Holly'], ['age', 35], ['role', 'producer']]

Note that your function should be able to handle ANY object like this, not just the exact sample provided above.

E.g., it should also be able to handle this, or any other object containing simple key-value pairs.
{
  species: 'canine',
  name: 'Bowser',
  weight: 45
}

Starter Code:
*/

function convertObjectToList(obj) {
  // your code here
  var arr = new Array();
  for (var key in obj) {
    // console.log(key, obj[key]);
    arr.push([ key, obj[key] ]);
  }
  // console.log(Array.isArray(arr));
  return arr;
}

var input = {
  name: 'Holly',
  age: 35,
  role: 'producer'
}

var output = convertObjectToList(input);
// console.log(output);  

/*
expected output
Return value:
[['name', 'Holly'], ['age', 35], ['role', 'producer']]

*/



/*
Write a function called "greetCustomer".

Given a name, "greetCustomer" returns a greeting based on how many times that customer has visited the restaurant.  Please refer to the customerData object. 

The greeting should be different, depending on the name on their reservation.

Case 1 - Unknown customer ( Name is not present in customerData ): 

var output = greetCustomer('Terrance');
console.log(output); // --> 'Welcome! Is this your first time?'

Case 2 - Customer who has visited only once ( 'visits' value is 1 ):

var output = greetCustomer('Joe');
console.log(output); // --> 'Welcome back, Joe! We're glad you liked us the first time!'

Case 3 - Repeat customer: ( 'visits' value is greater than 1 ):

var output = greetCustomer('Carol');
console.log(output); // --> 'Welcome back, Carol! So glad to see you again!'

Notes:
* Your function should not alter the customerData object to update the number of visits.
* Do not hardcode to the exact sample data. This is a BAD IDEA:


if (firstName === 'Joe') {
  // do something
}

Starter Code :
*/

var customerData = {
  'Joe': {
    visits: 1
  },
  'Carol': {
    visits: 2
  },
  'Howard': {
    visits: 3
  },
  'Carrie': {
    visits: 4
  }
};

function greetCustomer(firstName) {
  var greeting = '';
  var obj = customerData[firstName];
  if(obj == undefined) { // unknown customer
    greeting = greeting.concat('Welcome! Is this your first time?');
    return greeting;}
  
    var v = obj["visits"];

    if(v == 1) { //Customer who has visited only once
      greeting = greeting.concat("Welcome back, ", firstName, "! We're glad you liked us the first time!");
      return greeting;
    }
    // repeat customer
    greeting = greeting.concat("Welcome back, ", firstName, "! So glad to see you again!");
    return greeting;
  }
    


// console.log(obj[visits]);

//Case 1 - Unknown customer ( Name is not present in customerData ): 

var output = greetCustomer('Terrance');
console.log(output); // --> 'Welcome! Is this your first time?'

// Case 2 - Customer who has visited only once ( 'visits' value is 1 ):

var output = greetCustomer('Joe');
console.log(output); // --> 'Welcome back, Joe! We're glad you liked us the first time!'

// Case 3 - Repeat customer: ( 'visits' value is greater than 1 ):

var output = greetCustomer('Carol');
console.log(output); // --> 'Welcome back, Carol! So glad to see you again!'





















