import getRandomInt, { getRandomSym } from '../lib/utils.js'

const rules = 'What is the result of the expression?'

const generateLvl = () => {
  const num1 = getRandomInt()
  const sym = getRandomSym()
  const num2 = getRandomInt()
  let correctAnswer = 0

  const question = `${num1} ${sym} ${num2}`

  switch (sym) {
    case '+':
      correctAnswer = num1 + num2
      break
    case '-':
      correctAnswer = num1 - num2
      break
    case '*':
      correctAnswer = num1 * num2
  }

  return [question, String(correctAnswer)]
}

export { rules, generateLvl }
