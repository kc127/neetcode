class TrieNode{
  constructor() {
      this.children = {};
      this.endOfWord = false;
  }
}

class WordDictionary {
  constructor() {
      this.root = new TrieNode();
  }

  addWord(word) {
      let curr = this.root;
      for (let char of word) {
          if (!curr.children[char]) {
              curr.children[char] = new TrieNode();
          }
          curr = curr.children[char];
      }
      curr.endOfWord = true;
  }

  search(word) {
      return this.traverse(word,this.root);

  }

  traverse(word, trieNode) {
      let curr = trieNode;
      for (let i = 0; i < word.length; i++) {
          let char = word[i];
          if (!curr.children[char]) {
              if (char === ".") {
                  for (let childNode in curr.children) {
                      let c = curr.children[childNode];
                      if (this.traverse(word.slice(i+1), c)) {
                          return true;
                      }
                  }
              }
              return false;
          } else {
              curr = curr.children[char];
          }
      }
      return curr.endOfWord;
  }
}