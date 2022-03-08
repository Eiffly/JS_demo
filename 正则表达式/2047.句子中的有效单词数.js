/**
 * @param {string} sentence
 * @return {number}
 */
var countValidWords = function (sentence) {
    const len = sentence.length;
    let res = 0;
    let substr = "";
    //仅由小写字母、连字符和/或标点（不含数字）。
    // 至多一个 连字符 '-' 。如果存在，连字符两侧应当都存在小写字母（"a-b" 是一个有效单词，但 "-ab" 和 "ab-" 不是有效单词）。
    // 至多一个 标点符号。如果存在，标点符号应当位于 token 的 末尾
    var pattern = /^([,.!]|[a-z]+(-[a-z]+)?[,.!]?)$/;
    // var pattern = /^([a-z]+(-[a-z]+)?[,.!]?$)/;
    // var pattern = /[a-z]+(-[a-z]+)?(\!|\.|\,)?$/g;
    for (let i = 0; i < len; i++) {
        // 判断是不是空格
        if (sentence.charAt(i) !== " ") {
            // 如果不是,拼接
            substr = substr + sentence.charAt(i);
        } else {
            if (pattern.test(substr)) {
                res++;
            }
            substr = "";
        }
    }
    //在循环结束之后 还要判断最后一个的是不是
    if (pattern.test(substr)) {
        res++;
    }

    return res;
};

console.log(countValidWords("cat and  dog"));
console.log(countValidWords("!this  1-s b8d!"));
console.log(countValidWords("alice and  bob are playing stone-game10"));
console.log(countValidWords("he bought 2 pencils, 3 erasers, and 1  pencil-sharpener."));
console.log(countValidWords("!this  1 - s b8d!")); //0
console.log(countValidWords("!")); //1