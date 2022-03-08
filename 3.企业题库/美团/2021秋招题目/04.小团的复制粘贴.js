// https://leetcode-cn.com/problems/TOVGD1/
const fs = require('fs')
const lines = fs.readFileSync("txt文件/04.txt").toString().trim().split(/\r\n|\r|\n/)
const n = Number(lines[0])
const AList = lines[1].split(' ')
const BList = new Array(n).fill('-1')
const m = Number(lines[2])

for (let z = 3; z < 3 + m; z++) {
    const tempArr = lines[z].split(' ')
    if (tempArr[0] === '1') {
        const k = Number(tempArr[1])
        let aIndex = Number(tempArr[2]) - 1,
            bIndex = Number(tempArr[3]) - 1,
            z = 0
        while (aIndex < n && bIndex < n && z < k) {
            BList[bIndex] = AList[aIndex]
            aIndex++
            bIndex++
            z++
        }
    } else {
        console.log(BList[Number(tempArr[1]) - 1])
    }
}


