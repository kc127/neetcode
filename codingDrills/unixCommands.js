/*
'''
❓ PROMPT
In Unix systems, commands can be executed in two primary ways:

By typing the command directly, such as "cp" or "ls";
By using "!<index>", where <index> represents the 1-based index of a previously executed command in the session. For instance, if the user has entered these commands:
ls
cp
mv
mv
mv
!1
!3
!6

The "!1" would re-execute "ls", "!3" would re-run "mv", and "!6" would trigger "!1", which in turn would execute "ls" again.

You are given a list of commands, commands, representing the sequence of commands the user entered in the terminal since the start of the session. Each command is either "cp", "ls", "mv", or "!<index>". Your task is to determine the number of times each of the "cp", "ls", and "mv" commands was executed. Return an array containing three integers in this format: [# of occurrences for "cp", # of occurrences for "ls", # of occurrences for "mv"].

Example(s)
* For commands = ["ls", "cp", "mv", "mv", "mv", "!1", "!3", "!6"], the output should be solution(commands) = [1, 3, 4].
  * First, "ls" was executed once;
  * Then "cp" was executed once;
  * After that, "mv" was executed three times;
  * Then "!1" was executed, triggering the execution of commands[0] = "ls";
  * Then "!3" was executed, triggering commands[2] = "mv";
  * Finally, "!6" was executed, triggering commands[5] = "!1", which in turn triggered commands[0] = "ls".
* In total, "cp" was executed once, "ls" was executed three times, and "mv" was executed four times, so the final answer is [1, 3, 4].
* For commands = ["ls", "cp", "mv", "!3", "mv", "!1", "!6"] the output should be solution(commands) = [1, 3, 3].
  * First, each one of the three commands was executed once;
  * Then "!3" was executed, triggering commands[2] = "mv";
  * After that, "mv" was executed one more time;
  * Then "!1" was executed, triggering commands[0] = "ls";
  * Finally "!6" was executed, triggering commands[5] = "!1", which in turn triggered commands[0] = "ls".
* In total, "cp" was executed once, "ls" was executed three times, and "mv" was executed three times, so the final answer is [1, 3, 3].

Input/Output

* [execution time limit] 4 seconds (py3)
* [input] array.string commands
* An array of strings representing the sequence of commands entered in the terminal by the user. It is guaranteed that all commands follow the format described above.
* Guaranteed constraints:
1 ≤ commands.length ≤ 500.
* [output] array.integer
* Return an array of size 3, in which:
  * 0-th element corresponds to the number of times "cp" was executed
  * 1-st element corresponds to the number of times "ls" was executed
  * 2-nd element corresponds to the number of times "mv" was executed

*/

/** Time and Space:  Time: O(n * m) where M is the max depth of possible look back commands (!)
 Space: O(1) */

 function unixCommands(commands) {
  let cmdFreq = {};
  for (let cmd of commands) {
    if (cmd[0] !== "!") cmdFreq[cmd] = (cmdFreq[cmd] || 0) + 1;
    while (cmd[0] === '!') {
      let index = Number(cmd.slice(1));
      cmd = commands[index - 1];
      if (cmd[0] !== "!") {
        cmdFreq[cmd]++;
      }
    }
  }
  return [cmdFreq["cp"] || 0, cmdFreq["ls"] || 0, cmdFreq["mv"] || 0];
}

//Test Case 8: Complex scenario with mixed nested "!" symbols.
//Expected output: [3, 6, 5] (3 'cp', 6 'ls', and 5 'mv' commands)
console.log(JSON.stringify(unixCommands(["cp", "ls", "mv", "!1", "!2", "!3", "cp", "!5", "ls", "!6", "mv", "!9", "!10", "!12"])) === "[3,6,5]")


let commands1 = ["ls", "cp", "mv", "mv", "mv", "!1", "!3", "!6"];
console.log(unixCommands(commands1))

let commands2 = ["ls", "cp", "mv", "!3", "mv", "!1", "!6"]
console.log(unixCommands(commands2))

//Test Case 1: Basic commands with no "!" symbol.
//Expected output: [2, 1, 0] (2 'cp', 1 'ls', and 0 'mv' commands)
console.log(JSON.stringify(unixCommands(["cp", "cp", "ls"])) === "[2,1,0]")

// Test Case 2: Commands with a single "!" symbol.
// Expected output: [2, 1, 1] (2 'cp', 1 'ls', and 1 'mv' commands)
console.log(JSON.stringify(unixCommands(["cp", "!1", "ls", "mv"])) === "[2,1,1]");

// Test Case 3: Commands with multiple "!" symbols.
// Expected output: [1, 2, 2] (1 'cp', 2 'ls', and 2 'mv' commands)
console.log(JSON.stringify(unixCommands(["cp", "ls", "mv", "!2", "!3"])) === "[1,2,2]")

// Test Case 4: Commands with same "!" symbol multiple times.
// Expected output: [3, 1, 1] (3 'cp', 1 'ls', and 1 'mv' commands)
console.log(JSON.stringify(unixCommands(["cp", "ls", "mv", "!1", "!1"])) === "[3,1,1]")

// Test Case 5: Complex scenario with mixed commands and "!" symbols.
// Expected output: [4, 3, 2] (4 'cp', 3 'ls', and 2 'mv' commands)
console.log(JSON.stringify(unixCommands(["cp", "cp", "ls", "mv", "!1", "!2", "ls", "mv", "!3"])) === "[4,3,2]")

// Test Case 6: Empty list
// Expected output: [0, 0, 0] (0 'cp', 0 'ls', and 0 'mv' commands)
console.log(JSON.stringify(unixCommands([])) === "[0,0,0]")

// Test Case 7: Nested "!" symbols.
// Expected output: [3, 3, 3] (3 'cp', 3 'ls', and 3 'mv' commands)
console.log(JSON.stringify(unixCommands(["cp", "ls", "mv", "!1", "!2", "!3", "!4", "!5", "!6"])) === "[3,3,3]")


