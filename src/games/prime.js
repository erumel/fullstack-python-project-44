import getRandomInt from '../lib/utils.js'

const isPrime = (num) => {
  if (num <= 1)
    return false
  if (num <= 3)
    return true
  if (num % 2 === 0 || num % 3 === 0)
    return false

  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0)
      return false
  }

  return true
}

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".'

const generateLvl = () => {
  const number = getRandomInt(1, 100)
  const question = String(number)
  const correctAnswer = isPrime(number) ? 'yes' : 'no'
  return [question, correctAnswer]
}

export { rules, generateLvl }
