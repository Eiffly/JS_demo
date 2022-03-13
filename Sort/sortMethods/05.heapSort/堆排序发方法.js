function heapSort(arr) {
    // 构建初始大顶堆
    buildMaxHeap(arr);
    for (let i = arr.length - 1; i > 0; i--) {
        // 将最大值交换到数组最后
        // swap(arr, 0, i);
        [arr[0], arr[i]] = [arr[i], arr[0]]
        // 调整剩余数组，使其满足大顶堆
        maxHeapify(arr, 0, i);
    }
}
// 构建初始大顶堆
function buildMaxHeap(arr) {
    // 从最后一个非叶子结点开始调整大顶堆，最后一个非叶子结点的下标就是 arr.length / 2-1
    for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
        maxHeapify(arr, i, arr.length);
    }
}
// 调整大顶堆，第三个参数表示剩余未排序的数字的数量，也就是剩余堆的大小
function maxHeapify(arr, i, heapSize) {
    // 左子结点下标
    let l = 2 * i + 1;
    // 右子结点下标
    let r = l + 1;
    // 记录根结点、左子树结点、右子树结点三者中的最大值下标
    let largest = i;
    // 与左子树结点比较
    if (l < heapSize && arr[l] > arr[largest]) {
        largest = l;
    }
    // 与右子树结点比较
    if (r < heapSize && arr[r] > arr[largest]) {
        largest = r;
    }
    if (largest != i) {
        // 将最大值交换为根结点
        [arr[largest], arr[i]] = [arr[i], arr[largest]]

        // 再次调整交换数字后的大顶堆
        maxHeapify(arr, largest, heapSize);
    }
}

