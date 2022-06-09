const something = (value) => ({
  next: (fn) => something(fn(value))
})

const user = something('Riki Fridrich')
user.next(console.log)
