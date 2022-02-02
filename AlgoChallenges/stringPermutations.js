const getStringPerms = str => {
    //base case: if str's length is 1, return [str]
    if(str.length === 1){
        return [str];
    }
    const results = [];

    let i = 0;
    while(i < str.length){
        const letter = str[i];
        const otherLetters = str.slice(0,1) + str.slice(i+1);
        //call recursive fn on each other letters
        getStringPerms(otherLetters).forEach(subPerm => results.push(letter + subPerm))
        while(str[i] === letter){
            i++;
        }
    }
    return results.sort()
}

/*
given a string, return an array of all variations of that string sorted
input: "cat"
output: ['cat', 'atc', 'tca', 'tac', 'atc', 'act']

can be a bit faster if I write a helper function that sorts the string in the
beginning, rather than sorting n permutations at the end. So the resulting perms
come out sorted already.

n! - n factorial space
*/