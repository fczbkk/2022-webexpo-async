const something = (value) => ({
  next: (fn) => fn(value)
})

const user = something('Riki Fridrich')
user.next(console.log)
