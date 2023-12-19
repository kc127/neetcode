'''
Given a distance d, a pendulum starts at d and swings from d to negative d and back. For example, given distance 3, the pendulum goes 3, 2, 1, 0, -1, -2, -3, -2, -1, 0, 1, 2, 3, and back again.
Given a time t, return the pendulum's position. The time starts at 0.

In this example, 0 returns 3, 1 returns 2, 3 returns 0, and so on.

Assumption/Observations
1. The pendulum moves one unit at a time
2. d is always going to be at least 1

EXAMPLE(S)
Input: d = 5, t = 7
Output: -2
Explanation: The pendulum swings as follows, with the 7th tick on the -2 position.
5 4 3 2 1 0 -1 -2 -3 -4 -5
0 1 2 3 4 5  6  7

Input: d = 1, t = 3
Output: 0
        1 0 -1 0 1 0 -1
        0 1  2 3

Input: d = 1, t = 0
Output: 1

Input: d = 5, t = 8
Output = -3

 5 4 3 2 1 0 -1 -2 -3 -4 -5
 0 1 2 3 4 5  6  7  8

Approach:
    Idea: Brute Force

            Input: d = 5, t = 8
        8%11 = 8, q = 0
        18%11 = 7, q = 1

        5 4 3 2 1 0 -1 -2 -3 -4 -5  = 11
        0 1 2 3 4 5  6  7  8

        5 4 3 2 1 0 -1 -2 -3 -4 -5 -4 -3 -2 -1 0 1 2 3 4 5 4 3 2 1 0
                           8                         18


Brute Force:
        create an array
        as long as the array length is less than t+1
            pushing d to array

            stop when we reach negative of original d


  Naive approach:
        counter = 0
        originalD = d
        while the counter is less than t + 1
                decrement d by 1
            if d is negative of original d
                increment by 1


            increment the counter by 1

        output the modified input

Optimal:
    Idea of periodicity => how often does the seq repeat itself
    how often does the seq repeat itself
        every

FUNCTION SIGNATURE
function pendulum(distance, time)
5 4 3 2 1 0 -1 -2 -3 -4  -5-4 -3 -2 -1 0 1 2 3 4 5 4 3 2 1 0
-1 ......................1.......................-1
 A                                                B

 given d = 5
 one period = 20 steps = 5 * 4 = d * 4

'''
## time complexity = O(time)
## space complexity = O(1)
def pendulum(distance, time):
    flag = -1
    d = distance
    counter = 0
    while counter < time:
        d = d + flag
        counter += 1
        if d == -distance:
            flag = 1
        if d == distance:
            flag = -1
    return d


def pendulumPeriodicity(distance, time):
    flag = -1
    d = distance
    counter = 0
    time = time % (d*4)
    while counter < time:
        d = d + flag
        counter += 1
        if d == -distance:
            flag = 1
        if d == distance:
            flag = -1
    return d

 #       (time % 4d) ~ 4d ~ d
 #       (n % m) ~ m

print(pendulum(5, 7), -2)
print(pendulum(1, 3), 0)
print(pendulum(5, 8), -3)
print(pendulum(1, 0), 1)

print(pendulumPeriodicity(5, 7), -2)
print(pendulumPeriodicity(1, 3), 0)
print(pendulumPeriodicity(5, 8), -3)
print(pendulumPeriodicity(1, 0), 1)






