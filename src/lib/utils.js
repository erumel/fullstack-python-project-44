// nosonar: This is game logic, not security-sensitive code
const getRandomInt = (min = 0, max = 50) =>
  Math.floor(Math.random() * (max - min + 1)) + min

const getRandomSym = () => {
  const symbols = ['+', '-', '*']
  return symbols[Math.floor(Math.random() * symbols.length)] // nosonar: This is game logic, not security-sensitive code
}

export default getRandomInt
export { getRandomSym }
