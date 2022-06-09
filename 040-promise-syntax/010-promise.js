const someValue = 2

const addFive = new Promise((resolve) => resolve(someValue + 5))

addFive
  .then(console.log)
