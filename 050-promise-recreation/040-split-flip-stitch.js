const split = (value) => value.split(' ')
const flip = (value) => value.reverse()
const stitch = (value) => value.join(', ')

const something = (value) => ({
  next: (fn) => something(fn(value))
})

const user = something('Riki Fridrich')

user
  .next(split)
  .next(flip)
  .next(stitch)
  .next(console.log)
