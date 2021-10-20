function countPrimes(n){
    if(n <= 2) return 0;

    //first, create array at same length as n with all elements being true
    let arr = [];
    for(let i = 0; i < n; i++){
        arr.push(true);
    };
    //implement Sieve of Eratosthenes algo
    //where at each iteration, 
    //if element is true, flip all multiples of that coinciding number to false.
    //all initially start as true from arr
    for(let i = 2; i <= Math.floor(Math.sqrt(n)); i++){
        if(arr[i]){
            for(let j = i; j*i < arr.length; j++){
                arr[i*j] = false;
            };
        };
    };
    //now count the remaining elements that equal true
    let count = 0;
    for(let i = 2; i < arr.length; i++){
        if(arr[i]){
            count++;
        };
    };
    return count;
};
//countPrimes(10) //output: 4