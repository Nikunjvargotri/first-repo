
// Problem 1: Find the Position of Target Values in the Matrix 
// Description: Given a 2D matrix and a target value, write a program to find all 
// occurrences of the target value and return their positions as row and column indices. 
// Example Input: 
// Matrix: 
// 1  2  3  4 
// 5  6  7  8 
// 9  2  3  4 
// Target: 2 
// Expected Output: 
// Positions: [(0,1), (2,1)]



// let target=2
// let result=[]

// let matrix=[[1,2,3,4],[5,6,7,8],[9,2,3,4]]
// for (let i=0; i<matrix.length; i++){
//     for (let j=0; j<matrix[i].length; j++){
//         if(matrix[i][j]==target){
//             result.push(i , j)
//         }
//     }
// }
// console.log(result)



// Problem 3: Iterate Through the Matrix 
// Description: Write a program that iterates through a given matrix and prints each 
// element in row-major order. 
// Example Input: 
// Matrix: 
// 1  2  3 
// 4  5  6 
// 7  8  9 
// Expected Output: 
// 1 2 3 4 5 6 7 8 9



// let matrix=[[1,2,3],[4,5,6],[7,8,9]]

// for (let i=0; i<matrix.length;i++){
//     for (let j=0; j<matrix[i].length;j++){
//         console.log(matrix[i][j])    
//     }
// }








// Problem 2: Find the Maximum Row Sum in the Matrix 
// Description: Given a matrix, write a program to find the row with the maximum sum and 
// return its sum and row index. 
// Example Input: 
// Matrix: 
// 3  8  1 
// 5  2  9 
// 4  7  6 
// Expected Output: 
// Row 2 has the maximum sum: 17

// let matrix=[[3,8,1],[5,2,9],[4,7,6]]

// function findMaxSumRow(matrix) {
//     let rowSums = matrix.map(row => row.reduce((sum, num) => sum + num, 0));
//       let maxSum = Math.max(...rowSums);
//      let maxRowIndex = rowSums.indexOf(maxSum);
  
//       return { maxRowIndex, maxSum };
//   }
//   const result = findMaxSumRow(matrix);
//   console.log(result)









// 3-april-2025



// 1. Transpose of a Matrix 
// Problem Statement: 
// Write a program that takes a 2D matrix as input and converts it into its transpose. The 
// transpose of a matrix is obtained by swapping its rows and columns. 
// Example: 
// Input: 
// Matrix: 
// 1  2  3 
// 4  5  6 
// 7  8  9 
// Output: 
// Transpose: 
// 1  4  7 
// 2  5  8 
// 3  6  9




// let matrix=[[1,2,3],[4,5,6],[7,8,9]]
// let result=[]
// for (let i=0; i<matrix.length; i++){
//      row=[]
//     for (let j=0; j<matrix[i].length; j++){
//         row.push(matrix[j][i])
       
//     }
//      result.push(row)
// }
// console.log(result)





// 2. Find the Row with Maximum Sum 
// Problem Statement: 
// Write a program that finds the row in a given matrix that has the highest sum of its 
// elements. 
// Example: 
// Input: 
// Matrix: 
// 1  2  3   // Sum = 6 
// 4  5  6   // Sum = 15 
// 7  8  9   // Sum = 24 
// Output: 
// Row 3 has the maximum sum: 24 


// let matrix=[[1,2,3],[4,5,6],[7,8,9]]

// function findMaxSumRow(matrix) {
//     let rowSums = matrix.map(row => row.reduce((sum, num) => sum + num, 0));
//       let maxSum = Math.max(...rowSums);
//      let maxRowIndex = rowSums.indexOf(maxSum);
  
//       return { maxRowIndex, maxSum };
//   }
//   const result = findMaxSumRow(matrix);
//   console.log(result)






// 5. Convert a 2D Matrix into a 1D Array (Row-wise) 
// Problem Statement: 
// Write a program that converts a 2D matrix into a 1D array by reading its elements 
// row-wise. 
// Example: 
// Input: 
// Matrix: 
// 1  2  3 
// 4  5  6 
// 7  8  9 
// Output: 
// 1D Array: [1, 2, 3, 4, 5, 6, 7, 8, 9]




// function matrixToArray(matrix) {
//     let result = []
    
//     for (let row of matrix) {
//       result.push(...row)
//     }
    
//     return result
//   }
  
//   let matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
//   ]
  
//   console.log(matrixToArray(matrix))





