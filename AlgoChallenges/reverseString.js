function reverseString(s){
    let arr = s.split(' ');
    let newArr = [];
  
    for(let i = arr.length-1; i >= 0; i--){
      if(arr[i] !== ''){
        newArr.push(arr[i]);
      }
    }
    return newArr.join(' ');
    
}

//reverseString("the sky is blue");
//Output: "blue is sky the"

//reverseString("  hello world  ");
//Output: "world hello"

//reverseString("a good   example");
//Output: "example good a"

//reverseString("  Bob    Loves  Alice   ");
//Output: "Alice Loves Bob"

//reverseString("Alice does not even like bob");
//Output: "bob like even not does Alice"