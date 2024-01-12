class Node {
  constructor() {
    (this.children = {}), (this.isEnded = false);
  }
}
class Suffix {
  constructor() {
    this.word = null;
    this.root = new Node();
  }

  build(word) {
    this.word = word;
    for (let i = 0; i < this.word.length; i++) {
      this.insert(i);
    }
  }
  insert(index) {
    let curr = this.root;
    for (let i = index; i < this.word.length; i++) {
      const char = this.word[i];
      if (!curr.children[char]) {
        curr.children[char] = new Node();
      }
      curr = curr.children[char];
    }
    curr.isEnded = true;
  }

  contains(word) {
    let curr = this.root;
    for (const char of word) {
      if (!curr.children[char]) return false;
      curr = curr.children[char];
    }
    return curr.isEnded; // Return true as long as the characters of the substring are found in the tree
  }
}
const t = new Suffix();
t.build("javad");
console.log(t.contains("avad"));
