const fs = require('fs')
const lines = fs.readFileSync(0).toString().trim().split(/\r\n|\r|\n/) //1.将数据转换为字符数组
// 2.记录前三行的内容，输出A序列和B序列
const n = +lines[0]
const AList = lines[1].trim().split(" ").map(v => +v);
const BList = new Array(n).fill('-1').map(v => +v);
const m = +lines[2]
//3.执行第三行后的操作
for (let z = 3; z < 3 + m; z++) {
    const line = lines[z].split(" ").map(v => +v);
    const first = line[0];//记录第一个数
    if (first === 1) {
        const len = line[1]; //len表示的就是k
        let aIndex = line[2] - 1;            //aIndex表示的就是x
        let bIndex = line[3] - 1;            //bIndex表示的就是y
        let i = 0;
        //对数据进行替换
        while (aIndex < n && bIndex < n && i < len) {
            BList[bIndex] = AList[aIndex];
            bIndex++;
            aIndex++;
            i++;
        }
    } else {
        process.stdout.write(BList[line[1] - 1] + '\n');
    }
}
