// Length of Last Word
// Example 1:
// Input: s = "Hello World"
// Output: 5
// Explanation: The last word is "World" with length 5.

// Example 2:
// Input: s = "   fly me   to   the moon  "
// Output: 4
// Explanation: The last word is "moon" with length 4.

// Example 3:
// Input: s = "luffy is still joyboy"
// Output: 6
// Explanation: The last word is "joyboy" with length 6.

//  @param {string} s
//  @return {number}

var lengthOfLastWord = function (s) {
    let word = s.trim();
    let wrdSplit = word.split(" ");
    let lastWord = wrdSplit[wrdSplit.length - 1]
    console.log(lastWord)
    return lastWord.length;
};