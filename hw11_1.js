/*logArguments
Вам необхідно написати функцію-декоратор logArguments(fn),
 яка приймає на вхід функцію і додає можливість логувати всі аргументи, передані у функцію-аргумент.
*/
function sum(a, b) {
    return a + b;
}

function logArguments(fn) {
    return function(...args) {
        console.log('Arguments:', ...args);
        return fn(...args);
    };
}

const loggedSum = logArguments(sum);

console.log(loggedSum(2, 3));
//для чисел