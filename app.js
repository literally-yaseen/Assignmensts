let num1 = parseFloat(prompt('Enter a number'))
let operator = prompt('Enter a operator: + - * /')
let num2 = parseFloat(prompt('Enter a number'))

let result;

switch (operator) {
    case "+":
        result = num1 + num2;
        break;
    case '-':
        result = num1 - num2
        break;
    case '*':
        result = num1 * num2
        bresk;
    case '/':
        result = num2 !== 0 ? num1 / num2 : '0 is invalid'
    default:
        result = "Invalid operator"
        break;
}

alert(result)