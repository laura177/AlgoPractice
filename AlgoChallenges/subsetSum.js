/*
Given a target sum and an array of positive integers, 
return true if any combination of numbers in the array can add to the target.

Each number in the array may only be used once. 
Return false if the numbers cannot be used to add to the target sum.
*/

//iterative - "bottoms up"
function subsetSum(arr, target){
    let sums = [0];

    for(let i = 0; i < arr.length; i++){
        let sumsCopy = [...sums]
        for(let j = 0; j < sumsCopy.length; j++){
            const currentSum = arr[i] + sumsCopy[j];
            if(currentSum === target){
                return true
            } else if (currentSum < target){
                sums.push(currentSum)
            }
        }
    }
    return false
}

//Set instead of array
function subsetSums(arr, target){
    const possibleSums = new Set([0]);

    for(const num of arr){
        const currentPossibleSums = new Set(possibleSums);
        for(const currentSum of currentPossibleSums){
            const newSum = currentSum + num;
            if(newSum === target){
                return true;
            }
            if(newSum < target){
                possibleSums.add(newSum)
            }
        }
    }
    return false
}


//recursive - "top down"
//stepping thru each num in the array determining:
    //1.including it in the sum will lead to a true result(using remaining numbers)
    //2. or excluding it from sum will lead to a true result (using remaining numbers)
//do this by:
    //1.subtracting that number from the target and recursing onward to the next number and
    //2. keeping the target the same and recursing onward to the next number.
    //if either of these possibilities results to true, the return true

//2 base cases: if target reaches 0, return true
//if target ever becomes negative, return false, so we don't needlessly keep recursing
//also, if we reach the end of array of numbers, return false
function subsetSum(target, arr, idx=0){
    //base cases
    if(target === 0) return true;
    if(target < 0 || idx === arr.length) return false;

    const currentNum = arr[idx];
    //include elem in potential sum, subtract elem from target
    const whenIncluded = subsetSum(target-currentNum, arr, idx+1);

    //when excluding currentNum, just move thru array by incrememnting idx 
    const whenExcluded = subsetSum(target, arr, idx+1);

    return whenExcluded || whenIncluded;
}

//with memoization
function subsetSum(target, arr, idx=0, memo={}){
    if(memo.hasOwnProperty(target)) return memo[target];

    if(target === 0) return true;
    if(target < 0 || idx === arr.length) return false;

    const currentNum = arr[idx];

    //determine whether either possibility came back true
    const whenIncluded = subsetSum(target-currentNum, arr, idx+1, memo);
    const whenExcluded = subsetSum(target, arr, idx+1, memo)

    const result = whenIncluded || whenExcluded;

    //cache this answer, associating it with this particular target
    memo[target] = result;
    return result
}


//console.log(subsetSum(2, [1, 10, 5, 3])); // false
// console.log(subsetSum(10, [1, 10, 5, 3])); // true
// console.log(subsetSum(9, [1, 10, 5, 3])); // true
// console.log(subsetSum(19, [1, 10, 5, 3])); // true
// console.log(subsetSum(17, [1, 10, 5, 3])); // false