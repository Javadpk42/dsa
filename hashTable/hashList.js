// class Node {
//     constructor(key, value) {
//         this.key = key;
//         this.value = value;
//         this.next = null;
//     }
// }

// class HashTable {
//     constructor(size) {
//         this.table = new Array(size); 
//         this.size = size;
//     }

//     hash(key) {
//         return key.toString().length % this.size;
//     }

//     set(key, value) {
//         const index = this.hash(key);

//         if (this.table[index]) {
//             let curr = this.table[index];

//             while (curr.next) {
//                 if (curr.key === key) {
//                     curr.value = value;
//                     return;
//                 }
//                 curr = curr.next;
//             }

//             if (curr.key === key) {
//                 curr.value = value;
//             } else {
//                 curr.next = new Node(key, value);
//             }
//         } else {
//             this.table[index] = new Node(key, value);
//         }
//     }

//     get(key) {
//         const index = this.hash(key);
//         let curr = this.table[index];

//         while (curr) {
//             if (curr.key === key) {
//                 return curr.value;
//             }
//             curr = curr.next;
//         }

//         return undefined;
//     }

//     remove(key) {
//         const index = this.hash(key);
//         let curr = this.table[index];
//         let prev = null;

//         while (curr) {
//             if (curr.key === key) {
//                 if (prev === null) {
//                     this.table[index] = curr.next;
//                 } else {
//                     prev.next = curr.next;
//                 }
//                 return curr.value;
//             }
//             prev = curr;
//             curr = curr.next;
//         }

//         return undefined;
//     }

//     display() {
//         for (let i = 0; i < this.table.length; i++) {
//             if (this.table[i]) {
//                 console.log(i, this.table[i]);
//             }
//         }
//     }
// }

// const table = new HashTable(50);

// table.set("name", "aswin");
// table.set("age", 150);
// table.set("naem", "niwsa");

// table.display();

// console.log(table.get("name"));

// class Node{
//     constructor(key, val) {
//         this.key = key;
//         this.val = val;
//         this.next = null;
//     }
// }

// class HashTable{
//     constructor(size) {
//         this.table = new Array(size);
//         this.size = size;
//     }
//     hash(key){
//         let total = 0;
//         for (let i = 0; i < key.length; i++) {
//             total += key.charCodeAt(i);
//         }
//         return total % this.size;
//     }
//     set(key, val) {
//         let index = this.hash(key);
//         if (this.table[index] === undefined) {
//             const node = new Node(key, val);
//             this.table[index] = node;
//         } else {
//             let cur = this.table[index];
//             while(cur){
//                 if(cur.key === key){
//                     cur.val = val;
//                     return;
//                 }
//                 cur = cur.next;
//             }
//             const node = new Node(key, val);
//             node.next = this.table[index];
//             this.table[index] = node;
//         }
//     }
//     get(key) {
//         let index = this.hash(key);
//         let bucket = this.table[index];

//         if (bucket === undefined) {
//             console.log("Invalid key !");
//         } else {
//             console.log("Keys in bucket " + index + ":")
//             let cur = this.table[index];
//             while (cur) {
//                 console.log(cur.key, ":", cur.val);
//                 cur = cur.next;
//             }
//         }
//     }

//     getHashTable(){
//         console.log("All keys in the hash table:")
//         for (let i = 0; i < this.table.length; i++) {
//             let cur = this.table[i];
//             while (cur) {
//                 console.log(cur.key, ":", cur.val);
//                 cur = cur.next;
//             }
//         }
//     }

//     remove(key) {
//         let index = this.hash(key);
//         let bucket = this.table[index];

//         if (bucket === undefined) {
//             console.log("Invalid key !");
//         } else {
//             let cur = this.table[index];
//             if (cur.key === key) {
//                 this.table[index] = cur.next;
//             } else {
//                 while (cur.next) {
//                     if (cur.next.key === key) {
//                         cur.next = cur.next.next;
//                         return; 
//                     }
//                     cur = cur.next;
//                 }
//                 console.log("Key not found!");
//             }
//         }
//     }
// }

// const hashTable = new HashTable(6);

// hashTable.set("name","rai")
// hashTable.set("mane", "gopi");
// hashTable.set("age", "15");
// hashTable.get("age");
// hashTable.getHashTable();

class Node{
    constructor(key,val){
        this.key =key
        this.val=val
        this.next=null
    }
}
class hashTable{
    constructor(size){
        this.table=new Array(size)
        this.size=size
    }
    hash(key){
        let total=0
        for(let i=0;i<key.length;i++){
            total += key.charCodeAt(i)
        }
        return total % this.size
    }
    set(key,val){
        let index = this.hash(key)
        if(this.table[index]===undefined){
            const node = new Node(key,val)
            this.table[index]=node
        }else{
            let curr = this.table[index]
            while(curr){
                if(curr.key===key){
                    curr.val=val
                    return;
                }
                curr=curr.next
            }
            const node = new Node(key,val)
            node.next=this.table[index]
            this.table[index]=node
        }
    }
    get(key){
        let index=this.hash(key)
        if(this.table[index]==undefined){
            console.log('invalid key')
        }else{
            console.log(index)
            let curr = this.table[index]
            while(curr){
                console.log(curr.key,curr.val)
                curr=curr.next
            }
        }
    }
    getAll(){
        for(let i=0;i<this.table.length;i++){
            let curr =this.table[i]
            while(curr){
                console.log(i,curr.key,curr.val)
                curr=curr.next
            }
        }
    }
}

const hash = new hashTable(20)
// hash.get('ji')
hash.set('name','javad')
hash.set('salary',24)
hash.set('salary',33)
// hash.get('salary')
hash.getAll()