import getRandomInt from '../lib/utils.js'

const rules = 'What number is missing in the progression?'

const getProgression = () => {
  const progression = []
  const start = getRandomInt(-20, 20)
  const step = getRandomInt(2, 10)

  for (let i = 0; i < 10; i++) {
    progression[i] = start + step * i
  }

  return progression
}

const generateLvl = () => {
  const progressionArray = getProgression()
  const missIndex = getRandomInt(0, progressionArray.length - 1)

  const correctAnswer = progressionArray[missIndex]
  progressionArray[missIndex] = '..'

  const question = progressionArray.join(' ')

  return [question, String(correctAnswer)]
}

export { rules, generateLvl }
