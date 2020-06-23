//Write a program that takes a single parameter from the command line,
// a number, and rolls that many six-sided dice.

//> node dice-roller.js 3
//Rolled 3 dice: 2, 6, 5

//To generate a random number, you'll have to use the built-in Math.random.
//owever, for this exercise you are free to use Array.prototype.join.

let input = process.argv.slice(2)

let array = ['node', 'diceRoller.js', 3]

const dice = (number) => {

  let result = ''

  for (var i = 0 ; i < number ; i++) {
    i !== (number-1) ? result += Math.floor(Math.random() * 6 )+1 + ',' : result += Math.floor(Math.random() * 6 )+1
  } 
  
  return `Rolled ${number} dice: ${result}`

}

// Rolled 3 dice: 2, 6, 5

const finaldice = dice(input)
console.log(finaldice)