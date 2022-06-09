const split = (value) => value.split(' ')
const flip = (value) => value.reverse()
const stitch = (value) => value.join(', ')

const isEither = (value) => value && value.next && value.catch

const something = (value) => ({
  next: (fn) => {
    const nextValue = fn(value)
    return isEither(nextValue) ? nextValue : something(nextValue)
  },
  catch: () => isEither(value) ? value : nothing(value)
})

const nothing = (value) => ({
  next: () => isEither(value) ? value : nothing(value),
  catch: (fn) => {
    const nextValue = fn(value)
    return isEither(nextValue) ? nextValue : something(nextValue)
  }
})

const getUser = (name) => typeof name === 'string' ? something(name) : nothing()

const user = getUser('Riki Fridrich')

user
  .next(split)
  .next(flip)
  .next(stitch)
  .next(console.log)
  .catch(console.error)
