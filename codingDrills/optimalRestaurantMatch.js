'''
Ned and Mary want to choose a restaurant to bring their kids to for the evening, and they both have a list of their favorite places, represented by strings and sorted by preference. The place they each prefer the most is at the beginning of the list, and their least preferred at the end.

You need to help them find the optimal match to dine at based on their combined preferences score. They will often have to compromise, so their ideal option is a place they both have on their list, and it has the highest combined preference score.

To calculate the highest combined preference score, get the restaurant with the minimum index sum when adding the indices of the restaurant on both of their lists together. If multiple restaurants have the same highest score, output all of them.


EXAMPLE(S)
Input:
nedsChoices = ["Shogun", "Tapioca Express", "Burger King", "KFC"]
marysChoices = ["Piatti", "The Grill at Torrey Pines", "Hungry Hunter Steakhouse", "Shogun"]
Output: ["Shogun"]
Explanation: The only restaurant they both like is "Shogun".

Input:
nedsChoices = ["Shogun", "Tapioca Express", "Burger King", "KFC"]
marysChoices = ["KFC", "Shogun", "Burger King"]
Output: ["Shogun"]
Explanation: They both have "Shogun" on their preferred list and it has the highest preference score with an index sum of 1 (0+1). They both listed "KFC" but it has a lower preference score because the index sum is 3 (0+3). Likewise, "Burger King" has a preference score of 4 (2+2).

Input:
nedsChoices = ["Guppy House", "In-n-Out", "Dairy Queen"]
marysChoices = ["In-n-Out", "Guppy House", "Dairy Queen"]
Output: ["Guppy House", "In-n-Out"]
Explanation: They both have "Guppy House" and "In-n-Out" on their preferred list and both restaurants have the same highest total preference score with an index sum of 1 (0+1 and 1+0). They both listed "Dairy Queen" but the preference score is 4 (2+2).

Input:
nedsChoices = ["Starbucks", "Tropical Smoothie"]
marysChoices = ["Tropical Smoothie", "starbucks"]
Output = ["Tropical Smoothie"]

Input
nedsChoices = ["x", "y", "z"]
marysChoices = ["z", "y", "x"]
output = ["x", "y", "z"]

Notes-
1. No common choice
2. No empty lists
3. No duplicates - Question is valid
4. Case sensitivity - Capitalization means different restraurant.

Assumptions/Insights:
+ at least one location will be in both ned's and mary's choice lists
+ order of output string doesn't matter if each string has same indexSum
+ case sensitive

Approaches:

1. Brute-Force:
    x y z
    x


    bestIndexSum integer, init to infinity
    output list of strings, init to empty
    loop through Neds array, at each res
    sum= 0
        loop through Marrys array to check if curr res exist
            get indexSum from indices of both loops
            if indexSum > bestIndexSum:
                continue
            else if indexSum == bestIndexSum:
                append res to output array
            else:
                clear the output array
                write current res to output array
                bestIndexSum = indexSum
loops 0 (n)^2

N - Length of Neds array
M - Length of Marrys array
TC - O(N*M)
SC - O(1)

2. 2 Pointers  [Won't work]
x a z
i
a x b
  j

1) if ned[i] = mary[j]
    i++
    j++
2) if ned[i] != mary[j]

3. Hash Map Approach
Smaller List - key -> restaurant value -> index
TC - O(N+M)
SC -  O(min(N, M))

0. create bestIndexSum variable init infinity, shorterScores = []
1. forming the hashmap based on the conditional
2. iterate through the larger list
    2a. if indexSum<bestIndexSum then clear and set bestIndexSum to indexSum
    2b. if indexSum=bestIndexSum then append

FUNCTION SIGNATURE
function findCompatibleRestaurantsBetween(ned, mary) {
def findCompatibleRestaurantsBetween(ned: list[str], mary: list[str]) -> list[str]:
'''
# import re


def findCompatibleRestaurants(ned: list[str], mary: list[str]) -> list[str]:

    shorterArray = ned if len(ned) < len(mary) else mary
    longerArray = mary if len(ned) < len(mary) else ned
    shorterScores = {}

    bestIndexSum = float("inf")
    # populate the shorterScores hashmap
    for i in range(len(shorterArray)):
        shorterScores[shorterArray[i]] = i


    # iterate over longer array to find best matches
    bestRestaurants = []
    for j in range(len(longerArray)):
        # check for inclusion in shorterScores hashmap
        if longerArray[j] not in shorterScores:
            continue

        # if included, get the index sum
        thisIndexSum = j + shorterScores[longerArray[j]]

        # perform logic based on index sum

        # 2a. if indexSum<bestIndexSum then clear
        if thisIndexSum < bestIndexSum:
            bestRestaurants = [longerArray[j]]
            bestIndexSum = thisIndexSum
        # 2b. if indexSum=bestIndexSum then append
        elif thisIndexSum == bestIndexSum:
            bestRestaurants.append(longerArray[j])

    return bestRestaurants

nedsChoices = ["Shogun", "Tapioca Express", "Burger King", "KFC"]
marysChoices = ["Piatti", "The Grill at Torrey Pines", "Hungry Hunter Steakhouse", "Shogun"]
# print(findCompatibleRestaurants(nedsChoices, marysChoices) )
print(findCompatibleRestaurants(nedsChoices, marysChoices) == ["Shogun"])

nedsChoices = ["Shogun", "Tapioca Express", "Burger King", "KFC"]
marysChoices = ["KFC", "Shogun", "Burger King"]
print(findCompatibleRestaurants(nedsChoices, marysChoices) == ["Shogun"])

nedsChoices = ["Guppy House", "In-n-Out", "Dairy Queen"]
marysChoices = ["In-n-Out", "Guppy House", "Dairy Queen"]
print(findCompatibleRestaurants(nedsChoices, marysChoices).sort() == ["Guppy House", "In-n-Out"].sort())

nedsChoices = ["Olive Garden", "Outback Steakhouse", "Red Lobster"]
marysChoices = ["Olive Garden", "Outback Steakhouse", "Red Lobster"]
print(findCompatibleRestaurants(nedsChoices, marysChoices) == ["Olive Garden"])

nedsChoices = ["Hometown Buffet", "Olive Garden", "Red Lobster"]
marysChoices = ["Panda Express", "Denny's", "Red Lobster"]
print(findCompatibleRestaurants(nedsChoices, marysChoices) == ["Red Lobster"])

nedsChoices = ["Costco Food Court"]
marysChoices = ["Costco Food Court"]
print(findCompatibleRestaurants(nedsChoices, marysChoices) == ["Costco Food Court"])

nedsChoices = ["Costco Food Court", "Saigon Deli", "Med Mix"]
marysChoices = ["Med Mix", "Saigon Deli", "Costco Food Court"]
print(findCompatibleRestaurants(nedsChoices, marysChoices).sort() == ["Saigon Deli", "Costco Food Court", "Med Mix"].sort())

nedsChoices = ["Costco Food Court"]
marysChoices = ["Med Mix", "Saigon Deli", "Costco Food Court"]
print(findCompatibleRestaurants(nedsChoices, marysChoices) == ["Costco Food Court"])