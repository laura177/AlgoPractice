function threeSum(array, target){
    const results = [];
    array.sort((a,b) => a-b);

    for(let i = 0; i < array.length-2; i++){
        let p1 = i + 1;
        let p2 = array.length-1;
        while(p1 < p2){
            const sum = array[i] + array[p1] + array[p2];
            if(sum === target ){
                results.push([array[i], array[p1], array[p2]]);
                p1++;
                p2--;
            } else if (sum < target){
                p1++
            } else if (sum > target){
                p2--
            }
        }
    }
    return results;
}