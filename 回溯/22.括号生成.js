//本题用回溯法
//可以与之前的20题一起研究
var generateParenthesis = function (n) {
    let res = []

    var dfs = function (open, close, sub) {
        if (sub.length === 2 * n) {
            res.push(sub)
            return
        }
        if (open < n) {
            // sub += "("
            dfs(open + 1, close, sub + "(")
            sub.substring(0, sub.length - 1)
        }
        if (close < open) {
            // sub += ")"
            dfs(open, close + 1, sub + ")")
            sub.substring(0, sub.length - 1)
        }
    }
    dfs(0, 0, "")
    return res
};
console.log(generateParenthesis(3));
console.log(generateParenthesis(1));