/*retry
Вам необхідно написати функцію-декоратор retry(fn, maxAttempts),
 яка приймає на вхід функцію і додає можливість викликати функцію з максимальною кількістю спроб у разі помилки
  та повертає результат останнього виклику.
*/
function retry(fn, maxAttempts) {
    return function(...args) {
        let attempts = 0;
        let lastError;

        while (attempts < maxAttempts) {
            try {
                return fn(...args);
            } catch (error) {
                attempts++;
                lastError = error;
            }
        }

        throw lastError;
    };
};

function mightFail() {
    const random = Math.random();
    if (random < 0.7) {
        throw new Error('Function failed');
    }
    return 'Function succeeded';
}

const mightFailWithRetry = retry(mightFail, 3);

try {
    const result = mightFailWithRetry();
    console.log(result);
} catch (error) {
    console.error(error.message);
}