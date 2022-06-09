const something = (value) => ({
  next: (fn) => something(fn(value))
})

const user = something('Riki Fridrich')

user
  .next((value) => value.split(' '))
  .next((value) => value.reverse())
  .next((value) => value.join(', '))
  .next(console.log)
