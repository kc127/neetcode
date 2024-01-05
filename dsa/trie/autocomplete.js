/////////////////////////////////////////////////
/*
'''
Question :

The programming interface for a legacy motor controller accepts commands as
binary strings of variable length. The console has a very primitive
autocomplete autocorrect feature: given an incomplete command, it will
display possible commands that has the incomplete command as a prefix. For
example, if '1010' is a possible command and the user enters '10', the
interface should return '1010' as a possible autocomplete result.

Implement a data structure that will allow us to efficiently query possible autocomplete results given an incomplete input.


EXAMPLE(S)
Possible commands = ['000', '1110', '01', '001', '110', '11']

'0' → ['000', '01', '001']
'1' → ['1110', '110', '11']
'00' → ['000', '001']



Edge cases/Assumptions/Observations :
1. Empty string as input should return all possible commands.
2. Possible Commands always given.
3. Trie is a good choice of data structure in such problems.
4. If prefix length is greater than command lengths in possible commands => should return an empty list.
5. Order of results in array doesn't matter
6. No duplicates in possible commands
7. Full command is when it's length equals prefix length

Approach :
#1
building the map
- generate all possible prefix for all commands from possible commands array
- add these prefix and corresponding full commands to a map
querying the map
- just fetch the list corresponding to the incomplete command

time complexity :
 O(k*n) where k = number of commands, n = length of the longest possible command

 '0' → ['000', '01', '001']
 '1' → ['1110', '110', '11']
 '00' → ['000', '001']

 0, 00, 000 (from "000")
 0: ["000"]
 00: ["000"]
 000: ["000"]

#2
- root node with empty string as value
- constructor:
  - dict of children nodes (0 or 1)
  - boolean flag isCommand (isComplete/isWord -> you will find this in some variants)

- build the trie
   - constructor
   - build the trie node using characters (0/1) : using possibleCommands
- query the trie



aab, aaa, abc

                      a
                  a     b
                b   a     c


FUNCTION SIGNATURE
Implement a class that should be initialized with a list of possible commands. The class should have the following public method:

autocomplete(command) {
def autocomplete(self, command: str) -> list[str]:
'''
*/



/*
Python
class TrieNode:
  def __init__(self, children = {}, isCommand = False):
    self.children = children
    self.isCommand = isCommand

class Solution:

  def build(self, commands):
    self.root = TrieNode()

    for command in commands:
      addWord(command)

  def addWord(command):
    currPointer = self.root
    for ch in command:
    // need to check if current character is already in children ?
      if ch not in currPointer.children:
        currPointer.children[ch] = TrieNode()
      currPointer = currPointer.children[ch]

    currPointer.isCommand = True

  def autocomplete(prefix):
    curr = self.root
    ans = []

    for ch in prefix:
      if ch not in curr.children:
        return []
      curr = curr.children[ch]

    # now curr should be where the prefix subtree starts
    dfs(prefix, ans, curr)
    return ans

  def dfs(prefix, ans, curr):
    if curr.isCommand:
      ans.append(prefix)
    for ch in curr.children:
      dfs(prefix+ch, ans, curr.children[ch])
*/

//JavaScript

class TrieNode {
  constructor(children = {}, isCommand = false) {
    this.children = children;
    this.isCommand = isCommand;
  }
}

class Solution {
  build(commands){
    const root = new TrieNode();
    for (let i = 0; i < commands.length; i += 1) {
      const command = commands[i];
      // resetting current to root node
      let curr = root;
      for (let j = 0; j < command.length; j += 1) {
        // choose 0 or 1 based on current command[j]
        // we need to see if the current character is a part of dictionary or not ?
        let ch = command[j];
        if (!(ch in curr.children)) {
          curr.children[ch] = new TrieNode();
        }
        curr = curr.children[ch];
      }
      curr.isCommand = true;
    }
    this.root = root;
  }
    // prefix is 01
  autocomplete(prefixCommand) {
    // mark current pointer to root
    let result = [];
    let curr = this.root;
    // find prefix in trie
    for (let i = 0; i < prefixCommand.length; i += 1) {
      const ch = prefixCommand[i];
      // check if next char in curr.children
      if (!(ch in curr.children)) return [];
      curr = curr.children[ch];
    }

    // search rest of trie for `isComplete = true` nodes

  }

  dfs(node, prefix, result){
    if (node.isCommand) {
      result.push(prefix)
    }

    for (let ch in node.children) {
          dfs(node.children[ch], prefix + ch, result)
    }
  }
}
