/*
Given a target sum and an array of positive integers, 
return true if any combination of numbers in the array can add to the target.

Each number in the array may only be used once. 
Return false if the numbers cannot be used to add to the target sum.
*/

//iterative

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