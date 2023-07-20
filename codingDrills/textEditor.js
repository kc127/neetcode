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