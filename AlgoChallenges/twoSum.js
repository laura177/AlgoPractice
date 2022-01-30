/*
use hash table 
to check if two nums in array of nums can sum to target
return indeces of the nums
*/

function twoSum(nums, target){
    const hash = {}
    for(let i = 0; i < nums.length; i++){
        let diff = target - nums[i];
        if(diff in hash){
          return [hash[diff], i]
        } else {
          hash[nums[i]] = i
        }
    }

}