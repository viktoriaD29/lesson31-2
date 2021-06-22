export const asyncCalculator = (number) => new Promise((resolve) => {
  setTimeout(() => {
    console.log(`Initial value: ${number}`)
    resolve(number)
  }, 500)
})
  .then(value => new Promise((resolve) => {
    setTimeout(() => {
      const result = value * value;
      console.log(`Squared value: ${result}`)
      resolve(result)
    }, 3000)
  }))
  .then(value => {
    const result = value * 2;
    console.log(`Doubled value: ${result}`)
    return result
  })

asyncCalculator(5)
  .then(value => console.log(value))