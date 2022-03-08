var simplifiedFractions = function (n) {
    const ans = [];
    for (let denominator = 2; denominator <= n; denominator++) {
        for (let numerator = 1; numerator < denominator; numerator++) {
            if (gcd(numerator, denominator) === 1) {
                ans.push(numerator + "/" + denominator);
            }
        }

    }
    return ans;
};
// 欧几里得法
const gcd = (numerator, denominator) => {
    return denominator === 0 ? numerator : gcd(denominator, numerator % denominator);
}


console.log(simplifiedFractions(2));
console.log(simplifiedFractions(3));
console.log(simplifiedFractions(4));
