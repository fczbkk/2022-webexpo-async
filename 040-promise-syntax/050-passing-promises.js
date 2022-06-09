function addFive (value) {
  return new Promise((resolve, reject) => typeof value === 'number'
    ? resolve(value + 5)
    : reject('adding: value must be a number')
  );
}

function subtractThree (value) {
  return new Promise((resolve, reject) => value > 20
    ? resolve(value - 3)
    : reject('subtracting: value must be at least twenty')
  );
}

addFive(2)
  .then(subtractThree)
  .then(console.log)
  .catch(console.error)
