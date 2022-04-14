//要求“原地修改数组 使用O(1)的额外空间

//1.利用splice方法原地修改,其他的方式好像行不通呢
var removeDuplicates = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i + 1]) {
            nums.splice(i, 1);
            i--
        }
    }
    return nums.length
};


//2.因为数组是有序的，可以采用双指针来实现（双层双指针）
var removeDuplicates = function (nums) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                arr.splice(j, 1) //表示删除j当前位置的元素
                j--
            }
        }
    }
    return nums.length
};

//3.因为数组是有序的，可以采用双指针来实现
var removeDuplicates = function (nums) {
    if (nums === null || nums.length === 0) return 0;
    let l = 0;
    let r = 1;
    while (r < nums.length) {
        if (nums[l] !== nums[r]) {
            nums[l + 1] = nums[r];
            l++;
        }
        r++;
    }
    return l + 1;
}
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));