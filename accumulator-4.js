let arr = ['Deni', 'Ahmed', 'Zelemhan', 'Ramzan', 'Movsar', 'Alvi', 'Askhab', 'Mohmad', 'Emin', 'Viskhan']

let accumulator = [];

for (let i = 0; i < arr.length; i++) {
  if (arr[i][0] === 'A' || arr[i][0] === 'a') {
    accumulator.push(arr[i])
  }
}
console.log(accumulator)