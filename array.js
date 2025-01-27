// 1. Write a function to remove duplicate elements from an array.
// -->
// The indexOf() method of Array instances returns the first index at which
// a given element can be found in the array, or -1 if it is not present.

// // 1] forEach Method

let colors = ["GREEN", "BLUE", "PINK", "GREEN"];
// let result = [];

// colors.forEach((color) => {
//   if (result.indexOf(color) < 0) {
//     result.push(color);
//   }
// });
// console.log(result); // [ 'GREEN', 'BLUE', 'PINK' ]

// // 2] Filter

// let unique = colors.filter((color, index) => {
//   console.log(colors.indexOf(color) + color + index);
// //   0 GREEN 0
// //   1 BLUE 1
// //   2 PINK 2
// //   0 GREEN 3
//   return colors.indexOf(color) === index;
// });
// console.log(unique); // [ 'GREEN', 'BLUE', 'PINK' ]

// // Set

// let uniqueColorObj = new Set(colors);
// console.log(uniqueColorObj); // Set(3) { 'GREEN', 'BLUE', 'PINK' }

// let uniqueColorArray = [...new Set(colors)];
// console.log(uniqueColorArray); // [ 'GREEN', 'BLUE', 'PINK' ]

// ---------------------------------------------------------------------------------------------------

// 2. Write a function to merge two arrays into a single sorted array.
// -->

// 3. Write a function to find the intersection of two arrays.
// 4. Write a function to remove a specific element from an array.
// 5. Write a function to find the second largest element in an array.
// 6. Write a function to reverse the order of words in a given sentence.
// 7. Write a function to sort an array of numbers in ascending order.
// 8. Write a function to check if a given array is sorted in ascending order.
// 9. Write a function to find the sum of all elements in an array.
// 10. Write a function to find the average of an array of numbers.
// 11. How to find the min/max element of an array using JavaScript?
// 12. JavaScript: Find the most frequent number in an array.
// 13. JavaScript Challenge: Filter out negative numbers from an array.
// 14. JavaScript: Flatten an array.
// 15. JavaScript: Check if an array contains duplicate values.
// 16. Array intersection in JavaScript: Find common elements in two arrays.
// 17. How to find a missing letter from an array using Array.find() or Array.findIndex()?
// 18. Auto-fill an array in JavaScript using Array.fill().
// 19. Shuffle an array in a random order in JavaScript.
