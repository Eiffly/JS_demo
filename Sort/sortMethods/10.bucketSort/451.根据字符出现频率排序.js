/**
 * @param {string} s
 * @return {string}
 */
/* 由于每个字符在字符串中出现的频率存在上限，因此可以使用桶排序的思想，根据出现次数生成排序后的字符串。具体做法如下：

- 遍历字符串，统计每个字符出现的频率，同时记录最高频率 \textit{ maxFreq } maxFreq；
- 创建桶，存储从 11 到 \textit{ maxFreq }maxFreq 的每个出现频率的字符；
- 按照出现频率从大到小的顺序遍历桶，对于每个出现频率，获得对应的字符，然后将每个字符按照出现频率拼接到排序后的字符串。

 */
var frequencySort = function (s) {
    const mp = new Map();
    let maxFreq = 0;
    const length = s.length;
    for (const ch of s) {
        mp.set(ch, (mp.get(ch) || 0) + 1)
        const frequency = mp.get(ch)
        maxFreq = Math.max(maxFreq, frequency);
    }
    const buckets = new Array(maxFreq + 1).fill(0).map(() => new Array());
    for (const [ch, num] of mp.entries()) {
        buckets[num].push(ch);
    }
    let res = ""
    for (let i = buckets.length - 1; i >= 0; i--) {
        if (buckets[i].length !== 0) {
            for (const c of buckets[i]) {
                res += c.repeat(i)
            }
        }
    }

    return res
}

console.log(frequencySort("tree"));