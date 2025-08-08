// @ts-ignore: Math.random is acceptable in this game context
const getRandomInt = (min = 0, max = 50) =>
  Math.floor(Math.random() * (max - min + 1)) + min

const getRandomSym = () => {
  const symbols = ['+', '-', '*']
  return symbols[Math.floor(Math.random() * symbols.length)]// @ts-ignore: Math.random is acceptable in this game context
}

export default getRandomInt
export { getRandomSym }
