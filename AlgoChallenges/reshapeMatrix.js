function reshapeMatrix(mat, r, c){
        //count the number of elements in mat and if < or > r*c, this means that there are not enough/too many elements to form the correct number of rows and columns so return mat
        let numElements = 0;
        //create a new array []
        let array = [];
        //loop through mat and add mat[i].length to elements
        for (let i = 0; i < mat.length; i++){
          numElements += mat[i].length;
          array = [...array, ...mat[i]];
        //array = [...array, ...mat[i]] 
        //if elements < or > r*c then return mat
        }
        if (numElements > r*c || numElements < r*c) {
            return mat;
          }
        //create a new matrix []
        let newMat = [];
        //loop from 0 to length-> in each iteration, create a row that is c numbers long
        let arrayIndex = 0;
        while (newMat.length < r){
          let row = [];
        //nested loop - while loop row.length < c, push array[i] into row;
          while (row.length < c){
            row.push(array[arrayIndex]);
            arrayIndex++;
          }
        //outer loop: push row into new matrix, reset row
          newMat.push(row);
          row = [];
        }
        return newMat;
}

// matrixReshape([[1,2],[3,4]], 1, 4);
//Output: [[1,2,3,4]]

// matrixReshape([[1,2],[3,4]], 2, 4);
//Output: [[1,2],[3,4]]

//matrixReshape([[1,2,3,4,5,6], [7,8,9]], 3, 3);
//Output: [[1,2,3],[4,5,6], [7,8,9]]