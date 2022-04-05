
var findLeftIndex = function (nums, target) {
    let left = 0
    let right = nums.length - 1
    while (left < right) {
        mid = (left + right) >> 1
        if (nums[mid] < target) {
            //说明leftIndex在[mid+1,right]
            left = mid + 1
        } else if (nums[mid] === target) {
            // leftIndex在[left,mid]
            right = mid
        } else {
            // leftIndex在[left,mid-1]
            right = mid - 1
        }
    }
    if (nums[left] === target) {
        return left
    }
    return -1
}



var findRightIndex = function (nums, target) {
    let left = 0
    let right = nums.length - 1
    while (left < right) {
        // 注意这里有加一，代表着向上取整
        mid = (left + right + 1) >> 1
        if (nums[mid] < target) {
            //说明rightIndex在[mid+1,right]
            left = mid + 1
        } else if (nums[mid] === target) {
            // 说明rightIndex在在[mid,right]！！！！！！！！！！！
            left = mid
        } else {
            // 说明rightIndex在在[mid-1,right]
            right = mid - 1
        }
    }
    return right
}


var searchRange = function (nums, target) {
    // 特殊情况处理
    if (nums.length === 0) return [-1, -1]

    const left = findLeftIndex(nums, target);
    if (left == -1) {
        return [-1, -1]
    }
    const right = findRightIndex(nums, target);

    return [left, right]
};

console.log(searchRange([5, 7, 7, 8, 8, 10], 8));
console.log(searchRange([5, 7, 7, 8, 8, 10], 6));
console.log(searchRange([], 0));