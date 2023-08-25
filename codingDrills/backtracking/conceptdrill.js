/*
    Go over the basics of backtracking (~5m)
    Code up a backtracking problem + variations together (~30m)
    Go over some extra problems to solidify the patterns (~30m)
    (Bonus) Code up any of the problems from the previous step

    In the context of backtracking, what is a choice and why is it so important?
    How are the concepts of backtracking and recursion related?
    How are the concepts of backtracking and DFS related?
*/

/*
Given three students, who will refer to as “A”, “B”, and “C”, return an array representing all the combinations that they can sit in three seats. For example:
[[ 'A', 'B', 'C' ]
[ 'A', 'C', 'B' ]
[ 'B', 'A', 'C' ]
[ 'B', 'C', 'A' ]
[ 'C', 'A', 'B' ]
[ 'C', 'B', 'A' ]]
*/

function seatingArrangementsFirstVersion(students) {
  let curr = [];
  for (let student1 of students) {
    if (curr.includes(student1)) {
      continue;
    }
    curr.push(student1);
    for (let student2 of students) {

      if (curr.includes(student2)) {
        continue;
      }
      curr.push(student2);
      for (let student3 of students) {
        if (student3 == student1 || student3 == student2) {
          continue;
        }
        console.log([student1, student2, student3])
      }
    }
  }
}


function seatingArrangementsBeforeRefactoring(students) {
  let curr = [];
  for (let student1 of students) {
    if (curr.includes(student1)) {
      continue;
    }
    curr.push(student1);
    for (let student2 of students) {

      if (curr.includes(student2)) {
        continue;
      }
      curr.push(student2);

      for (let student3 of students) {
        if (curr.includes(student3)) {
          continue;
        }
        curr.push(student3);

        console.log(curr)
        curr.pop();
      }
      curr.pop();
    }
    curr.pop();
  }
}

function seatingArrangementsWorks(students) {
  let curr = [];

  function helper() {
    if (curr.length == students.length) {
      console.log(curr);
      return;
    }
    for (let student of students) {
      if (curr.includes(student)) {
        continue;
      }
      curr.push(student);
      // DO SOMETHING HERE
      helper()
      curr.pop();
    }
  }

  helper();
}


function seatingArrangements(students) {
  let ans;

  function helper(curr) {
    if (curr.length == students.length) {
      if (isValidAns(curr)) {
        ans = [...curr];
      }
      return;
    }
    for (let student of students) {


      if (curr.includes(student)) {
        continue;
      }
      helper([...curr, student])
    }
  }

  helper([]);
  return ans;
}

function seatingArrangementsWithoutPruning(students) {
  let ans;
  let choices =[]

  function helper(curr) {
    if (curr.length == students.length) {

      if (isValidAns(curr)) {
        choices.push([...curr]) ;
      }
      return;
    }
    for (let student of students) {
      helper([...curr, student])
    }
  }

  helper([]);

  for (choice in choices) {}
  return ans;
}
seatingArrangements(["A", "B", "C"])

/*
    Letter Combinations of a Phone Number
    Permutations
    Letter Tile Possibilities

    2 = abc
    3 = def

ph = 23
                      a             b               c
                  d   e   f

  n queens
    - num of ways to place queen so that they don't attack each other
*/