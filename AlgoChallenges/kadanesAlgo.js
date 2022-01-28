function kadanesAlgorithm(array){
    let maxEndingHere = array[0];
	let maxSoFar = array[0];
	for(let i = 1; i < array.length; i++){
		let num = array[i];
		maxEndingHere = Math.max(num, maxEndingHere + num);
		maxSoFar = Math.max(maxSoFar, maxEndingHere)
	}
	return maxSoFar
}
/*
1. initialize a var of sums so far at index 0
2. intialize a var keeping track of max sum so far
3. iterate thru array
4. set maxEndingHere to check max between it's current value and it's value+next num in array
5. set maxSoFar to check max between itself and Maxending here
6. return maxSoFar

single pass of the array - O(n) time and O(1) space
*/
