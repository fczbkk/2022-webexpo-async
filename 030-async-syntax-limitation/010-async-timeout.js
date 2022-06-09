function delayCallback (seconds, callback) {
  setTimeout(callback, seconds * 1000)
}

function delayPromise (seconds) {
  return new Promise((resolve) => {
    setTimeout(resolve, seconds * 1000)
  })
}

async function delayAsync (seconds) {
  // ¯\_(ツ)_/¯
}
