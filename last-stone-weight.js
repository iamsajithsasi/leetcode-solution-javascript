/**
You are given an array of integers stones where stones[i] is the weight of the ith stone.

We are playing a game with the stones. On each turn, we choose the heaviest two stones and smash them together. Suppose the heaviest two stones have weights x and y with x <= y. The result of this smash is:

If x == y, both stones are destroyed, and
If x != y, the stone of weight x is destroyed, and the stone of weight y has new weight y - x.
At the end of the game, there is at most one stone left.

Return the weight of the last remaining stone. If there are no stones left, return 0.

Example 1:
Input: stones = [2,7,4,1,8,1]
Output: 1
Explanation: 
We combine 7 and 8 to get 1 so the array converts to [2,4,1,1,1] then,
we combine 2 and 4 to get 2 so the array converts to [2,1,1,1] then,
we combine 2 and 1 to get 1 so the array converts to [1,1,1] then,
we combine 1 and 1 to get 0 so the array converts to [1] then that's the value of the last stone.


Example 2:
Input: stones = [1]
Output: 1
*/

/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    let isLoop = true,
        stones_sorted = stones.sort(function(a, b){return a - b})
        output = [];


    while(isLoop) {
        stones_sorted.sort(function(a, b){return a - b});

        let stones_len = stones_sorted.length;

        if(stones_len === 1) {
            output = Array.from(stones_sorted);
            isLoop = false;
            break;
        } else if (stones_len === 0) {
            output = [];
            isLoop = false;
            break;
        }

        let l = stones_sorted[stones_len - 1], 
            l_1 = stones_sorted[stones_len - 2];

        if(l == l_1) {
            stones_sorted = stones_sorted.slice(0, stones_len -2);
        } else if (l != l_1) {
            stones_sorted = stones_sorted.slice(0, stones_len -2);
            stones_sorted.push(l - l_1)
        }

        // isLoop = false;

    }

    return output;
};
