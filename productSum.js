function productSum(array, mult=1) {
    // Write your code here.
      let sum = 0;
      for(let i = 0; i < array.length; i++){
          let current = array[i];
          if(Array.isArray(current)){
              sum += productSum(current, mult+1);
          } else {
              sum += current;
          }
      }
      return sum * mult;
  }
  /*
  have a multiplier variable initialized to 1
    multiplier will increment each time the recursive call goes deeper into a nested array
  initialize sum to 0
  loop thru array
  if element is an Array, 
    add sum to the elements in nested array, increment multiplier
  or sum adds current element

  return product of sum and multiplier

  */