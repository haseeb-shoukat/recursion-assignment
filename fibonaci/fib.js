const fibs = function (num) {
  if (num <= 0) return "Enter Valid Number";
  let arr = [];
  for (let x = 0; x < num; x++) {
    if (x == 0 || x == 1) {
      arr.push(x);
    } else {
      arr.push(arr[x - 1] + arr[x - 2]);
    }
  }
  return arr;
};

const fibsRec = function (num) {
  return num <= 0
    ? "Please Enter Valid Number"
    : num == 1
    ? [1]
    : num == 2
    ? [0, 1]
    : [
        ...fibsRec(num - 1),
        fibsRec(num - 1)[num - 2] + fibsRec(num - 1)[num - 3],
      ];
};

console.log(fibs(8));
console.log(fibsRec(8));
