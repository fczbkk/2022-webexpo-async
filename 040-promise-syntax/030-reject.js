function addFive (value) {
  return new Promise((resolve, reject) => typeof value === 'number'
    ? resolve(value + 5)
    : reject('value must be a number')
  );
}

addFive('x')
  .then(console.log)
  .catch(console.error);
