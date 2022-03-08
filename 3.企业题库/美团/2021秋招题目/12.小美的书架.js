//https://leetcode-cn.com/problems/FvoBGh/
/**
 * 输入：
- 第一行三个正整数 M，N，Q，表示小美书架有 N 行编号 1 到 N ，书本编号从 1 到 M ，接下来有 Q 个操作
- 接下来 Q 行，每行是下列操作中的一种：
  1. x y : x 是书本的编号，y 是书架的行编号，代表小美将编号为 x 的书本放置到 y 行上。若该书本在小团手上则放置无效，
    若原来该书在书架上且原行上锁则放置无效，若该书被放置到一个锁了的行上则放置无效。
  2. y : y 是书架的行编号，代表小美将行编号为 y 的书架加锁，对已经上锁的书架行该操作无效。
  3. y : y 是书架的行编号，代表小美将行编号为 y 的书架锁去掉，对无锁的书架行该操作无效。
  4. x : x 是书本的编号，代表小团想借编号为 x 的书本，对该操作若可以借到输出一行正整数在哪一行，借不到输出一行 -1
  5. x : x 是书本的编号，代表小团还回来编号为 x 的书本。若该书本不在小团手上该操作无效。
输出：
- 对于每个操作 4 ，若可以借到输出一行正整数在哪一行，借不到输出一行 -1 。

 */
const getNext = (function () {
    const lines = require('fs').readFileSync("txt文件/12.txt").toString().split(/\r\n|\r|\n/)
    let i = 0;
    return () => lines[i++].trim().split(' ').map(x => 1 * x)
})()

let [M, N, Q] = getNext()
const Shelf = new Array(N + 1).fill(false)
const Books = new Array(M + 1).fill(0)
while (Q--) {
    let nums = getNext()
    let x, y, res;
    switch (nums[0]) {
        case 1:
            x = nums[1]
            y = nums[2]
            if (Books[x] !== -1 && !Shelf[y] && !Shelf[Books[x]]) Books[x] = y
            break
        case 2:
            Shelf[nums[1]] = true
            break
        case 3:
            Shelf[nums[1]] = false
            break
        case 4:
            res = -1
            x = nums[1]
            if (Books[x] !== 0 && !Shelf[Books[x]]) {
                res = Books[x]
                Books[x] = -1 //表示已经借走
            }
            console.log(res)
            break
        case 5:
            x = nums[1]
            if (Books[x] == -1) Books[x] = 0
            break
    }
}

