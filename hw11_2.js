/*validate
Вам необхідно написати функцію-декоратор validate(fn, validator), яка приймає на вхід функцію і додає можливість перевіряти аргументи,
 передані у функцію fn, на відповідність заданому validator. 
  аргументи не проходять перевірку, то декоратор має викидати виняток.
*/
function validate(fn, validator) {
    return function(...args) {
        if (!validator(...args)) {
            throw new Error('Validation failed');
        }
        return fn(...args);
    };
}
function isNumberValidator(...args) {
    return args.every(arg => typeof arg === 'number');
}
function sum(a, b) {
    return a + b;
}

const validatedSum = validate(sum, isNumberValidator);

try {
    console.log(validatedSum(2, 3)); 
    console.log(validatedSum(2, '3')); 
} catch (e) {
    console.error(e.message);
}