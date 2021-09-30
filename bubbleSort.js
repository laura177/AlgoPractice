function bubbleSort(arr){
    //define swaps boolean, to keep track of when a swap occurs
    let swaps = true;
    //define swap counter
    let sCounter = 0
    //while swaps is true
    while(swaps === true){
        let firstNum = 0;
        for(let i = 1; i < arr.length; i++){
            if(arr[firstNum] > arr[i]){
                [arr[firstNum], arr[i]] = [arr[i], arr[firstNum]]
                sCounter++
            }
            firstNum++
        }
        if(sCounter === 0){
            return arr
        }
        sCounter = 0
    }
}