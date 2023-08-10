'''
Bubble sort is a stable, in-place sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. The algorithm repeatedly passes through the list until it's sorted.

This algorithm is normally implemented iteratively. Now we will do it recursively.

This session isn't so much about the Engineering Method. We already know what algorithm we're going to implement. We're going to deeply explore the relationship between loops and recursion. This is an exercise in thinking about an algorithm differently and building skill at the craft of code.

In Bubble Sort, there are two loops, one or both can be implemented with recursion. Start out with a goal of using recursion for one of the loops, and then making both loops recursive can be a stretch goal.

If you end up with a completely recursive Bubble Sort and have time, try the same exercise with selection sort!


EXAMPLE(S)
inputArr = [3, 8, 5, 4, 1, 9, -2]
bubbleSort(inputArr)
inputArr == [-2, 1, 3, 4, 5, 8, 9]

inputArr = [5, 4, 3, 2, 1]
bubbleSort(inputArr)
inputArr == [1, 2, 3, 4, 5]

inputArr = [8, 4, 6, 2]
bubbleSort(inputArr)
inputArr == [2, 4, 6, 8]


FUNCTION SIGNATURE
// Javascript
function bubbleSort( arr, n) {
  for (let i = 0; i < n-1; i++) {
    for (let j = 0; j < n-i-1; j++) {
      if (arr[j] > arr[j+1]) {
        let temp = arr[j]
        arr[j] = arr[j+1]
        arr[j+1] = temp
      }
    }
  }
}

# Python
def bubbleSort(array: list[int]) -> None:
  for i in range(len(array)):
    for j in range(0, len(array) - i - 1):

      # compare two adjacent elements and swap if necessary
      if array[j] > array[j + 1]:
        temp = array[j]
        array[j] = array[j+1]
        array[j+1] = temp

Ideas:

Idea 1: One loop converted to Recursion
Outer loop - for loop
Inner loop - recursive calls

Outer loop - recursive
Inner loop - for loop

Outer loop - recursive
Inner loop - recursive

MAINFUNC
    BACTRACK
        base case:

        for loop


'''


def bubbleSort(array: list[int]) -> None:

    def swap(i, j, array):
        if j == len(array): return
        if array[i] > array[j]:
            array[i], array[j] = array[j], array[i]
        swap(i+1, j+1, array)

    # for i in range(len(array)):
    #     swap(0, 1, array)

    def iteration(i):
        if i == len(array):
            return
        swap(0, 1, array)
        iteration(i+1)

    iteration(0)

array = [3, 8, 5, 4, 1, 9, -2]

bubbleSort(array)
print(array)

inputArr = [5, 4, 3, 2, 1]
bubbleSort(inputArr)
print(inputArr)


inputArr = [8, 4, 6, 2]
bubbleSort(inputArr)
print(inputArr)

'''
Outer loop - recursive
Inner loop - for loop

function bubbleSortRecursive(array, n = array.length) {
  // inner loop
  for (let i = 0; i < n - 1; i++) {
    if (array[i] > array[i + 1]) {
      [array[i], array[i+1]] = [array[i+1], array[i]];
    }
  }

  // outer loop
  if (n - 1 >= 0) {
      bubbleSortRecursive(array, n - 1)
  }
}


'''
def bubbleSortRecursive(array,n,i):
    if i == n -1:
        return
    if array[i] > array[i+1]:
        array[i] , array[i+1] = array[i+1], array[i]
    bubbleSortRecursive(array,n, i+1)

def bubbleSort2(array):
    n = len(array)
    for i in range(n):
        bubbleSortRecursive(array,n-i-1,0)