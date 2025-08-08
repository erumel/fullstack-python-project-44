// NOSONAR: Math.random usage is safe in this context (game logic)
const getRandomInt = (min = 0, max = 50) =>
  Math.floor(Math.random() * (max - min + 1)) + min

export default getRandomInt
