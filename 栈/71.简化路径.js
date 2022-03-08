var simplifyPath = function (path) {
    // 划分出来相应的
    const routes = path.split("/");
    const stack = [];
    // 划分相应的区间
    for (const route of routes) {
        // 对于「两个点」，弹出相应的目录
        if (route === '..') {
            if (stack.length) {
                stack.pop();
            }
        } else if (route.length && route !== ".") {
            // 对于「空字符串」以及「一个点」，我们实际上无需对它们进行处理
            stack.push(route);
        }

    }
    return "/" + stack.join("/");

};
console.log(simplifyPath("/home/"));