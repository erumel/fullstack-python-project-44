import getRandomInt from '../lib/utils.js'

const isEven = num => num % 2 === 0
const rules = 'Answer "yes" if the number is even, otherwise answer "no".'

const generateLvl = () => {
  const number = getRandomInt(1, 100)
  const question = String(number)
  const correctAnswer = isEven(number) ? 'yes' : 'no'
  return [question, correctAnswer]
}

export { rules, generateLvl }
