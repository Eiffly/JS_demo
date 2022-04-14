var _2camel = function (str) {
    str = str.split("_")
    str = str.map((s, i) => i === 0 ? s : s[0].toUpperCase() + s.slice(1))
    return str.join("")
}
console.log(_2camel("floye_webpack"));
console.log(_2camel("floye_vue_cli"));