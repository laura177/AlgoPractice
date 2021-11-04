//memory: O(1), time: O(m*n) where m is the length of arrayOne and n is the length of arrayTwo
function smallestDifference(arrayOne, arrayTwo) {
    // Write your code here.
        //difference variable
    let difference = Infinity;
    //index1 & index2
    let index1;
    let index2;
    //find the two numbers with smallest difference and return the numbers in an array
    //loop through array one, nested loop with array two 
    for (let i = 0; i < arrayOne.length; i++){
      for (let j = 0; j < arrayTwo.length; j++){
    //subtract array one [i] and array two [j] and replace difference if the absolute value of the difference is smaller & make index1 = i and index2 = j
        if (Math.abs(arrayOne[i]-arrayTwo[j]) < difference){
          difference = Math.abs(arrayOne[i]-arrayTwo[j]);
          index1 = i;
          index2 = j;
        }
      }
    }
    //outside of loop return [arrayOne[index1], arrayTwo[index2]]
    return [arrayOne[index1], arrayTwo[index2]];
}
  
//O(nlog(n) + mlog(m)) time & O(1) space
function smallestDifference(arrayOne, arrayTwo) {
    //sort the arrays 
    arrayOne.sort((a,b) => a-b);
    arrayTwo.sort((a,b) => a-b);
    //pointers for both arrays
    let p1 = 0;
    let p2 = 0;
    //index1 and index2 variables to keep track of numbers to return
    let index1;
    let index2;
    //store difference
    let difference = Infinity;
  
    //while loop until either pointer hits the end of its array length so BOTH conditions have to be met
    while(p1 < arrayOne.length && p2 < arrayTwo.length){
    //find the difference; if it's 0, return those two numbers 
      if (Math.abs(arrayOne[p1]-arrayTwo[p2]) === 0) return [arrayOne[p1], arrayTwo[p2]];
  
      if (Math.abs(arrayOne[p1]-arrayTwo[p2]) < difference){
        difference = Math.abs(arrayOne[p1]-arrayTwo[p2]);
        index1 = p1;
        index2 = p2;
      }
    //otherwise, increment the smaller of the two pointers
      if (arrayOne[p1] < arrayTwo[p2]) {
        p1++;
      } else {
        p2++;
      }
    }
    //return the two numbers
    return [arrayOne[index1], arrayTwo[index2]];
}

//smallestDifference([10, 0, 20, 25, 2200],[1005, 1006, 1014, 1032, 1031]) output:[25, 1005]
//smallestDifference([-1, 5, 10, 20, 28, 3],[26,134, 135, 15, 17]) ouput: [28,26]