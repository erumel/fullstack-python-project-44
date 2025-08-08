import getRandomInt from '../lib/utils.js'

const rules = 'Find the greatest common divisor of given numbers.'

const gcd = (a, b) =>
  b === 0 ? a : gcd(b, a % b)

const generateLvl = () => {
  const num1 = getRandomInt()
  const num2 = getRandomInt()

  const question = `${num1} ${num2}`

  const correctAnswer = gcd(Math.abs(num1), Math.abs(num2))
  return [question, String(correctAnswer)]
}

export { rules, generateLvl }
