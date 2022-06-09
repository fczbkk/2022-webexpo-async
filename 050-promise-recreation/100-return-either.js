const split = (value) => {
  const chunks = value.split(' ')
  return chunks.length < 2
    ? nothing('name has to have at least 2 parts')
    : something(chunks);
}

const flip = (value) => {
  return value.length > 2
    ? nothing('name is too long')
    : something(value.reverse())
}

const stitch = (value) => {
  return value.join(', ')
}

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

const getUser = (name) => typeof name === 'string' ? something(name) : nothing('name must be a string')

const user = getUser('Riki Fridrich')

user
  .next(split)
  .next(flip)
  .next(stitch)
  .next(console.log)
  .catch(console.error)
