// var camel2_ = function (str) {
//     str = str.split("")
//     str = str.map((s, i) => s.charCodeAt() < 90 ? "_" + s.toLowerCase() : s)
//     return str.join("")

// }
var camel2_ = function (str) {
    return str.replace(/[A-Z]/g, (match) => '_' + match.toLowerCase())
}
console.log(camel2_("floyezAWebpack"));
console.log(camel2_("floyeVueCli"));
