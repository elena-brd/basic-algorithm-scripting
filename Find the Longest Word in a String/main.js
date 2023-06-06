function findLongestWordLength(str) {
    let word = str.split(' ');
    let result = 0;
    for (let i = 0; i < word.length; i++) {
        if (word[i].length >= result) {
            result = word[i].length;
        }
    }
    return result;
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));