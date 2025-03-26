
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

