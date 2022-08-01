function calculator(string) {

    const [first, operation, second] = string.split(" ");

    const arabic = {
        'I': 1,
        'II': 2,
        'III': 3,
        'IV': 4,
        'V': 5,
        'VI': 6,
        'VII': 7,
        'VIII': 8,
        'IX': 9,
        'X': 10
    }

    function toArabic(value) {
        let newValue;

        if (value in arabic) {
            newValue = arabic[value];
        } else {
            newValue = Number(value);
        }

        if (typeof newValue !== 'number') {
            throw Error;
        } else {
            return newValue
        }
    }

    const newFirst = toArabic(first);
    const newSecond = toArabic(second);

    console.log(newFirst);
    console.log(newSecond);

    
    var toOperator = {
        '+': function (x, y) { return x + y },
        '-': function (x, y) { return x - y },
        '*': function (x, y) { return x * y },
        '/': function (x, y) { return Math.trunc(x / y) }
    }

    const result = toOperator[operation](newFirst, newSecond);

    return result.toString();



}


module.exports = calculator;
