// long1
function lengths(stringsArray) {
  myArray = [];
  for (i = 0; i < stringsArray.length; i++) {
    myArray.push(stringsArray[i].length);
  }
  return myArray;
}

// long2
function transmogrifier(x, y, z) {
  var transmogrified = Math.pow((x * y), z);
  console.log transmogrified;
  return transmogrified;
}

transmogrifier(5, 4, 3);
transmogrified(13, 12, 5);
transmogrifier(42, 13, 7);

// long3
function wordReverse(string) {
  var result = string.split.reverse.join(' ')
};
return result;





// short1
function maxOfTwoNumbers (a, b) {
  if (a > b) {
    return a
  } else if (a < b) {
    return b
  }
}

// short2
function maxOfThree (x, y, z) {
  if (x > y && y > z) {
    return x
  }
  if (y > x && x > z) {
    return y
  }
  if (z > x && x > y) {
    return z
  }
}

// short3
function isCharacterAVowel (a) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  if (vowels.indexOf(a) != -1) {
    return true;
  }
  return false;
}

// short4
function sumArray(array) {
  var sum = 0;
  for (var i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

function multiplyArray(array) {
  var product = array[0];
  for (var)

}

// short5
var numberOfArguments = function() {
  return arguments.length
}

// short6

reverseString = function() {
  return this.split('').reverse().join('');
};


// short7
// write a function findLongestWords
// takes an array of words
// returns the lengths of the longest words

function findLongestWords(arr) {
  var longestWordsLength = 0

  // check which is the longest words from the array
  for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);

    // check what's the arr[1] length
    console.log(arr[i].length);

    // check if longestWordsLength < arr[i].length
    // if yes, update longestWordsLength
    if ( longestWordsLength < arr[i].length) {
      longestWordsLength = arr[i].length;
    }
  }
  return longestWordsLength;

}

// short8

function filterLongWords(arr) {
  var 
}
