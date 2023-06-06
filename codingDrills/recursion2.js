/*
What is recursion?
    stack
    function that calls itself
    can call itself directly or indirectly
    base case - where recursion stops
    recursive step
    memoisation: saves previous recurdive call results
    
# compute the sum of a linked list
# add, recurse, return
# do not need to keep memory in this stack frame
# tail recursion
def sumLinkedListLeftToRight(head, sum=0):
    if head == None:
        return sum

    sum += head.value
    return  sumLinkedListLeftToRight(head.next, sum)

# 1 -> 2 -> 3
# sum(1, 0) -> 6

# recurse, add, return
def sumLinkedListRightToLeft(head):
    if head == None:
        return 0
    return head.val + sumLinkedListRightToLeft(head.next)

# do the same iteratively

def sumLinkedListIterative(head):
    if head == None:
        return 0

    sum = 0
    curr = head
    while (curr):
        sum += curr.value
        curr = curr.next

    return sum

# 1 -> 2 -> 3 -> None

# iterative: 1 3 6
# recursive: 3 5 6

# compute the max value of a linked list
def maxOfLinkedList(head, max=float("-inf")):
    if head == None:
        return max

    if (head.val > max):
        max = head.val
    return  maxOfLinkedList(head.next, max)

def maxOfLinkedList2(head, maxVal=float("-inf")):
    if head == None:
        return maxVal

    return  maxOfLinkedList(head.next, max(maxVal, head.val))

def findMax(head):
    if head == None:
        return 0

    return max(head.val, findMax(head.next))


# generate the nth fibo number

def fib(n, cache={}):
    if n in cache:
        return cache[n]

    if (n <= 1):
        return n
    else:
        cache[n] = fib(n-1, cache) + fib(n-2, cache)
        return cache[n]


'''
                        f(5)
                f(4)                   f(3)
         f(3)       f(2)        f(2)           f(1)
    f(2)     f(1)  f(1) f(0)  f(1)   f(0)
f(1)     f(0)

 time: O(branch ^ levels) = O(2^n)
'''

def rec(x, y):
    if y == 0:
        return
    for i in range(x):
        rec(x, y-1)

'''
time = x ^ y


x = 3

                                         rec(x, y-3)
                           rec(x, y-2)   rec(x, y-3)
                                         rec(x, y-3)

                                         rec(x, y-3)
           0: rec(x, y-1)  rec(x, y-2)   rec(x, y-3)
                                         rec(x, y-3)

                           rec(x, y-2)

                           rec(x, y-2)
rec(3, y)  1: rec(x, y-1)  rec(x, y-2)
                           rec(x, y-2)

                           rec(x, y-2)
           2: rec(x, y-1)  rec(x, y-2)
                           rec(x, y-2)

    1         3               9                27

O(x^y)
'''
