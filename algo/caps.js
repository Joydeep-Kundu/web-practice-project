function titleCase(str) {
    let d = "";
    let j = 1;
    let str2 = str.toLowerCase().split('');

    for (let i of str2) {
        if (j === 1) {
            d = d + i.toUpperCase();
            j = 0;
        }
        else {
            if (i === ' ') {
                j = 1;
            }
            d = d + i;
        }
    }
    console.log(d)
}
function frankenSplice(arr1, arr2, n) {
    let a;
    a = arr1.slice(0);
    console.log(a, arr1);
    arr2.splice(n, 0, ...a);
    return arr2;
}
console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));
frankenSplice([1, 2, 3], [4, 5, 6], 1);