let arr = [3, 5, -4, 2, 8, -9, -1, 6, 7, 10]

let i = 0;
let accumulator = 0;

while (i <= arr.length) {
    if (arr[i] > 0) {
        accumulator += arr[i]
    }
  i++
}
console.log(accumulator)