function addFive (value) {
  return new Promise((resolve) => resolve(value + 5))
}

addFive(2)
  .then(console.log)
