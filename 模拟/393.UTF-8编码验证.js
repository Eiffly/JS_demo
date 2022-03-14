function validUtf8(data) {
    let n = data.length;
    for (let i = 0; i < n;) {
        let t = data[i], j = 7
        while (j >= 0 && (((t >> j) & 1) === 1)) j--
        let cnt = 7 - j
        if (cnt === 1 || cnt > 4) return false
        if (i + cnt - 1 >= n) return false
        for (let k = i + 1; k < i + cnt; k++) {
            if ((((data[k] >> 7) & 1) === 1) && ((((data[k] >> 6) & 1) === 0))) continue
            return false
        }
        if (cnt === 0) i++;
        else i += cnt;
    }
    return true;
}

console.log(validUtf8([197, 130, 1]));
console.log(validUtf8([235, 140, 4]));


