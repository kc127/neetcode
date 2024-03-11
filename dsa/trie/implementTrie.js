class TrieNode {
  constructor() {
    this.children = {};
    this.endOfWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let curr = this.root;
    for (let char of word) {
      if (!curr.children[char]) {
        curr.children[char] = new TrieNode()
      }
      curr = curr.children[char];
    }
    curr.endOfWord = true;
  }

  search(word) {
    let curr = this.traverse(word);
    return curr !== null && curr.endOfWord;
  }

  traverse(word) {
    let curr = this.root;
    for (let char of word) {
      if (!curr.children[char]) {
        return null;
      }
      curr = curr.children[char];
    }
    return curr;
  }

  startsWith(prefix) {
    let curr = this.traverse(prefix);
    return curr !== null;
  }
}