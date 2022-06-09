function delay (seconds) {
  console.log('delay start:', seconds)
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('delay done:', seconds)
      resolve()
    }, seconds * 1000)
  })
}

// good luck generating this in a loop
delay(1)
  .then(() => delay(2))
  .then(() => delay(3))
