/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function (list1, list2) {
    // let map = new Map()
    let min = Number.MAX_VALUE
    let res = []
    let str = ""
    // 遍历第一个数组中的数值 看其在第二个数组中是否是存在的
    for (let i = 0; i < list1.length; i++) {
        let j = list2.findIndex(e => e === list1[i])
        if ((j !== -1)) {
            if (j + i < min) {
                min = i + j
                res = [list1[i]]
            } else if (j + i === min) {
                res.push(list1[i])
            }
           
        }
    }
    return res
};
console.log(findRestaurant(["Shogun", "Tapioca Express", "Burger King", "KFC"],
    ["Piatti", "The Grill at Torrey Pines", "Hungry Hunter Steakhouse", "Shogun"]));

console.log(findRestaurant(["Shogun", "Tapioca Express", "Burger King", "KFC"],
    ["KFC", "Shogun", "Burger King"]));

console.log(findRestaurant(["Shogun", "Piatti", "Tapioca Express", "Burger King", "KFC"],
    ["Piatti", "The Grill at Torrey Pines", "Hungry Hunter Steakhouse", "Shogun"]));