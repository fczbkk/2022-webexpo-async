function getValuePromise () {
  return new Promise((resolve) => resolve('some value'))
}

function getValue (callback) {
  callback(null, 'some value')
}
