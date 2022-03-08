
const getNext = (function () {
    const lines = require('fs').readFileSync("txt文件/12.txt").toString().split(/\r\n|\r|\n/)
    let i = 0;
    return () => lines[i++].trim().split(' ').map(x => 1 * x)
})()

let [M, N, Q] = getNext()
const Shelf = new Array(N + 1).fill(false) //false表示没有被锁起来
const Book = new Array(M + 1).fill(0)   //0表示可以借阅 -1表示在小团手里 其他表示在某一书架上
while (Q--) {
    let caozuo = getNext()
    let x, y, res
    switch (caozuo[0]) {
        case 1:
            x = caozuo[1]
            y = caozuo[2]
            //最后一部类似于剪切操作
            if (!Shelf[y] && Book[x] !== -1 && !Shelf[Book[x]]) {
                Book[x] = y
            }
            break
        case 2:
            Shelf[caozuo[1]] = true
            break
        case 3:
            Shelf[caozuo[1]] = false
            break
        case 4:
            x = caozuo[1]
            res = -1
            // 有书 并且 书架没有被锁
            if (Book[x] > 0 && !Shelf[Book[x]]) {
                res = Book[x]
                Book[x] = -1
            }
            console.log(res)
            break
        case 5:
            x = caozuo[1]
            if (Book[x] === -1) {
                Book[x] = 0
            }
            break
    }
}