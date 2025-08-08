// NOSONAR: Math.random usage is safe in this context (game logic)
const getRandomInt = (min = 0, max = 50) =>
  Math.floor(Math.random() * (max - min + 1)) + min

// NOSONAR: Math.random usage is safe in this context (game logic)
const getRandomSym = () => {
  const symbols = ['+', '-', '*']
  return symbols[Math.floor(Math.random() * 3)]
}

export default getRandomInt
export { getRandomSym }
