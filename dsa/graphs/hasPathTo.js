class GNode {
  constructor(value = 0, children = []) {
    this.children = children
    this.value = value
  }

  hasPathTo(node) {
      // Write your code here.
  }
}

class Test {
  constructor(test_name = "", printTests = false) {
      this.total_count = 0
      this.problem_count = 0
      this.total_score = 0
      this.problem_score = 0
      this.current_problem = ""
      this.failed_problems = []
      console.log(`Beginning Test: ${test_name}`)
  }

  // Test Helpers
  test(expected_outcome, outcome, case_num) {
      if (expected_outcome == outcome) {
          return this.passed(case_num)
      }
      return this.failed(case_num)
  }

  testMultipleCases(possible_outcomes, outcome, case_num) {
      var possible_outcome
      for (possible_outcome of possible_outcomes) {
          if (this.compareArrays(possible_outcome, outcome)) {
              return this.passed(case_num)
          }
      }
      return this.failed(case_num)
  }

  testForArrays(expected_outcome, outcome, case_num) {
      if (this.compareArrays(expected_outcome, outcome)) {
          return this.passed(case_num)
      }
      return this.failed(case_num)
  }

  compareArrays(array1, array2) {
      return array1.length === array2.length && array1.filter((a, i) => Array.isArray(a) ? !this.compareArrays(a, array2[i]) : array2[i] !== a).length === 0;
  }

  testMatchAny(expected_outcome, outcome, case_num) {
      if (this.isEqual(expected_outcome, outcome)) {
          return this.passed(case_num)
      }
      return this.failed(case_num)
  }

  isEqual(array1, array2) {
      var sortedArr1 = []
      var sortedArr2 = []
      for (var a1 of array1) {
          sortedArr1.push(a1.sort())
      }
      for (var a2 of array2) {
          sortedArr2.push(a2.sort())
      }
      return this.compareArrays(sortedArr1.sort(), sortedArr2.sort())
  }

  // Test Logistics
  startProblem(problemName) {
      this.current_problem = problemName
      this.problem_score = 0
      this.problem_count = 0
      this.failed_problems = []
  }
  passed(case_num) {
      this.total_score += 1
      this.problem_score += 1
      this.problem_count += 1
      this.total_count += 1
  }
  failed(case_num) {
      this.problem_count += 1
      this.total_count += 1
      this.failed_problems.push(case_num)
  }
  endProblem() {
      console.log(`\n   ${this.current_problem} Score: ${this.problem_score} / ${this.problem_count}`)
      if (this.failed_problems.length > 0) {
          console.log(`   ** Failed Test Cases: ${this.failed_problems}`)
      }
  }
  printFinal() {
      console.log(`\nTotal Score: ${this.total_score} / ${this.total_count}`)
  }
}

var test = new Test("")

class ListNode {
  constructor(value = 0, next = null) {
      this.value = value
      this.next = next
  }
}

function arrayify(head) {
  var ptr = head
  var array = []
  while (ptr != null) {
      array.push(ptr.value)
      ptr = ptr.next
  }
  return array
}

class TreeNode {
  constructor(value = 0, leftChild = null, rightChild = null) {
      this.value = value
      this.left = leftChild
      this.right = rightChild
  }
}

function arrayifyTree(root) {
  if (!root) { return [] }
  var queue = []
  var array = []
  queue.push(root)
  while (queue.length !== 0) {
      var node = queue.shift()
      array.push(node.value)
      if (node.left) { queue.push(node.left) }
      if (node.right) { queue.push(node.right) }
  }
  return array
}

// Test Cases
var node2 = new GNode(2)
var node1 = new GNode(1, [node2, new GNode(3)])
var node4 = new GNode(4, [node1])
var node5 = new GNode(5, [node1, node4])
var node6 = new GNode(6)
var node7 = new GNode(7)
var node8 = new GNode(2)
var node9 = new GNode(3)
node7.children = [node8]
node8.children = [node9]
node9.children = [node7]
test.startProblem("Graph Search")
test.test(true, node5.hasPathTo(node2), 1)
test.test(false, node6.hasPathTo(node1), 2)
test.test(false, node1.hasPathTo(node4), 3)
test.test(true, node7.hasPathTo(node9), 4)
test.test(false, node7.hasPathTo(node1), 5)
test.endProblem()