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


//recursive
function subsetSum(arr, target){}



// console.log(subsetSum(2, [1, 10, 5, 3])); // false
// console.log(subsetSum(10, [1, 10, 5, 3])); // true
// console.log(subsetSum(9, [1, 10, 5, 3])); // true
// console.log(subsetSum(19, [1, 10, 5, 3])); // true
// console.log(subsetSum(17, [1, 10, 5, 3])); // false