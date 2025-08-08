/**
 * Generates a random integer between min and max (inclusive).
 * @param {number} min - Minimum value (default: 0)
 * @param {number} max - Maximum value (default: 50)
 * @returns {number} Random integer
 * @nosonar Math.random usage is safe here (game doesn't require cryptographic security)
 */
const getRandomInt = (min = 0, max = 50) =>
  Math.floor(Math.random() * (max - min + 1)) + min

/**
 * Randomly selects one of the basic math operators.
 * @returns {string} Random operator (+, -, *)
 * @nosonar Predictable randomness is acceptable for game operations
 */
const getRandomSym = () => {
  const symbols = ['+', '-', '*']
  return symbols[Math.floor(Math.random() * symbols.length)]
}

export default getRandomInt
export { getRandomSym }
