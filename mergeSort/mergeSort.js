const mergeSort = function (arr) {
    return arr.length < 2 ? arr: merge(mergeSort(arr.slice(0, Math.floor(arr.length / 2))), mergeSort(arr.slice(Math.floor(arr.length / 2))));
}

const merge = function (arr1, arr2) {
    let arr = [];
    let i = j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            arr.push(arr1[i])
            i++
        }
        else {
            arr.push(arr2[j]);
            j++
        }
    }

    if (i < arr1.length) {
        arr = arr.concat(arr1.slice(i));
    }
    else {
        arr = arr.concat(arr2.slice(j));
    }

    return arr;
}

console.log(mergeSort([1, 3, 2, 4, 0, 5]))