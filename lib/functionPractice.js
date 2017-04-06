
const add = function (x, y) {
  return x + y
}

const calculator = function (x, y, z) {
  if (z === 'add') {
    return x + y
  } else if (z === 'subtract') {
    return x - y
  }
}

const summationMath = function (n) {
  return n * (n + 1) / 2
}

const summationLooping = function (n) {
  let sum = 0
  for (let i = 0; i <= n; i++) {
    sum = sum += i
  }
  return sum
}

const avg = function (array) {
  const addAll = array.reduce(function (acc, val) {
    return (acc + val)
  }, 0)
  return addAll / array.length
}

const summationEven = function (n) {
  let sum = 0
  for (let i = 0; i <= n; i += 2) {
    sum = sum += i
  }
  return sum
}

const reverse = function (str) {
  const split = str.split('')
  const rev = split.reverse()
  const join = rev.join('')
  return join
}

const dashing = function (array) {
  return array.join('-')
}

// cannot figure this out...I am close though
// const upAndDown = function (n) {
//   let upDown = ''
//   let goingUp = 0
//   let goingDown = 0
//   for (let i = 1; i <= n; i++) {
//     goingUp = i
//   }
//   for (let j = n; j > n; j--) {
//     goingDown = j
//   }
//   upDown = goingUp + ', ' + goingDown
//   return upDown
// }

// started longestWord function below
// const longestWord = function (str) {
//   const splitString = str.split(' ')
//   return splitString
// }
