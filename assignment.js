
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