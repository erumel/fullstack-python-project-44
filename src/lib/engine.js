import readlineSync from 'readline-sync'

const gameEngine = (rules, generateLvl) => {
  const totalLevels = 3

  console.log('Welcome to the Brain Games!')
  const userName = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${userName}!`)

  for (let i = 0; i < totalLevels; i++) {
    const [question, correctAnswer] = generateLvl()
    const userAnswer = readlineSync.question(`Question: ${question}\nYour answer: `)

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
      console.log(`Let's try again, ${userName}!`)
      return
    }
    console.log('Correct!')
  }
  console.log(`Congratulations, ${userName}!`)
}

export default gameEngine
