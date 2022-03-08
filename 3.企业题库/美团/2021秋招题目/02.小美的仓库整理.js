/**
 * 小美是美团仓库的管理员，她会根据单据的要求按顺序取出仓库中的货物，每取出一件货物后会把剩余货物重新堆放，使得自己方便查找。已知货物入库的时候是按顺序堆放在一起的。如果小美取出其中一件货物，则会把货物所在的一堆物品以取出的货物为界分成两堆，这样可以保证货物局部的顺序不变。
已知货物最初是按 1~n 的顺序堆放的，每件货物的重量为 w[i] ,小美会根据单据依次不放回的取出货物。请问根据上述操作，小美每取出一件货物之后，重量和最大的一堆货物重量是多少？

格式：
输入：
- 输入第一行包含一个正整数 n ，表示货物的数量。
- 输入第二行包含 n 个正整数，表示 1~n 号货物的重量 w[i] 。
- 输入第三行有 n 个数，表示小美按顺序取出的货物的编号，也就是一个 1~n 的全排列。
输出：
- 输出包含 n 行，每行一个整数，表示每取出一件货物以后，对于重


示例:
输入：
     5
     3 2 4 4 5 
     4 3 5 2 1
输出：
     9
     5
     5
     3
     0
解释：
原本的状态是 {{3,2,4,4,5}} ，取出 4 号货物后，得到 {{3,2,4},{5}} ，第一堆货物的和是 9 ，然后取出 3 号货物得到 {{3,2}{5}} ，此时第一堆和第二堆的和都是 5 ，以此类推。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/TJZLyC
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
const fs = require('fs')
const lines = fs.readFileSync(0).toString().trim().split(/\r\n|\r|\n/);

const len = Number(lines[0]),
    weightStrArr = lines[1].split(' '),
    takeArr = lines[2].split(' ')
const prev = new Array(len + 1).fill(0), weightNumArr = new Array(len + 1).fill(0)
for (let z = 1; z <= len; z++) {
    weightNumArr[z] = Number(weightStrArr[z - 1])
    prev[z] += prev[z - 1] + weightNumArr[z]
}

const pos = new Array(len + 1).fill('').map(() => new Array(2).fill(-1))
const res = new Array(len).fill(0)
let tempMax = 0

for (let z = len - 1; z >= 0; z--) {
    const index = +takeArr[z]
    res[z] = tempMax
    if (z === 0) break

    let cur = weightNumArr[index]
    // 左边界和右边界，注意如果左右无连通区域则区间为[index, index]，所以初始化为index
    let left = index, right = index

    if (index + 1 <= len && pos[index + 1][0] !== -1) {
        cur += prev[pos[index + 1][1]] - prev[pos[index + 1][0] - 1]
        // 更新右边界
        right = pos[index + 1][1]
    }
    if (index - 1 > 0 && pos[index - 1][1] !== -1) {
        cur += prev[pos[index - 1][1]] - prev[pos[index - 1][0] - 1]
        // 更新左边界
        left = pos[index - 1][0]
    }

    tempMax = Math.max(tempMax, cur)
    // 更新两端点的左右区间
    pos[left][0] = left
    pos[left][1] = right
    pos[right][0] = left
    pos[right][1] = right
}

for (let z of res) {
    console.log(z)
}

