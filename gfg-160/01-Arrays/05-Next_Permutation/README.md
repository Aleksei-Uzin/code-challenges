# [Next Permutation](https://www.geeksforgeeks.org/batch/gfg-160-problems/track/arrays-gfg-160/problem/next-permutation5226)

Given an array of integers **arr[]** representing a permutation, implement the **next permutation** that rearranges the numbers into the lexicographically next greater permutation. If no such permutation exists, rearrange the numbers into the lowest possible order (i.e., sorted in ascending order).

Note - A permutation of an array of integers refers to a specific arrangement of its elements in a sequence or linear order.

---

**Let's break this down step by step:**

1. Understanding **Permutation**

   - Your input array represents a **permutation**, meaning it's a specific arrangement of its elements.

   - The task is to find the next lexicographical order of this arrangement.

2. Finding the Next Permutation

   - You need to rearrange the numbers to form the next **greater** sequence in terms of dictionary (lexicographic) order.

   - Example:

     - Input: `[2, 4, 1, 7, 5, 0]`

     - Output: `[2, 4, 5, 0, 1, 7]`

     - Explanation: Among all possible permutations of `[2, 4, 1, 7, 5, 0]`, the smallest permutation greater than this one is `[2, 4, 5, 0, 1, 7]`.

3. Implementation

   - Locate the rightmost pair where `arr[i] < arr[i+1]` (this identifies the pivot).

   - Find the smallest larger number in the right subarray and swap it with the pivot.

   - Reverse the numbers to the right of the pivot to ensure the next smallest order.
