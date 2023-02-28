const factorial = require('../factorial/index')
const ratio = require('../ratio/index')

function ratioAndFactorial(num1,num2,num3){
    const resultObject = {
        ratio : ratio(num1, num2),
        factorial:factorial(num3)
    }
    return resultObject
}

module.exports = ratioAndFactorial;

