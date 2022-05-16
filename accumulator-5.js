let arr = [3, 5, 4, 2, 8, 9, 1, 6, 7, 10]

let accumulatorEven = [];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    accumulatorEven.push(arr[i])
  }
}
console.log(accumulatorEven)