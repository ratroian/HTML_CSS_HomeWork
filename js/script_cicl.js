console.log('cicles');
// 2.1
const minValue = 1;
const maxValue = 99;
const getSumm = (minValue, maxValue) => {
    let summ = 0;
    let quantity = 0;
    for (let i = minValue; i <= maxValue; i++) {
        if ((i % 2) === 0) {
            summ = summ + i;
            quantity = quantity + 1;
        }
    }
    console.log(quantity,'quantity')
    console.log(summ,'summ')
};
getSumm(minValue, maxValue);

// 2.2
const getElementaryNumber = (number) => {
    for (let i = 0; i <= number; i++) {
        if ((number % i) !== 0 && (number % 2) !== 0) {
            console.log(`${number} простое число`)
        } else if ((number % i) === 0 && (number % 2) === 0) {
            console.log(`${number} НЕ простое число`)
        }
    }
}

console.log(getElementaryNumber(1))