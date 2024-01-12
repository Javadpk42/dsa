// class Node {
//   constructor() {
//     this.children = {};
//     this.isEnd = false;
//   }
// }

// class Trie {
//   constructor() {
//     this.root = new Node();
//   }

//   insert(word) {
//     let curr = this.root;
//     for (let char of word) {
//       if (!curr.children[char]) {
//         curr.children[char] = new Node();
//       }
//       curr = curr.children[char];
//     }
//     curr.isEnd = true;
//   }

//   contains(word) {
//     let curr = this.root;
//     for (let char of word) {
//       if (!curr.children[char]) {
//         return false;
//       }
//       curr = curr.children[char];
//     }
//     return curr.isEnd;
//   }

//   insertSubstringStartingAt(word, index) {
//     for (let i = index; i < word.length; i++) {
//       this.insert(word.substring(i));
//     }
//   }

//   populateSuffixTree(word) {
//     for (let i = 0; i < word.length; i++) {
//       this.insertSubstringStartingAt(word, i);
//     }
//   }
// }

// Example Usage:
// const trie = new Trie();
// trie.populateSuffixTree('sanu')
// trie.insert("apple");
// trie.insert("app");
// trie.insert("banana");
// console.log(trie);
// console.log(trie.contains("nu"));
// true
// console.log(trie.contains("appl"));
// false
// console.log(trie.contains("banana"));
// true

// trie.populateSuffixTree("banana");

// console.log(trie.contains("nan"));
// true
// console.log(trie.contains("a"));
// true


class Node{
    constructor(){
        this.children={}
        this.isEnd=false
    }
}
class Trie{
    constructor(){
        this.root=new Node()
    }
    insert(word){
        let curr=this.root
        for(let char of word){
            if(!curr.children[char]){
                curr.children[char]=new Node()
            }
            curr=curr.children[char]
        }
        curr.isEnd=true
    }
    include(word){
        let curr=this.root
        for(let char of word){
            if(!curr.children[char]){
                return false
            }
            curr=curr.children[char]
        }
        return curr.isEnd

    }
}
const trie=new Trie()
trie.insert('javad')
console.log(trie.include('java'))
