class Node {
  constructor() {
    this.children = {};
    this.isEnded = false;
  }
}

class Prefix {
  constructor() {
    this.root = new Node();
  }

  build(word) {
    let curr = this.root;
    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      if (!curr.children[char]) {
        curr.children[char] = new Node();
      }
      curr = curr.children[char];
      curr.isEnded = true;
    }
  }
  contains(word) {
    let curr = this.root;
    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      if (!curr.children[char]) return false;
      curr = curr.children[char];
    }
    return curr.isEnded;
  }
}

const pref = new Prefix();
pref.build("javad");
console.log(pref.contains("java"));
