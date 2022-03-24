//不推荐下面的题解方法 因为会浪费掉很大的内存空间
//#region 
// var containsNearbyAlmostDuplicate = function (nums, k, t) {
//     let map = new Map();
//     for (let i = 0; i < nums.length; i++) {
//         for (const [key, value] of map.entries()) {
//             if (value.includes(nums[i])) return true
//         }
//         //  nums[i] - t 是数字的下界限
//         map.set(nums[i], Array.from(new Array(2 * t + 1), (x, index) => index + nums[i] - t))
//         // set.add(nums[i]);
//         if (map.size > k) {
//             map.delete(nums[i - k]);
//         }
//     }
//     return false;

// };
//#endregion



var containsNearbyAlmostDuplicate = function (nums, k, t) {
    let set = new Set()
    for (let i = 0; i < nums.length; i++) {
        for (const v of set) {
            if (Math.abs(v - nums[i]) <= t) return true
        }
        set.add(nums[i]);
        if (set.size > k) {
            set.delete(nums[i - k]);
        }
    }
    return false
};
console.log(containsNearbyAlmostDuplicate([1, 2, 3, 1], 3, 0));
console.log(containsNearbyAlmostDuplicate([1, 0, 1, 1], 1, 2));
console.log(containsNearbyAlmostDuplicate([1, 5, 9, 1, 5, 9], 2, 3));