// 3. Search for an Element in a 2D Array 
// Problem Statement: 
// Write a program that searches for a specific element in a 2D array and returns its 
// position if found. 
// Example: 
// Input: 
// Matrix: 
// 1  2  3 
// 4  5  6 
// 7  8  9 
// Search Key: 8 
// Output: 
// Element found at position: (3,2)


// let target=8
// let result=[]

// let matrix=[[1,2,3],[4,5,6],[7,8,9]]
// for (let i=0; i<matrix.length; i++){
//     for (let j=0; j<matrix[i].length; j++){
//         if(matrix[i][j]==target){
//             result.push(i,j)
//         }
//     }
// }
// console.log(result)








// Sum of Two Numbers 
// Write a function sum(a, b) that returns the sum of two numbers. 
// function sum(a, b) { 
// // your code here 
// } 
// Example: 
// sum(5, 10); 



// function additionFunction(a, b) {
//     return a + b;
// }

// console.log(additionFunction(5,10))






// Check Prime Number 
// Write a function isPrime(n) that returns true if n is a prime number, otherwise 
// false. 
// function isPrime(n) { 
// // your code here 
// } 
// Example: 
// isPrime(7); 
// isPrime(10); 

// function isPrime(num) {
//     if (num % 2 === 0) 
//     return false
//     for (let i = 3; i <= Math.sqrt(num); i += 2) {
//         if (num % i === 0) {
//             return false
//         }
//     }
//     return true
// }
// console.log(isPrime(11))
// console.log(isPrime(10))








// : Reverse a String 
// Write a function reverseString(str) that returns the reversed version of the 
// input string. 
// function reverseString(str) { 
// // your code here 
// } 
// Example: 
// reverseString("hello"); // Output: "olleh"




// function reversemessage(hello) {
//     return hello.split('').reduce((rev, char) => char + rev, '')
// }

// console.log(reversemessage("hello"))






// Find Maximum in Array 
// Write a function findMax(arr) that returns the largest number from an array of 
// numbers. 
// function findMax(arr) { 
// // your code here 
// } 
// Example: 
// findMax([10, 25, 3, 100, 56]); // Output: 100 


// function findMax(arr) {
//     let max = arr[0]
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i]
//         }
//     }
//     return max
// }

// console.log(findMax([10, 25, 3, 100, 56]))






// Count Vowels in a String 
// Write a function countVowels(str) that counts the number of vowels (a, e, i, o, 
// u) in a string. 
// function countVowels(str) { 
// // your code here 
// } 
// Example: 
// countVowels("JavaScript"); // Output: 3





//8-april-2025


// : Find the First and Last Elements of an Array 
// �
// �
//  Description: 
// Given an array, write a JavaScript function to return the first and last elements of the 
// array. 
// �
// �
//  Example: 
// const arr = [10, 20, 30, 40]; 
// Output: [10, 40] 


// function getFirstAndLast(arr) {
//     if (arr.length == 0) {
//       return []
//     }
//     return [arr[0], arr[arr.length - 1]]
//   }
//   const arr = [10, 20, 30, 40]
//   console.log(getFirstAndLast(arr))







// Concatenate Two Arrays (Including Nested Arrays) 
// �
// �
//  Description: 
// You are given two array 
// let n1 = [[1], [2]]; 
// let n2 = [3, [4, 5]]; 
// Write a JavaScript function to concatenate these arrays into a single array. 
// �
// �
//  Expected Output: 
// [[1], [2], 3, [4, 5]] 


//   function concatenatearr(arr1, arr2) {
//     return [...arr1, ...arr2]
//   }
//   let n1 = [[1], [2]]
//   let n2 = [3, [4, 5]]
//   console.log(concatenatearr(n1, n2))



// : Remove All Elements Containing the Number 2 
// �
// �
//  Description: 
// From a mixed nested array, remove any element (array or single value) that contains 
// the number 2. 
// �
// �
//  Example: 
// let arr = [[1], [2], 3, [4, 2], [5], 2]; 
// Expected Output: [[1], 3, [5]]



// function removenumberWithTwo(arr) {
//     return arr.filter(number => {
//       if (Array.isArray(number)) {
       
//         return !number.includes(2)
//       } else {
        
//         return number!== 2
//       }
//     })
//   }
  
  
//   let arr = [[1], [2], 3, [4, 2], [5], 2]
//   console.log(removenumberWithTwo(arr))