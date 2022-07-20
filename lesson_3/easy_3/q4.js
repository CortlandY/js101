let arr1 = [{ first: "value1" }, { second: "value2" }, 3, 4, 5];
let arr2 = arr1.slice();
arr2[0].first = 42;
console.log(arr1);

// outputs { first: 42 }, { second: "value2" }, 3, 4, 5
// since we have a shallow copy, arr1[0] and arr2[0] are the same
