function shellSort(arr) {
    // 间隔序列，在希尔排序中我们称之为增量序列
    for (let gap = Math.floor(arr.length / 2); gap > 0; gap = Math.floor(gap /= 2)) {
        // 分组
        for (let groupStartIndex = 0; groupStartIndex < gap; groupStartIndex++) {
            // 插入排序
            for (let currentIndex = groupStartIndex + gap; currentIndex < arr.length; currentIndex += gap) {
                // currentNumber 站起来，开始找位置
                let currentNumber = arr[currentIndex];
                let preIndex = currentIndex - gap;
                while (preIndex >= groupStartIndex && currentNumber < arr[preIndex]) {
                    // 向后挪位置
                    arr[preIndex + gap] = arr[preIndex];
                    preIndex -= gap;
                }
                // currentNumber 找到了自己的位置，坐下
                arr[preIndex + gap] = currentNumber;
            }
        }
    }
}

function shellSort(arr) {
    // 间隔序列，在希尔排序中我们称之为增量序列
    for (let gap = Math.floor(arr.length / 2); gap > 0; gap = Math.floor(gap /= 2)) {
        // 从 gap 开始，按照顺序将每个元素依次向前插入自己所在的组
        for (let i = gap; i < arr.length; i++) {
            // currentNumber 站起来，开始找位置
            let currentNumber = arr[i];
            // 该组前一个数字的索引
            let preIndex = i - gap;
            while (preIndex >= 0 && currentNumber < arr[preIndex]) {
                // 向后挪位置
                arr[preIndex + gap] = arr[preIndex];
                preIndex -= gap;
            }
            // currentNumber 找到了自己的位置，坐下
            arr[preIndex + gap] = currentNumber;
        }
    }
}

