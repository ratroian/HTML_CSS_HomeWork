console.log('start');

// const printNumbers = (value) => {
//     if (value > 0 && Number.isInteger(value)) {
//         for (let i = 1; i <= value ; i++) {
//             switch (true) {
//                 case (i % 3 === 0 && i % 5 === 0):
//                     console.log('threeFive');
//                     break;
//                 case (i % 3 === 0):
//                     console.log('three');
//                     break;
//                 case (i % 5 === 0):
//                     console.log('five');
//                     break;
//                 default:
//                     console.log(i);
//             };
//         };
//     } else {
//         console.log('Некорректные данные')
//     }
// };

// 1.1
const getMathResult = (firstValue, secondValue) => {
    let result;
    if (firstValue % 2 === 0) {
        result = firstValue*secondValue;
    } else {
        result = firstValue+secondValue;
    };
    console.log(result)
};

// 1.2
const getQuarterPoint = (x, y) => {
    let quarterPoint;
    switch (true) {
        case (x > 0 && y > 0):
            quarterPoint = '1 quarter';
            break;
        case (x < 0 && y > 0):
            quarterPoint = '2 quarter';
            break;
        case (x < 0 && y < 0):
            quarterPoint = '3 quarter';
            break;
        case (x > 0 && y < 0):
            quarterPoint = '4 quarter';
            break;
    }
    console.log(quarterPoint);
};

// 1.3
const getSumm = (firstValue, secondValue, thirdValue) => {
    let result = 0;
    (firstValue > 0) ? result = firstValue + result : result;
    (secondValue > 0) ? result = result + secondValue : result;
    (thirdValue > 0) ? result = result + thirdValue : result;

    return result;
}
console.log(getSumm(5,-5,5));

// 1.4

// 1.5
const getRating = (rating) => {
    const maxRatingF = 19;
    const maxRatingE = 39;
    const maxRatingD = 59;
    const maxRatingC = 74;
    const maxRatingB = 89;
    const maxRatingA = 100;
    switch (true) {
        case (rating <= maxRatingF && rating >= 0):
            console.log('Оценка F');
            break;
        case (rating > maxRatingF && rating <= maxRatingE):
            console.log('Оценка E');
            break;
        case (rating > maxRatingE && rating <= maxRatingD):
            console.log('Оценка D');
            break;
        case (rating > maxRatingD && rating <= maxRatingC):
            console.log('Оценка C');
            break;
        case (rating > maxRatingC && rating <= maxRatingB):
            console.log('Оценка B');
            break;
        case (rating > maxRatingB && rating <= maxRatingA):
            console.log('Оценка A');
            break;
    };
};
console.log(getRating(55));