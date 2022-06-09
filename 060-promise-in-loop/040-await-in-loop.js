function delay (seconds) {
  console.log('delay start:', seconds)
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('delay done:', seconds)
      resolve()
    }, seconds * 1000)
  })
}

for (let i = 1; i <= 3; i++) {
  await delay(i)
}
