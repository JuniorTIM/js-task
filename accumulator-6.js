let arr = [3, 5, 4, 2, 8, 9, 1, 6, 7, 10]

let accumulatorOdd = [];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 !== 0) {
    accumulatorOdd.push(arr[i])
  }
}
console.log(accumulatorOdd)