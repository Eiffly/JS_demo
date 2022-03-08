const fs = require("fs");
// 输入格式： 获取单个用例的所有行，此时 lines[0] 为第一行数据
/**
 * 下面的v表示数组中的每个元素的处理，最后lines为一个二维数组（每行的第一个元素为v 第二个为w）
 每行有两个正整数 v 和 w  ，表示一个订单的跑腿价格和商品重量。
 */
const lines = fs.readFileSync("txt文件/03.txt").toString().trim().split(/\r\n|\n/).map(v => v.split(" "));
const M = +lines[0][1];//+ 表示的是转换为相应的数字
const data = lines.slice(1).map((v, i) => [i + 1, +v[0] + +v[1] * 2]);
// 下面的可以写在一行，也可以写在多行
const ans = data
    .sort((a, b) => b[1] - a[1]). //先进行降徐排序，排序依据是每个元素的第二个
    slice(0, M).
    map(v => v[0]).
    sort((a, b) => a - b);
console.log(ans);
console.log(ans.join(" "));
// NodeJS里面
// /***
//  * process对象用于处理与当前进程相关的事情，它是一个全局对象，可以在任何地方直接访问到它而无需引入额外模块
//     一个指向标准输出流(stdout)的 可写的流(Writable Stream)
// */
process.stdout.write(ans.join(" "));

