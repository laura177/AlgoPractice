/*
1. Create hash table class.
2. add a hash function.
3. implement a method for adding key/value pairs to table.

hash function:
a method or function that takes an item's key as an input, 
assigns an index to that key and returns the index when key is looked up.

*/

class HashTable {
    constructor() {
        this.values = {};
        this.length = 0;
        this.size = 0;
    }

    calculateHash(key){
        return key.toString().length % this.size;
    }

    add(key, value){
        const hash = this.calculateHash(key);
        //if the hash does not exist, create it to save in object store
        if(!this.values.hasOwnProperty(hash)) {
            this.values[hash] = {};
        }
        //if there isn't a key saved, save new key and its value
        //and increment the size of the hash table
        if(!this.values[hash].hasOwnProperty(key)) {
            this.length++
        }
        this.values[hash][key] = value;
    }
}

