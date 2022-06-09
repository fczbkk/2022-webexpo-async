async function getValueAsync () {
  return 'some value';
}

console.log('ASYNC FUNCTION:', getValueAsync());


function getValuePromise () {
  return new Promise((resolve) => resolve('some value'));
}

console.log('PROMISE:', getValuePromise());
