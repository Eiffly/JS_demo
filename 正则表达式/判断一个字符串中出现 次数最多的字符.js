// 判断一个字符串中出现次数最多的字符，并统计次数
var s = 'aaaaacccccbbbbb';

var a = s.split('');
a.sort();
s = a.join(''); //默认
var pattern = /(\w)\1*/g;                           /// ==> 这里\1是什么意思？如果不写这个会怎样？
var ans = s.match(pattern);
ans.sort(function (a, b) {
    return a.length < b.length;
});;
console.log(ans[0][0] + ': ' + ans[0].length);

// 有\1的情况下ans的值为：["aaaaa", "bbbbb", "ccccc"]
// 没有\1的情况下ans的值为：["aaaaabbbbbccccc"]
// 如果是\2或者\3呢 ?     ans值为：["a", "a", "a", "a", "a", "b", "b", "b", "b", "b", "c", "c", "c", "c", "c"]
// 正则表达式中的小括号"()"。是代表分组的意思。 如果再其后面出现\1则是代表与第一个小括号中要匹配的内容相同。
// 注意：\1必须与小括号配合使用