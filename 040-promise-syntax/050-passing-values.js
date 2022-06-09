Promise.resolve(10)
  .then((value) => {
    console.log(value);
    return 'x';
  })
  .then((value) => {
    console.log(value);
    return true;
  })
  .then((value) => {
    console.log(value)
  });
