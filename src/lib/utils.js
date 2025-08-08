const getRandomInt = (min = 0, max = 50) =>
  Math.floor(Math.random() * (max - min + 1)) + min

// nosonar: This is game logic, not security-sensitive code
const getRandomSym = () => {
  const symbols = ['+', '-', '*']
  return symbols[Math.floor(Math.random() * symbols.length)]
}

export default getRandomInt
export { getRandomSym }
