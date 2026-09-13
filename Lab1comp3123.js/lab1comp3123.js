// Lab 1JavaScript Refresher Exercises
// Name: Zuheib Abdirahman  
// Date: 09/13/26
// Exercise 1: Capitalize first letter of each word
// --------------------------------------------
function capitalizeWords(str) {
  let words = str.split(" ");
  let newWords = [];

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let firstLetter = word[0].toUpperCase();
    let rest = word.slice(1);
    newWords.push(firstLetter + rest);
  }

  return newWords.join(" ");
}

console.log(capitalizeWords("the quick brown fox"));

// Exercise 2: Find the largest of three integers
function findLargest(a, b, c) {
  let largest = a;

  if (b > largest) {
    largest = b;
  }

  if (c > largest) {
    largest = c;
  }

  return largest;
}

console.log(findLargest(1000, 510, 440));
console.log(findLargest(1, 0, 1000));
// Exercise 3: Move last three characters to the start
function right(str) {
  // if string is shorter than 3 chars, return as is
  if (str.length < 3) {
    return str;
  }

  let lastThree = str.slice(-3);
  let front = str.slice(0, str.length - 3);

  return lastThree + front;
}

console.log(right("Python"));
console.log(right("JavaScript"));
console.log(right("Hi"));
// Exercise 4: Find the type of angle
function angle_Type(degrees) {
  if (degrees > 0 && degrees < 90) {
    return "Acute angle";
  } else if (degrees === 90) {
    return "Right angle";
  } else if (degrees > 90 && degrees < 180) {
    return "Obtuse angle";
  } else if (degrees === 180) {
    return "Straight angle";
  } else {
    return "Invalid angle";
  }
}

console.log(angle_Type(47));
console.log(angle_Type(90));
console.log(angle_Type(145));
console.log(angle_Type(180));