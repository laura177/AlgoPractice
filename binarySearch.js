function binarySearch(arr, target){
    //binary search always starts with a sorted array
    return binarySearchHelper(arr, tagret, 0, arr.length-1);
}

function binarySearchHelper(arr, target, left, right){
    //left poiter is idx 0
    //right pointer is last idx of arr
    //middle pointer is compared to target in order to find potential match

    //while left is less than or equal to right pointer
    while(left <= right){
        //in order to find middle element, middle is sum of left and right idxs divided by 2
        //Match.floor in order to round down to whole number in case of decimal
        const middle = Math.floor((left + right) / 2);
        const potentialMatch = arr[middle];
        if(potentialMatch === target){
            return middle;
        }
        if(target < potentialMatch){
            //right pointer needs to move backward to compare lower values to potentialMatch
            right = middle - 1
        }
        if(target > potentialMatch){
            //if target is greater than potential match, 
            //left pointer needs to move up to compare larger values to potentialMatch
            left = middle + 1
        }
    }
    //return -1 if no match is found
    return -1
}