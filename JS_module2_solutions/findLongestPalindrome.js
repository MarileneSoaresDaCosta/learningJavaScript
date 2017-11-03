function findLongestPalindrome(sentence) {
  return sentence.split(' ')
          .filter(isPalindrome)
          .sort(sortAscendingByLength)
          .pop();
}

function reverseString(string) {
	return string.split('').reverse().join('');
}

function isPalindrome(word) {
  word = word.toLowerCase();
  return word === reverseString(word);
}

function sortAscendingByLength(a, b) { //compare function within the sort method
  if (a.length > b.length) {
    return 1; // greater than zero: sort 'b' to a lower index than 'a'
  } else if (a.length < b.length) {
    return -1; // less than zero: sort 'a to an index lower tha 'b'
  }
  return 0; // leave a and b unchanged
}

function assertEqual(actual, expected, testName) {
  if (actual === expected) {
  	console.log('PASSED [' + testName + ']');
  } else {
    console.log('FAILED [' + testName + '] Expected "' + expected + '", but got "' + actual + '"');
  }
}


assertEqual(findLongestPalindrome('alula ana hannah madam minim'), 'hannah', 'should return longest palindrome');

assertEqual(findLongestPalindrome('alula ana madam minim'), 'minim', 'should return last palindrome when there are multiples of same length');

assertEqual(findLongestPalindrome('Alula anA MAdam'), 'MAdam', 'should be case insensitive');