function isValidSubsequence(array, sequence) {
    let match = 0
    let arrIndex = 0
    let seqIndex = 0
  
    while(match < sequence.length && arrIndex < array.length){
      if(array[arrIndex] === sequence[seqIndex]){
        match++
        seqIndex++
      }
      arrIndex++
    }
    if(match === sequence.length){
      return true
    } else {
      return false
    }
  }
  