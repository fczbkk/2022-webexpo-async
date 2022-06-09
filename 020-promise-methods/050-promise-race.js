function delayFailure (seconds) {
  return new Promise((_, reject) => setTimeout(
    () => reject('time is up'),
    seconds * 1000
  ));
}

function delaySuccess (seconds, value) {
  return new Promise((resolve) => setTimeout(
    () => resolve(value),
    seconds * 1000
  ));
}

Promise.race([
  delaySuccess(1, 'fast'),
  delaySuccess(5, 'slow'),
  delayFailure(2)
])
  .then((result) => console.log('SUCCESS', result))
  .catch((error) => console.error('FAIL', error));
