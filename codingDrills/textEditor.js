/*
'''
Text Editor Data Model

We're going to build the data model for a text editor that supports the basic operations needed for typing. This data model will take the form of a class that has methods for:
- typing one character at a time
- backspace and delete to remove text one character at a time
- moving the cursor

How can this class be designed so that the main operations are as efficient as possible?

Assumptions:
1. input would be a sentence or just a word =>



Ideas:
1. Convert string to an array

EXAMPLE(S)
const editor = new TextEditor("Text").moveEnd();
console.log(editor.toString(), "Text");
editor.backspace();
console.log(editor.toString(), "Tex");
editor.addChar('t'). addChar(" ").addChar("E").addChar("d").addChar("i").addChar("t");
console.log(editor.toString(), "Text Edit");
editor.moveStart().delete().delete().delete().delete().delete();
console.log(editor.toString(), "Edit");

const e2 = new TextEditor("otter");
console.log(e2.toString(), "otter");
e2.backspace().backspace().backspace().backspace().backspace();
console.log(e2.toString() === "", true);
e2.addChar("a").moveBack().delete();
console.log(e2.toString() === "", true);

Approach:

Idea 1: Use stacks/queues by converting string to array

      CONSTRUCTOR
         - split the string and store it in a
          stack (LIFO) = split the string
          queue (FIFO) =
         - cursor = 0



FUNCTION SIGNATURE

class Node{
  constructor(val) {

  }
}

'''
*/
class TextEditor {

  // initialize the editor, optionally with some starter text
  constructor(initialText = "") {
    this.characterArr = initialText.split('');
    this.cursor = 0;
  }

  // remove the character before the cursor
  backspace() {
  }

  // remove the character at the cursor. Cursor moves to the
  // next character.
  delete() {
  }

  // add a new character before the cursor
  addChar(c) {
    this.characterArr.push(c);
    this.cursor++;
    //console.log(this.characterArr);
  }

  // move the cursor back one
  moveBack() {
  }

  // move the cursor forward one
  moveNext() {
  }

  // Move the cursor to the start. A new
  // character added here will be the first.
  moveStart() {
  }

  // move the cursor to the end. A new
  // character here will be last.
  moveEnd() {
  }

  // Return the text currently in the editor as a single string.
  // Can be O(n) in the size of the current text.
  toString() {
    //return text.join()
    // let finalStr = this.characterArr.join('');
    // return finalStr;
    console.log(this.characterArr)
    return this.characterArr;
  }

}


const editor = new TextEditor("ca").addChar("T");
console.log(editor.toString());
// const editor = new TextEditor("Text").moveEnd();
// console.log(editor.toString(), "Text");
// editor.backspace();
// console.log(editor.toString(), "Tex");
// editor.addChar('t'). addChar(" ").addChar("E").addChar("d").addChar("i").addChar("t");
// console.log(editor.toString(), "Text Edit");
// editor.moveStart().delete().delete().delete().delete().delete();
// console.log(editor.toString(
// const e2 = new TextEditor("otter");
// console.log(e2.toString(), "otter");
// e2.backspace().backspace().backspace().backspace().backspace();
// console.log(e2.toString() === "", true);
// e2.addChar("a").moveBack().delete();
// console.log(e2.toString() === "", true);


// Ideally this is an inner class
class Node {
  constructor(value, next = null, prev = null) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

class TextEditor {

  constructor(initialText = "") {
    this.start = new Node(undefined);
    this.end = new Node(undefined, null, this.start);
    this.start.next = this.end;
    this.cursor = this.end;

    for (let i = 0; i < initialText.length; i++) {
      this.addChar(initialText[i]);
    }
  }

  // remove the character before the cursor
  backspace() {
    if (this.cursor.prev.value !== undefined) {
      const remove = this.cursor.prev;
      remove.prev.next = this.cursor;
      this.cursor.prev = remove.prev;
    }
    return this;
  }

  // remove the character at the cursor. Cursor moves to the
  // next character.
  delete() {
    if (this.cursor.value !== undefined) {
      this.cursor.prev.next = this.cursor.next;
      this.cursor.next.prev = this.cursor.prev;
      this.cursor = this.cursor.next;
    }
    return this;
  }

  // add a new character before the cursor
  addChar(c) {
    const newChar = new Node(c, this.cursor, this.cursor.prev);
    this.cursor.prev.next = newChar;
    this.cursor.prev = newChar;
    return this;
  }

  // move the cursor back one
  moveBack() {
    if (this.cursor.prev.value !== undefined) {
      this.cursor = this.cursor.prev;
    }
    return this;
  }

  // move the cursor forward one
  moveNext() {
    if (this.cursor.next) {
      this.cursor = this.cursor.next;
    }
    return this;
  }

  // Move the cursor to the start. A new
  // character added here will be the first.
  moveStart() {
    this.cursor = this.start.next;
    return this;
  }

  // move the cursor to the end. A new
  // character here will be last.
  moveEnd() {
    this.cursor = this.end;
    return this;
  }

  // Return the text currently in the editor as a single string.
  // Can be O(n) in the size of the current text.
  toString() {
    let curr = this.start.next;
    const chars = [];
    while (curr.value !== undefined) {
      chars.push(curr.value);
      curr = curr.next;
    }
    return chars.join('');
  }

}