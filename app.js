// variable and assignment, comparision and airthematic operator practice

// let num1 = parseFloat(prompt('Enter a number'))
// let operator = prompt('Enter a operator: + - * /')
// let num2 = parseFloat(prompt('Enter a number'))

// let result;

// switch (operator) {
//     case "+":
//         result = num1 + num2;
//         break;
//     case '-':
//         result = num1 - num2
//         break;
//     case '*':
//         result = num1 * num2
//         bresk;
//     case '/':
//         result = num2 !== 0 ? num1 / num2 : '0 is invalid'
//     default:
//         result = "Invalid operator"
//         break;
// }

// alert(result)

// operators ternary

// let status = 20;

// let result = status >= 100 ? "Gold" : status >= 60 ? "Silver" : "Bronze";
// console.log(result);


// Game state calculator

let baseHealth = 100;
let damage = 50;
let mana = 25;

let currentHealth = baseHealth - damage;
let healthPercentage = (currentHealth/baseHealth) * 100

let healthState = currentHealth <= 0 ? 'Fainted' : currentHealth >= 25 ? 'All Right' : 'Critical';
let canCastUltimate = mana <= 50 && currentHealth > 50 ? 'Ready' : 'Not Ready'

console.log(`Health Status: ${healthState}`)
console.log(`Can Cast Mana: ${canCastUltimate}`)