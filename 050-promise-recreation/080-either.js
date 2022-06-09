const split = (value) => value.split(' ')
const flip = (value) => value.reverse()
const stitch = (value) => value.join(', ')

const isEither = (value) => value && value.next && value.catch

const something = (value) => ({
  next: (fn) => something(fn(value)),
  catch: () => nothing()
})

const nothing = (error) => ({
  next: () => nothing(error),
  catch: (fn) => something(fn(error))
})

const getUser = (name) => typeof name === 'string' ? something(name) : nothing()

const user = getUser('Riki Fridrich')

user
  .next(split)
  .next(flip)
  .next(stitch)
  .next(console.log)
  .catch(console.error)
