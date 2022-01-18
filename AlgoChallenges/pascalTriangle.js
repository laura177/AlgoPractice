pascalTriangle

Input: numRows = 5
Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

/*
if n === 1 ==> memo[n] = [[1]]
key = numRows and value = the output
memo = {1: [[1]], 2: [[1],[1,1]], 3: [[1],[1,1],[1,2,1]], 4: [[1],[1,1],[1,2,1],[1,3,3,1]]}
pascal(5) -> check memo[n-1]
if memo[n-1], do this ==> 
memoArray = memo[n-1][memo[n-1].length-1] = [1,3,3,1]


loop through that last array until end pointer reaches the end, start pointer (0) and end pointer (1)
push the sum of memoArray[start] + memoArray[end]
increment both pointers
array = [...array, 1]

memo[n] = [...memo[n-1], array]

*/
/*
var generate = function(n, memo = {}) {
    if (n === 1) {
        memo[1] = [[1]];
        return memo[n];
    }
        let result = generate(n-1, memo);
        let previousArray = result[result.length-1];
        let currentArray = [1];
        if (previousArray.length > 1){
            let start = 0; 
            let end = 1; 
            while (end < previousArray.length){
                currentArray.push(previousArray[start] + previousArray[end]);
                start++;
                end++;
            }
        }
        currentArray = [...currentArray, 1];
        memo[n] = [...result, currentArray];
        return memo[n];
      }
      */