const split = (value) => value.split(' ')
const flip = (value) => value.reverse()
const stitch = (value) => value.join(', ')

const something = (value) => ({
  next: (fn) => something(fn(value))
})

const nothing = () => ({
  next: () => nothing()
})

const getUser = (name) => typeof name === 'string' ? something(name) : nothing('name must be a string')

const user = getUser('Riki Fridrich')

user
  .next(split)
  .next(flip)
  .next(stitch)
  .next(console.log)
