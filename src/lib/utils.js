// nosemgrep: javascript.lang.security.audit.math-random-used.math-random-used
const getRandomInt = (min = 0, max = 50) =>
  Math.floor(Math.random() * (max - min + 1)) + min

export default getRandomInt
