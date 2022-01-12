function getMaxSubSum(arr) {
    let maxSum = 0;
    let sumaParcial = 0;

    for (let item of arr) { // para cada item de array
        sumaParcial += item; // añadirlo a sumaParcial
        maxSum = Math.max(maxSum, sumaParcial); // recuerda el máximo
        if (sumaParcial < 0) sumaParcial = 0; // cero si negativo
    }

    return maxSum;
}

alert(getMaxSubSum([-1, 2, 3, -9])); // 5
alert(getMaxSubSum([-1, 2, 3, -9, 11])); // 11
alert(getMaxSubSum([-2, -1, 1, 2])); // 3
alert(getMaxSubSum([100, -9, 2, -3, 5])); // 100
alert(getMaxSubSum([1, 2, 3])); // 6
alert(getMaxSubSum([-1, -2, -3])); // 0